// pages/api/Luvra/register-user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/UI-Features/DBMS/Library/DatabaseConfig';
import { luvParse } from '@luvra/luvsql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { fullName, emailAddress, phoneNumber, keyPurpose = "Join the Foundation" } = req.body;

  if (!fullName || !emailAddress || !phoneNumber) {
    return res.status(400).json({ 
      success: false, 
      error: 'Full Name, Email Address and Phone Number are required' 
    });
  }

  const createdAt = new Date().toISOString();

  try {
    // Define the correct blueprint for House of Grace (only 3 main fields + metadata)
    await db.execute(luvParse(
      `DEFINE|BLUEPRINT users full_name TEXT email TEXT SECURE phone TEXT SECURE registration_date TEXT key_purpose TEXT status TEXT`
    )).catch(() => {});

    // Store the entry - single line to avoid parser issues
    await db.execute(luvParse(
      `STORE|ENTRY users full_name "${fullName}" email "${emailAddress}" phone "${phoneNumber}" registration_date "${createdAt}" key_purpose "${keyPurpose}" status "Pending Verification"`
    ));

    console.log(`✅ User registered successfully: ${fullName}`);

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Luvra Store Error:", err.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Database error. Please try again later.' 
    });
  }
}