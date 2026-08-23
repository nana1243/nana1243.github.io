import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/assets/image';

const thumbDir = './src/assets/image/thumb';
const largeDir = './src/assets/image/large';

if (!fs.existsSync(thumbDir)) {
    fs.mkdirSync(thumbDir, { recursive: true });
}

if (!fs.existsSync(largeDir)) {
    fs.mkdirSync(largeDir, { recursive: true });
}

const files = fs
    .readdirSync(inputDir)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    const thumbPath = path.join(thumbDir, outputName);
    const largePath = path.join(largeDir, outputName);

    console.log('processing:', inputPath);

    try {
        // 갤러리 목록용 썸네일
        await sharp(inputPath)
            .rotate()
            .resize(600, 600, {
                fit: 'cover',
                position: 'center',
            })
            .webp({
                quality: 80,
            })
            .toFile(thumbPath);

        console.log(`thumbnail created: ${thumbPath}`);

        // Lightbox 확대용
        await sharp(inputPath)
            .rotate()
            .resize({
                width: 1800,
                height: 1800,
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({
                quality: 82,
            })
            .toFile(largePath);

        console.log(`large created: ${largePath}`);

    } catch (error) {
        console.error(`❌ failed: ${inputPath}`);
        console.error(error.message);
    }
}