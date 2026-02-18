import fs from 'fs';
import path from 'path';

const sourceDir = 'C:\\Users\\sudhe\\Downloads\\ezgif-297d9e60bec7274d-jpg';
const targetDir = 'public/sequence';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    let count = 0;
    files.forEach((file, index) => {
        if (file.endsWith('.jpg')) {
            // Check if file matches pattern ezgif-frame-XXX.jpg
            const match = file.match(/ezgif-frame-(\d+)\.jpg/);
            if (match) {
                const number = match[1]; // Keep original number logic or re-index
                // We want generic frame_001.jpg
                // Logic: 001 -> 001 (pad start 3)
                const newName = `frame_${number.padStart(3, '0')}.jpg`;
                const sourcePath = path.join(sourceDir, file);
                const targetPath = path.join(targetDir, newName);

                fs.copyFileSync(sourcePath, targetPath);
                console.log(`Copied ${file} -> ${newName}`);
                count++;
            }
        }
    });
    console.log(`Successfully migrated ${count} frames.`);
});
