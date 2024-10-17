import { promises as fs } from 'fs';
import path from 'path';

async function getMdFiles(directory) {
    const mdFiles = [];
    async function walk(dir) {
        const files = await fs.readdir(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) {
                await walk(filePath);
            } else if (file.endsWith('.md')) {
                mdFiles.push(filePath);
            }
        }
    }
    await walk(directory);
    return mdFiles;
}

async function extractMetadata(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');
    let title = '';
    let date = '';
    for (const line of lines) {
        if (line.startsWith('# ')) {
            title = line.replace('# ', '').trim();
        } else if (line.startsWith('Date: ')) {
            date = line.replace('Date: ', '').trim();
        }
        if (title && date) break;
    }
    if (!title || !date) {
        title = path.basename(filePath, '.md');
        const stat = await fs.stat(filePath);
        date = new Date(stat.mtime).toISOString().split('T')[0];
    }
    return { title, date };
}

async function generateDataTs(mdFiles, filepath) {
    const data = await Promise.all(mdFiles.map(extractMetadata));
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const tsContent = `export const data = ${JSON.stringify(data, null, 2)};`;

    await fs.writeFile(filepath, tsContent, 'utf-8');
}

async function main() {
    const blogsDir = 'pages/blogs';
    const mdFiles = await getMdFiles(blogsDir);
    await generateDataTs(mdFiles, 'data/blogs.ts');

    const weeklyDir = 'pages/weekly';
    const weeklyMdFiles = await getMdFiles(weeklyDir);
    await generateDataTs(weeklyMdFiles, 'data/weekly.ts');

    console.log("data.ts 已生成");
}

main().catch(console.error);
