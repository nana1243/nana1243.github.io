import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/assets/image';
const outputDir = './src/assets/image/thumb';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs
    .readdirSync(inputDir)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);

    await sharp(inputPath)
        .resize(600, 600, {
            fit: 'cover',
            position: 'center',
        })
        .webp({
            quality: 80,
        })
        .toFile(outputPath);

    console.log(`created: ${outputPath}`);
}