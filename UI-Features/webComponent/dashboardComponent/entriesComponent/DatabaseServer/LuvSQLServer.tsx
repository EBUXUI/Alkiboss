// lib/luvsql-server.ts
import { LuvSQLExecutor, LuvSQLStorage, luvParse, AbsolutePath } from '@luvra/luvsql';
import fs from 'fs';
import path from 'path';

function toAbsolutePath(p: string): AbsolutePath {
  return p as AbsolutePath;
}

export type LuvSQLResult =
  | {
      success: true;
      message: string;
      blueprints?: string[];
      inserted?: Record<string, any>;
      horizontalPanel?: any[];
      updated?: number;
      removed?: number;
    }
  | { success: false; message: string };

export async function createLuvSQLExecutor() {
  const dbPath = toAbsolutePath(path.resolve(process.cwd(), 'data/test-db.json'));
  const securePath = toAbsolutePath(path.resolve(process.cwd(), 'data/secure-channel'));

  const dataDir = path.dirname(dbPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (process.env.SKIP_CLEANUP !== 'true') {
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
    if (fs.existsSync(securePath)) fs.rmSync(securePath, { recursive: true });
  }

  const encryptionKey = process.env.LUVRA_ENCRYPTION_KEY || 'default-luvra-key-32-bytes-long-for-testing';
  if (Buffer.from(encryptionKey, 'hex').length !== 32) {
    return { executeLuvSQL: async () => ({ success: false, message: 'Invalid encryption key' }) };
  }

  const config = {
    persistent: true,
    dbPath,
    luvraSecureChannelPath: securePath,
    secureByDefault: false,
    encryptionKey,
  };

  const storage = new LuvSQLStorage(config);
  const executor = new LuvSQLExecutor(storage);

  const executeLuvSQL = async (
    action: string,
    dbName: string,
    columns: string
  ): Promise<LuvSQLResult> => {
    try {
      if (action === 'defineBlueprint') {
        const query = `DEFINE|BLUEPRINT ${dbName} ${columns}`;
        return (await executor.execute(luvParse(query))) as LuvSQLResult;
      }
      return { success: false, message: 'Invalid action' };
    } catch (e: any) {
      return { success: false, message: e.message };
    }
  };

  return { executeLuvSQL };
}