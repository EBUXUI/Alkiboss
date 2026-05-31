// src/lib/logger.ts — THE ETERNAL ARCHIVE
import fs from 'fs';
import path from 'path';

const LOG_DIR = path.resolve(process.cwd(), '.luvsql', 'archive');
const LOG_FILE = path.join(LOG_DIR, 'souls.jsonl'); // JSON Lines format = one JSON per line

// Ensure directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// Append a soul to the eternal archive
export function logSoulBaptism(ast: any) {
  const entry = {
    timestamp: new Date().toISOString(),
    type: ast.type,
    canvas: ast.Canvas,
    name: ast.values[0],
    email: ast.values[1],
    price: ast.values[3],
    password_hash: ast.values[2], // encrypted by LuvSQL
    raw_ast: ast,
  };

  const line = JSON.stringify(entry) + '\n';
  fs.appendFileSync(LOG_FILE, line);
}
