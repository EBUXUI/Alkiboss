// src/lib/db.ts
import { LuvSQLExecutor } from '@luvra/luvsql';
import { LuvSQLStorage } from '@luvra/luvsql';
import path from 'path';
import fs from 'fs';
import type { AbsolutePath } from '@luvra/luvsql';

declare global {
  var __luvsql: LuvSQLExecutor | undefined;
}

const luvsqlDir = path.resolve(process.cwd(), '.luvsql');
fs.mkdirSync(luvsqlDir, { recursive: true });

const toAbsolutePath = (p: string): AbsolutePath => {
  if (!path.isAbsolute(p)) {
    throw new Error(`Path must be absolute: ${p}`);
  }
  return p as AbsolutePath;
};

const pepper = process.env.LUVSQL_PEPPER
const encryptionKey = process.env.LUVRA_ENCRYPTION_KEY;
if (!process.env.LUVSQL_PEPPER || !process.env.LUVRA_ENCRYPTION_KEY) {
  console.warn('Using fallback LuvSQL keys for demo. Set LUVSQL_PEPPER and LUVRA_ENCRYPTION_KEY in .env.local for secure production use.');
}

export const db = globalThis.__luvsql || new LuvSQLExecutor(
  new LuvSQLStorage({
    persistent: true,
    dbPath: toAbsolutePath(path.resolve(luvsqlDir, 'data.json')),
    luvraSecureChannelPath: toAbsolutePath(path.resolve(luvsqlDir, 'secure')),
    encryptionKey,
  })
);

if (process.env.NODE_ENV !== 'production') {
  globalThis.__luvsql = db;
}
