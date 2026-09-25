const fs = require('fs');
let content = fs.readFileSync('d:/Code/FrontEndLTW/src/data/types.js', 'utf8');

// Replace avatars
content = content.replace(/avatar:\s*["']\\u265A["']/g, 'avatar: "M"');
content = content.replace(/avatar:\s*["']\\u2654["']/g, 'avatar: "F"');
content = content.replace(/avatar:\s*["']\\u265B["']/g, 'avatar: "D"');
content = content.replace(/avatar:\s*["']\\u2655["']/g, 'avatar: "I"');
content = content.replace(/avatar:\s*["']\\u265C["']/g, 'avatar: "A"');
content = content.replace(/avatar:\s*["']\\u265D["']/g, 'avatar: "G"');
content = content.replace(/avatar:\s*["']\\u265E["']/g, 'avatar: "W"');
content = content.replace(/avatar:\s*["']\\u265F["']/g, 'avatar: "V"');
content = content.replace(/avatar:\s*["']\\u265F["']/g, 'avatar: "H"');
content = content.replace(/avatar:\s*["']\\u265C["']/g, 'avatar: "L"');

// Strip any remaining country flags (u1F1xx)
content = content.replace(/country:\s*["']\\u\{1F1[E-F][A-Z0-9]\}\\u\{1F1[E-F][A-Z0-9]\}["']/g, 'country: ""');

fs.writeFileSync('d:/Code/FrontEndLTW/src/data/types.js', content, 'utf8');
console.log("Emojis removed.");
