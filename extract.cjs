const fs = require('fs');
const path = require('path');

const logPath = 'C:/Users/ADMIN/.gemini/antigravity-ide/brain/6622fb12-e169-4c3d-8ec0-c6fc2f317b51/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

const filesToRestore = {};

for (const line of lines) {
    if (!line) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.type === 'PLANNER_RESPONSE' && obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'write_to_file' || call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
                    const args = call.args;
                    if (args.TargetFile && args.TargetFile.endsWith('.tsx') || args.TargetFile && args.TargetFile.endsWith('.ts')) {
                        const target = args.TargetFile.replace(/\\/g, '/');
                        const basename = path.basename(target);
                        if (call.name === 'write_to_file') {
                             filesToRestore[basename] = args.CodeContent;
                        } else {
                             // Ignore replace for now, hopefully the last write_to_file is mostly right,
                             // or we can write the extracted CodeContent.
                        }
                    }
                }
            }
        }
    } catch (e) {
    }
}

const outDir = 'd:/Code/FrontEndLTW/src/restored';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const [name, content] of Object.entries(filesToRestore)) {
    fs.writeFileSync(path.join(outDir, name), content);
    console.log('Restored: ' + name);
}
