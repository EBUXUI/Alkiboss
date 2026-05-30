// pages/api/Luvra/register-user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/UI-Features/DBMS/Library/DatabaseConfig';
import { luvParse } from '@luvra/luvsql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
      return res.status(405).json({ success: false, error: 'Method not allowed' });
    }
  
    const { userName, passWord, keyPurpose = "Login to the Foundation"} = req.body;
  
    const name = userName?.toString().trim();
    const password = passWord?.toString();
  
    if (!name || !password || password.length < 4) {
      return res.status(400).json({ success: false, error: 'Missing or invalid fields' });
    }
  
    const createdAt = new Date().toISOString();
  
  try {
    // Retrieve the correct Entry for House of Grace (only 3 main fields + metadata)
    await db.execute(luvParse(
      `
      DEFINE|BLUEPRINT AgentOne StrategicDirector TEXT SECURE passWord TEXT SECURE login_date TEXT key_purpose TEXT status TEXT
      DEFINE|BLUEPRINT AgentTwo ProgramSupervisor TEXT SECURE passWord TEXT SECURE login_date TEXT key_purpose TEXT status TEXT
      DEFINE|BLUEPRINT AgentThree OperationsOfficer TEXT SECURE passWord TEXT SECURE login_date TEXT key_purpose TEXT status TEXT
      `
    ))

    await db.execute(luvParse(
      `
      STORE|ENTRY AgentOne StrategicDirector ${userName} password ${passWord} login_date ${createdAt} key_purpose ${keyPurpose} status "Authentication Invoked"
      STORE|ENTRY AgentTwo ProgramSupervisor ${userName} password ${passWord} login_date ${createdAt} key_purpose ${keyPurpose} status "Authentication Invoked"
      STORE|ENTRY AgentThree OperationsOfficer ${userName} password ${passWord} login_date ${createdAt} key_purpose ${keyPurpose} status "Authentication Invoked"
      `
    ))
    await db.execute(luvParse(
      `RETRIEVE|ENTRY users userName "${userName}" password "${passWord}" `
    ));

    console.log(`✅ Greetings ${userName},  Login was Successfull.`);

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Luvra Store Error:", err.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Database error. Please try again later.' 
    });
  }
}