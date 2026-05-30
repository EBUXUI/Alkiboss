// pages/api/luvra-store-user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/UI-Features/DBMS/Library/DatabaseConfig';
import { luvParse } from '@luvra/luvsql';
import { logSoulBaptism } from '@/UI-Features/DBMS/Library/LogConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { userName, passWord } = req.body;

  const name = userName?.toString().trim();
  const email = '';           // no email field in this form
  const price = '';           // no price field in this form
  const password = passWord?.toString();

  if (!name || !password || password.length < 4) {
    return res.status(400).json({ success: false, error: 'Missing or invalid fields' });
  }

  const createdAt = new Date().toISOString();

  try {
    // Exact same blueprint as your first platform
    await db.execute(luvParse('DEFINE|BLUEPRINT usersII name TEXT email TEXT SECURE price TEXT SECURE password TEXT SECURE created_at TEXT')).catch(() => {});
  } catch {}

  await db.execute(luvParse(`STORE|ENTRY usersII name "${name}" email "${email}" price "${price}" password "${password}" created_at "${createdAt}"`));

  // Exact same logging as your first platform
  logSoulBaptism({ type: 'STORE|ENTRY', Canvas: 'usersII', values: [name, email, price, createdAt] });

  return res.status(200).json({ success: true });
}