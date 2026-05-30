// pages/api/finanvra-data.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/UI-Features/DBMS/Library/DatabaseConfig';
import { luvParse } from '@luvra/luvsql';
import fs from 'fs/promises';
import path from 'path';

const purposes = [
  // Cancer Components
  "Lung Cancer Platform Registration",
  "Breast Cancer Platform Registration",
  "Pancreatic Cancer Platform Registration",
  "Brain Cancer Platform Registration",
  "Blood Cancer Platform Registration",
  "Liver Cancer Platform Registration",
  "Ovarian Cancer Platform Registration",
  "Colorectal Cancer Platform Registration",
  "Emotional Wellness Regime Registration",
  "Environmental Healing Regime Registration",
  "Complementary Healing Regime Registration",
  "Social Engagement Regime Registration",
  "The Entire Cancer Regime Registration",
  "Cancer Workshop Regime Registration",

  // Disability Components
  "Visual Impairment Platform Registration",
  "Hearing Impairment Platform Registration",
  "Limb Amputation Platform Registration",
  "Spinal-Cord Related Platform Registration",
  "Child Mobility Platform Registration",
  "Child Communication Platform Registration",
  "Dementia Platform Registration",
  "Muscular Dystrophy Platform Registration",
  "Brain Training Regime Registration",
  "Movement Training Regime Registration",
  "Biotech Medicine Regime Registration",
  "Assistive Technology Regime Registration",
  "The Entire Disability Regime Registration",

  // Fundraising
  "Offer a Donation",
  "Crowd Funding Platform Registration",

  // Volunteering
  "On-Ground Volunteer Registration",
  "Virtual Volunteer Registration",

  // Advocacy
  "Social Campaign Platform Registration",
  "Community Seminar Platform Registration",

  // International Exchange
  "Cross-Border Medical Exchange Registration",
  "Humanitarian Emergency Response Registration",

  // General
  "Join the Foundation",
  "Join the Affiliate Marketing",
  "General Inquiry / Help Desk",
  "Sponsorship Program Registration",
  "Schedule Test Consultation",
  "Schedule Treatment Call Session",
  "Referral / Support Request"
];

const locations = ["Nairobi, Kenya", "Mombasa, Kenya", "Kisumu, Kenya", "Uganda", "Tanzania", "Rwanda", "United Kingdom", "United States", "Germany", "India"];
const interactionTypes = ["Registration", "Donation", "Appointment", "Program Enrollment", "Consultation", "Volunteer Application", "Seminar Signup", "Sponsor Request"];
const programs = ["Cancer Support", "Disability Inclusion", "Research Partnership", "Medical Training", "Humanitarian Aid"];
const statuses = ["Active", "Pending Review", "Completed", "In Progress"];


function formatDateTime(dateStr: string): string {
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) +
    ' at ' +
    date
      .toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .replace(' ', '')
      .toUpperCase()
  );
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false });
  }

  let users: any[] = [];
  try {
    // Primary: Fast direct file read (same as your first platform)
    const luvsqlPath = path.join(process.cwd(), '.luvsql/data.json');
    const dataJson = await fs.readFile(luvsqlPath, 'utf-8');
    const parsedData = JSON.parse(dataJson);
    const canvas = parsedData.Canvases?.find((c: any) => c.name === 'users');
    users = canvas?.horizontalPanels || [];
    users = [...users].sort(
      (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (err: any) {
    console.error('Direct file read failed, falling back to LuvSQL query:', err);
    try {
      const result = await db.execute(luvParse("RETRIEVE|ENTRY users *"));
      users = (result as any)?.horizontalPanel || [];
      users = [...users].sort(
        (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } catch (queryErr) {
      console.error('LuvSQL fallback failed:', queryErr);
      users = [];
    }
  }


const mappedData = users.map((user: any, index: number) => ({
  id: index + 1,
  userName: user.name || 'Anonymous Supporter',
  contact:'Contact Handler',
  Lab: 'Lab Handler',
  location: locations[index % locations.length],
  keyPurpose: purposes[index % purposes.length],
  interactionType: interactionTypes[index % interactionTypes.length],
  programJoined: programs[index % programs.length],
  status: statuses[index % statuses.length],
  registrationDate: user.created_at ? formatDateTime(user.created_at) : 'N/A'
}));
  return res.status(200).json({ success: true, data: mappedData });
}
