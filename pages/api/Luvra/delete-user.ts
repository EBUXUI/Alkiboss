// pages/api/luvra-delete-user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/UI-Features/DBMS/Library/DatabaseConfig';
import { luvParse } from '@luvra/luvsql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false });
  }

  const { id } = req.body;
  if (!id) return res.status(400).json({ success: false });

  try {
    await db.execute(luvParse(`ERASE|ENTRY users _id "${id}"`));
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Delete failed:', err);
    return res.status(500).json({ success: false });
  }
}