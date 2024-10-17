import os
import json
from datetime import datetime

def get_md_files(directory):
    md_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    return md_files

def extract_metadata(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        lines = content.split('\n')
        title = ''
        date = ''
        for line in lines:
            if line.startswith('# '):
                title = line.replace('# ', '').strip()
            elif line.startswith('Date: '):
                date = line.replace('Date: ', '').strip()
            if title and date:
                break
        if not title or not date:
            title = os.path.basename(file_path).replace('.md', '')
            date = datetime.fromtimestamp(os.path.getmtime(file_path)).strftime('%Y-%m-%d')
        return {
            'title': title,
            'date': date,
        }

def generate_data_ts(md_files, filepath):
    data = [extract_metadata(file) for file in md_files]
    data.sort(key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)
    
    ts_content = f"export const data = {json.dumps(data, indent=2)};"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(ts_content)

if __name__ == '__main__':
    blogs_dir = 'pages/blogs'
    md_files = get_md_files(blogs_dir)
    generate_data_ts(md_files, 'data/blogs.ts')

    weekly_dir = 'pages/weekly'
    md_files = get_md_files(weekly_dir)
    generate_data_ts(md_files, 'data/weekly.ts')

    print("data.ts 已生成")
