import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 224; // Based on actual assets in folder
const IMAGES_PATH = '/sequence/ezgif-frame-'; // Matches actual filenames

const SequenceCanvas = ({ scrollProgress }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef(new Array(FRAME_COUNT).fill(null));
    // We don't need detailed progress state, just a flag when enough frames are ready to start
    // or when everything is done. isLoading handles the initial block.
    const [isLoading, setIsLoading] = useState(true);

    // Preload images in non-blocking batches
    useEffect(() => {
        let isMounted = true;

        const loadBatch = async (startIndex, batchSize) => {
            if (!isMounted) return;

            const endIndex = Math.min(startIndex + batchSize, FRAME_COUNT);
            const promises = [];

            for (let i = startIndex; i < endIndex; i++) {
                // If already loaded, skip
                if (imagesRef.current[i]) continue;

                const promise = new Promise((resolve) => {
                    const img = new Image();
                    const paddedIndex = (i + 1).toString().padStart(3, '0');
                    img.src = `${IMAGES_PATH}${paddedIndex}.jpg`;
                    img.onload = () => {
                        if (isMounted) {
                            imagesRef.current[i] = img;
                            resolve();
                        }
                    };
                    img.onerror = resolve; // Continue on error
                });
                promises.push(promise);
            }

            await Promise.all(promises);

            // Allow rendering to start after first batch
            if (startIndex === 0 && isMounted) {
                setIsLoading(false);
            }

            if (endIndex < FRAME_COUNT && isMounted) {
                // Yield to main thread to keep UI responsive
                setTimeout(() => loadBatch(endIndex, batchSize), 0);
            }
        };

        // Start loading: First batch larger for immediate start
        loadBatch(0, 20);

        return () => {
            isMounted = false;
        };
    }, []);

    // Draw frame based on scroll
    const renderFrame = (progress) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Map progress (0-1) to frame index
        let frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
        frameIndex = Math.max(0, Math.min(frameIndex, FRAME_COUNT - 1));

        const img = imagesRef.current[frameIndex];

        if (img && img.complete) {
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.height * imgRatio;
                drawHeight = canvas.height;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }

            drawWidth = Math.ceil(drawWidth + 2);
            drawHeight = Math.ceil(drawHeight + 2);
            offsetX = Math.floor(offsetX - 1);
            offsetY = Math.floor(offsetY - 1);

            // Clear and draw
            // Create a "void" background to match the image if needed, or just clear
            // ctx.fillStyle = '#ffffff';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    // Handle high-res canvas scaling
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;

                // Initial draw (try to render frame 0 if available)
                renderFrame(scrollProgress.get() || 0);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Subscribe to scroll changes to draw
    useMotionValueEvent(scrollProgress, "change", (latest) => {
        requestAnimationFrame(() => renderFrame(latest));
    });

    return (
        <div className="fixed inset-0 w-full h-full bg-white z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default SequenceCanvas;
