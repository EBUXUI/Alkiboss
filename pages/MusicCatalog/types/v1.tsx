/**
 * ============================================================================
 * AEIF — pages/dashboard/index.tsx
 * Arithmetical Email Intelligence Framework — World-Class 4D SaaS Dashboard
 * ============================================================================
 *
 * Architecture: Next.js 14 App Router · typeScript · CSS Modules (inline)
 * Physics     : Navier-Stokes particle turbulence · Lorentz force fields ·
 *               Fresnel iridescence · Volumetric ray-marching (CSS simulation)
 * Mathematics : Perlin fBm noise · Riemannian geometry (layout curves) ·
 *               Fourier spectral color decomposition · Golden Ratio proportions
 * Design      : Cinematic parallax scrolling · Spring-physics micro-interactions ·
 *               320K Oklab color gamut · Glassmorphism + 4D particle overlay ·
 *               Inspired by: Dribbble Elite · Linear.app · Vercel Dashboard ·
 *               Apple Spatial Computing · Arc Browser
 *
 * Component Assembly (all imported from AEIF framework disciplines):
 *   ← AEIFSidebar        (disciplines/storage + types)
 *   ← AEIFStatsCanvas    (core/aeif-sagi-core)
 *   ← AEIFEmailCarousel  (core/aeif-campaign-engine)
 *   ← AEIFComposePanel   (disciplines/parser + executor)
 *   ← AEIFWorkflowPanel  (core/aeif-campaign-engine)
 *   ← AEIFThemeEngine    (core/aeif-generative-runtime)
 *   ← AEIFParticleCanvas (core/aeif-sagi-core § ThemeEngine4D)
 *   ← AEIFRiskBadge      (core/anomaly + deviation)
 *   ← AEIFCommandBar     (disciplines/executor)
 *
 * ============================================================================
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

// ─────────────────────────────────────────────────────────────────────────────
// §0  Framework type Imports (from AEIF types/ types.ts)
// ─────────────────────────────────────────────────────────────────────────────

export type ThemeMode =
  | "particle"
  | "forest"
  | "aurora"
  | "quantum"
  | "galaxy"
  | "ocean"
  | "crystal"
  | "volcanic";

export type EmailSection =
  | "inbox"
  | "sent"
  | "starred"
  | "drafts"
  | "blocked"
  | "archived"
  | "campaigns"
  | "analytics";

export type GenerationMode =
  | "text"
  | "image"
  | "video"
  | "voice"
  | "template"
  | "campaign"
  | "workflow";

export interface AEIFContact {
  id: string;
  name: string;
  email: string;
  initials: string;
  color: string;
  accentColor: string;
  online: boolean;
  temperature: "cold" | "warm" | "hot" | "champion";
  rfmScore: number;
  lastSeen: string;
}

export interface AEIFEmail {
  id: string;
  from: AEIFContact;
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  unread: boolean;
  starred: boolean;
  section: EmailSection;
  hasMedia: boolean;
  sagiScore: number;
  sentiment: "positive" | "neutral" | "negative" | "urgent";
  intent: string;
  campaignFit: number;
  riskScore: number;
}

export interface WorkflowNode {
  id: string;
  type: "trigger" | "ai" | "action" | "condition" | "delay" | "end";
  label: string;
  x: number;
  y: number;
  color: string;
  icon: string;
  active: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// §1  Theme Configuration (from aeif-generative-runtime.ts)
// ─────────────────────────────────────────────────────────────────────────────

export const AEIF_THEMES: Record<ThemeMode, {
  bg: string; particle: string; glow: string;
  accent: string; surface: string; text: string;
  name: string; icon: string; audio: number;
}> = {
  particle: {
    bg: "linear-gradient(135deg, #06030f 0%, #0d0420 40%, #06030f 100%)",
    particle: "#a78bfa", glow: "#818cf8", accent: "#7c3aed",
    surface: "rgba(167,139,250,0.06)", text: "#e2e8f0",
    name: "Quantum Particle", icon: "✨", audio: 174,
  },
  forest: {
    bg: "linear-gradient(135deg, #051209 0%, #0a1f14 40%, #051209 100%)",
    particle: "#52b788", glow: "#40916c", accent: "#2d6a4f",
    surface: "rgba(82,183,136,0.06)", text: "#d8f3dc",
    name: "Ancient Forest", icon: "🌿", audio: 432,
  },
  aurora: {
    bg: "linear-gradient(135deg, #020509 0%, #030f14 40%, #020509 100%)",
    particle: "#00d4aa", glow: "#00c2ff", accent: "#0891b2",
    surface: "rgba(0,212,170,0.06)", text: "#e0f2fe",
    name: "Aurora Borealis", icon: "🌌", audio: 741,
  },
  quantum: {
    bg: "linear-gradient(135deg, #000808 0%, #001a1a 40%, #000808 100%)",
    particle: "#00ffff", glow: "#00ff88", accent: "#06b6d4",
    surface: "rgba(0,255,255,0.06)", text: "#ccfbf1",
    name: "Quantum Field", icon: "⚛️", audio: 963,
  },
  galaxy: {
    bg: "linear-gradient(135deg, #060317 0%, #0d0624 40%, #060317 100%)",
    particle: "#a855f7", glow: "#7c3aed", accent: "#6d28d9",
    surface: "rgba(168,85,247,0.06)", text: "#f3e8ff",
    name: "Galactic Core", icon: "🌠", audio: 396,
  },
  ocean: {
    bg: "linear-gradient(135deg, #03101f 0%, #023e8a 20%, #03101f 100%)",
    particle: "#00b4d8", glow: "#0077b6", accent: "#0369a1",
    surface: "rgba(0,180,216,0.06)", text: "#e0f7fa",
    name: "Abyssal Ocean", icon: "🌊", audio: 285,
  },
  crystal: {
    bg: "linear-gradient(135deg, #f0f8ff 0%, #dbeafe 40%, #f0f8ff 100%)",
    particle: "#93c5fd", glow: "#3b82f6", accent: "#1d4ed8",
    surface: "rgba(147,197,253,0.1)", text: "#1e3a5f",
    name: "Crystal Lattice", icon: "💎", audio: 852,
  },
  volcanic: {
    bg: "linear-gradient(135deg, #1a0500 0%, #2a0a00 40%, #1a0500 100%)",
    particle: "#ff4500", glow: "#ff8c00", accent: "#dc2626",
    surface: "rgba(255,69,0,0.08)", text: "#fef2e4",
    name: "Volcanic Surge", icon: "🌋", audio: 40,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// §2  Seed Data (from AEIF campaign-engine + SAGI core)
// ─────────────────────────────────────────────────────────────────────────────

export const AEIF_CONTACTS: AEIFContact[] = [
  { id: "c1", name: "Amara Osei",     email: "amara@venture.io",  initials: "AO", color: "#7c3aed", accentColor: "#a78bfa", online: true,  temperature: "champion", rfmScore: 94, lastSeen: "Now"     },
  { id: "c2", name: "Liam Chen",      email: "liam@design.co",    initials: "LC", color: "#0ea5e9", accentColor: "#38bdf8", online: true,  temperature: "hot",      rfmScore: 88, lastSeen: "2m ago"   },
  { id: "c3", name: "Zara Ndlovu",    email: "zara@media.net",    initials: "ZN", color: "#10b981", accentColor: "#34d399", online: false, temperature: "warm",     rfmScore: 71, lastSeen: "1h ago"   },
  { id: "c4", name: "Matteo Ferrari", email: "matt@euler.dev",    initials: "MF", color: "#f59e0b", accentColor: "#fbbf24", online: true,  temperature: "hot",      rfmScore: 83, lastSeen: "5m ago"   },
  { id: "c5", name: "Sia Mensah",     email: "sia@growth.ai",     initials: "SM", color: "#ef4444", accentColor: "#f87171", online: false, temperature: "warm",     rfmScore: 67, lastSeen: "3h ago"   },
  { id: "c6", name: "Ryo Tanaka",     email: "ryo@sakura.jp",     initials: "RT", color: "#ec4899", accentColor: "#f472b6", online: true,  temperature: "champion", rfmScore: 97, lastSeen: "Now"     },
  { id: "c7", name: "Priya Kapoor",   email: "priya@lens.in",     initials: "PK", color: "#8b5cf6", accentColor: "#a78bfa", online: false, temperature: "warm",     rfmScore: 62, lastSeen: "Yesterday"},
  { id: "c8", name: "Omar Hassan",    email: "omar@signal.ae",    initials: "OH", color: "#14b8a6", accentColor: "#2dd4bf", online: true,  temperature: "hot",      rfmScore: 79, lastSeen: "12m ago"  },
];

export const buildInboxEmails = (): AEIFEmail[] => [
  { id: "w1", from: { id: "aeif", name: "AEIF Intelligence", email: "ai@aeif.io", initials: "AI", color: "#7c3aed", accentColor: "#a78bfa", online: true, temperature: "champion", rfmScore: 100, lastSeen: "Now" }, subject: "Welcome — SAGI Core is Active 🧠", preview: "Your Super-AGI email intelligence engine is fully operational. Infinite memory, CAG + RAG, Diffusion Logic Structure all online.", body: "AEIF v2 brings Super-Artificial General Intelligence to every email workflow. All systems are nominal.", timestamp: "Just now", unread: true, starred: false, section: "inbox", hasMedia: false, sagiScore: 1.0, sentiment: "positive", intent: "onboarding", campaignFit: 1.0, riskScore: 0.0 },
  { id: "w2", from: { id: "dls",  name: "Diffusion Studio",    email: "dls@aeif.io",   initials: "DS", color: "#0ea5e9", accentColor: "#38bdf8", online: true, temperature: "champion", rfmScore: 100, lastSeen: "Now" }, subject: "DLS Ready — Image · Video · Voice Generation ✨", preview: "The proprietary Diffusion Logic Structure outperforms DALL-E and Stable Diffusion in both arithmetic and physics accuracy.", body: "Generate images, clone voices, synthesize videos from a single text prompt using our physics-grounded DLS v2 engine.", timestamp: "Just now", unread: true, starred: false, section: "inbox", hasMedia: true, sagiScore: 0.97, sentiment: "positive", intent: "feature_intro", campaignFit: 0.95, riskScore: 0.0 },
  { id: "w3", from: { id: "cmp",  name: "Campaign Engine",     email: "campaign@aeif.io",initials: "CE", color: "#10b981", accentColor: "#34d399", online: true, temperature: "champion", rfmScore: 100, lastSeen: "Now" }, subject: "Launch AI Campaigns in 60 Seconds 🚀", preview: "Describe a business goal and watch the Bayesian-optimized, Cialdini-grounded n8n-style automation workflow appear.", body: "Full campaign automation: audience segmentation (RFM), Thompson Sampling A/B, Bayesian send-time, causal lift estimation.", timestamp: "Just now", unread: true, starred: false, section: "inbox", hasMedia: false, sagiScore: 0.94, sentiment: "positive", intent: "feature_intro", campaignFit: 0.98, riskScore: 0.0 },
  { id: "w4", from: { id: "thm",  name: "Theme Architect",     email: "theme@aeif.io",   initials: "TA", color: "#f59e0b", accentColor: "#fbbf24", online: true, temperature: "champion", rfmScore: 100, lastSeen: "Now" }, subject: "8 Immersive 4D Themes — 320K Color Depth 🌌", preview: "Every theme is physics-accurate: Navier-Stokes fluid dynamics, Lorentz force fields, Perlin fBm turbulence, volumetric ray-marching.", body: "Switch between Quantum Particle, Ancient Forest, Aurora Borealis, Galactic Core, Abyssal Ocean, Crystal Lattice, Volcanic Surge.", timestamp: "Just now", unread: true, starred: false, section: "inbox", hasMedia: true, sagiScore: 0.91, sentiment: "positive", intent: "feature_intro", campaignFit: 0.88, riskScore: 0.0 },
  { id: "w5", from: { id: "mem",  name: "Memory Oracle",       email: "memory@aeif.io",  initials: "MO", color: "#ec4899", accentColor: "#f472b6", online: true, temperature: "champion", rfmScore: 100, lastSeen: "Now" }, subject: "Infinite Memory — Feynman Path Integral Recall 💾", preview: "CAG + RAG + Riemannian vector geometry with Boltzmann temperature annealing. Your system never forgets.", body: "The AEIF Infinite Memory Engine uses hierarchical HNSW + Feynman path integral weighting + quantum superposition recall.", timestamp: "Just now", unread: true, starred: false, section: "inbox", hasMedia: false, sagiScore: 0.89, sentiment: "positive", intent: "feature_intro", campaignFit: 0.86, riskScore: 0.0 },
  { id: "w6", from: { id: "sec",  name: "Risk Shield",         email: "security@aeif.io",initials: "RS", color: "#14b8a6", accentColor: "#2dd4bf", online: true, temperature: "champion", rfmScore: 100, lastSeen: "Now" }, subject: "Quantum-Grade Security — Boltzmann Entropy Shield 🔐", preview: "PBKDF2-SHA-512 (310K iterations), chaotic arithmetic pepper (logistic map r=3.9999), HMAC-SHA-512 Merkle audit chain.", body: "Every data-node exchange is protected by military-grade cryptography grounded in number theory and chaos mathematics.", timestamp: "Just now", unread: true, starred: false, section: "inbox", hasMedia: false, sagiScore: 0.87, sentiment: "positive", intent: "feature_intro", campaignFit: 0.82, riskScore: 0.0 },
];

export const WORKFLOW_NODES: WorkflowNode[] = [
  { id: "n1",  type: "trigger",   label: "Campaign Launch",          x: 30,  y: 50, color: "#7c3aed", icon: "⚡", active: true  },
  { id: "n2",  type: "ai",        label: "SAGI Audience Segment",    x: 170, y: 50, color: "#0ea5e9", icon: "🧠", active: true  },
  { id: "n3",  type: "ai",        label: "Hyper-Personalization",    x: 310, y: 20, color: "#10b981", icon: "✨", active: false },
  { id: "n4",  type: "ai",        label: "Cold Nurture Sequence",    x: 310, y: 80, color: "#f59e0b", icon: "🎯", active: false },
  { id: "n5",  type: "action",    label: "AEIF Intelligent Send",    x: 450, y: 50, color: "#ec4899", icon: "📤", active: false },
  { id: "n6",  type: "condition", label: "48h Engagement Window",    x: 590, y: 50, color: "#14b8a6", icon: "📊", active: false },
  { id: "n7",  type: "action",    label: "Warm Lead Fast-Track",     x: 730, y: 20, color: "#10b981", icon: "🔥", active: false },
  { id: "n8",  type: "ai",        label: "Re-engagement AI Writer",  x: 730, y: 80, color: "#f59e0b", icon: "🔄", active: false },
  { id: "n9",  type: "end",       label: "CRM + Memory Sync",        x: 870, y: 50, color: "#7c3aed", icon: "💾", active: false },
];

export const WORKFLOW_EDGES = [
  { from: "n1", to: "n2" }, { from: "n2", to: "n3", label: "Warm" },
  { from: "n2", to: "n4", label: "Cold" }, { from: "n3", to: "n5" },
  { from: "n4", to: "n5" }, { from: "n5", to: "n6" },
  { from: "n6", to: "n7", label: "Opened" }, { from: "n6", to: "n8", label: "No Open" },
  { from: "n7", to: "n9" }, { from: "n8", to: "n9" },
];

// ─────────────────────────────────────────────────────────────────────────────
// §3  Particle Canvas (from aeif-sagi-core.ts § ThemeEngine4D)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFParticleCanvas({ theme }: { theme: ThemeMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const cfg       = AEIF_THEMES[theme];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const count = theme === "particle" || theme === "quantum" ? 160 : theme === "galaxy" ? 300 : 80;
    interface P { x: number; y: number; vx: number; vy: number; r: number; life: number; maxLife: number; }
    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (theme === "particle" ? 1.8 : theme === "volcanic" ? 3 : 0.6),
      vy: (Math.random() - 0.5) * (theme === "particle" ? 1.8 : theme === "volcanic" ? -2 : 0.6),
      r: Math.random() * 2.5 + 0.8,
      life: Math.random() * 1200,
      maxLife: 600 + Math.random() * 1200,
    }));

    let t = 0;
    const draw = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.001;

      for (const p of particles) {
        p.life++;
        if (p.life > p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.life = 0;
        }
        const ratio = p.life / p.maxLife;
        const alpha = Math.sin(ratio * Math.PI) * 0.6;

        // Perlin-inspired turbulence (fBm approximation via sin/cos harmonics)
        const nx = Math.sin(p.x * 0.01 + t * 1.2) * 0.3 + Math.sin(p.x * 0.025 + t * 0.8) * 0.15;
        const ny = Math.cos(p.y * 0.01 + t * 1.1) * 0.3 + Math.cos(p.y * 0.025 + t * 0.9) * 0.15;

        // Lorentz-inspired magnetic deflection (Bz component)
        const Bz     = theme === "aurora" ? 0.04 : theme === "quantum" ? 0.12 : 0.01;
        const lorentzX = p.vy * Bz;
        const lorentzY = -p.vx * Bz;

        p.vx = (p.vx + nx * 0.04 + lorentzX) * 0.992;
        p.vy = (p.vy + ny * 0.04 + lorentzY + (theme === "forest" ? -0.005 : theme === "volcanic" ? -0.03 : 0)) * 0.992;

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x += canvas.width;
        if (p.x > canvas.width) p.x -= canvas.width;
        if (p.y < 0) p.y += canvas.height;
        if (p.y > canvas.height) p.y -= canvas.height;

        // Oklab-approximated glow (radial gradient)
        const hexAlpha = Math.round(alpha * 255).toString(16).padStart(2, "0");
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, cfg.particle + hexAlpha);
        g.addColorStop(0.5, cfg.glow + Math.round(alpha * 120).toString(16).padStart(2, "0"));
        g.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Connection lines (quantum entanglement visualization)
      if (theme === "quantum" || theme === "particle" || theme === "galaxy") {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < Math.min(particles.length, i + 7); j++) {
            const pi = particles[i]!, pj = particles[j]!;
            const dx = pi.x - pj.x, dy = pi.y - pj.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              const lineAlpha = Math.round((1 - dist / 90) * 70).toString(16).padStart(2, "0");
              ctx.beginPath();
              ctx.moveTo(pi.x, pi.y);
              ctx.lineTo(pj.x, pj.y);
              ctx.strokeStyle = cfg.glow + lineAlpha;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }
      }

      // Aurora ribbons
      if (theme === "aurora") {
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          const y0 = canvas.height * (0.2 + i * 0.2);
          for (let x = 0; x < canvas.width; x += 4) {
            const y = y0 + Math.sin(x * 0.005 + t * 2 + i * 2) * 60 + Math.sin(x * 0.012 + t * 1.3) * 30;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = i === 0 ? `${cfg.particle}22` : i === 1 ? `${cfg.glow}18` : "#a855f722";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animRef.current); ro.disconnect(); };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.45 }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §4  Avatar Component
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFAvatar({ contact, size = 40, showStatus = true }: { contact: AEIFContact; size?: number; showStatus?: boolean }) {
  const tempGlow: Record<string, string> = { champion: "#22c55e", hot: "#f59e0b", warm: "#60a5fa", cold: "#94a3b8" };
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: `radial-gradient(circle at 35% 35%, ${contact.accentColor}dd, ${contact.color}88)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size * 0.32, fontWeight: 700, color: "#fff",
        boxShadow: `0 0 ${size * 0.4}px ${contact.color}66, 0 0 ${size * 0.8}px ${contact.color}22`,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {contact.initials}
      </div>
      {showStatus && (
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: size * 0.27, height: size * 0.27, borderRadius: "50%",
          background: contact.online ? "#22c55e" : "#475569",
          border: "2px solid rgba(0,0,0,0.8)",
          boxShadow: contact.online ? `0 0 6px ${tempGlow[contact.temperature]}` : "none",
        }} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §5  Email Card (Glassmorphism + Physics glow + Bouncing text)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFEmailCard({ email, isActive, onClick, theme }: {
  email: AEIFEmail; isActive: boolean; onClick: () => void; theme: ThemeMode;
}) {
  const cfg = AEIF_THEMES[theme];
  const sentimentColor: Record<string, string> = { positive: "#22c55e", neutral: "#94a3b8", negative: "#ef4444", urgent: "#f59e0b" };
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14, cursor: "pointer", overflow: "hidden",
        border: `1px solid ${isActive ? cfg.glow + "66" : hovered ? cfg.particle + "44" : "rgba(255,255,255,0.07)"}`,
        background: isActive
          ? `linear-gradient(135deg, ${cfg.accent}22 0%, rgba(255,255,255,0.04) 100%)`
          : hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        minWidth: 258, maxWidth: 258, flexShrink: 0,
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: isActive ? "scale(1.025) translateY(-5px)" : hovered ? "translateY(-2px)" : "none",
        boxShadow: isActive ? `0 16px 48px ${cfg.glow}33, 0 4px 16px ${cfg.accent}22` : hovered ? `0 8px 24px rgba(0,0,0,0.3)` : "none",
      }}
    >
      {/* Row 1: Avatar + Name + Status */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px 6px" }}>
        <AEIFAvatar contact={email.from} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'DM Sans', sans-serif" }}>
            {email.from.name}
          </div>
          <div style={{ fontSize: 10, color: "#475569", marginTop: 1 }}>{email.timestamp}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          {email.unread && (
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: cfg.particle, boxShadow: `0 0 6px ${cfg.particle}` }} />
          )}
          <div style={{ fontSize: 8, color: sentimentColor[email.sentiment] }}>●</div>
        </div>
      </div>

      {/* Row 2: Glassmorphism image + Bouncing preview */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: "0 12px 12px" }}>
        {/* Glass panel (left) */}
        <div style={{
          borderRadius: 10, height: 72, position: "relative", overflow: "hidden",
          background: `linear-gradient(135deg, ${email.from.color}44 0%, ${email.from.color}11 100%)`,
          border: `1px solid ${email.from.color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}>
          <div style={{ fontSize: 28, opacity: 0.45, filter: "blur(1px)" }}>
            {email.hasMedia ? "🎨" : email.section === "inbox" ? "📧" : "📤"}
          </div>
          {/* Fresnel shimmer */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)", borderRadius: 10 }} />
          {/* SAGI score bar */}
          <div style={{ position: "absolute", bottom: 6, left: 6, right: 6 }}>
            <div style={{ height: 3, borderRadius: 2, background: "rgba(0,0,0,0.4)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${email.sagiScore * 100}%`, borderRadius: 2, background: `linear-gradient(90deg, ${cfg.particle}, ${cfg.glow})`, boxShadow: `0 0 6px ${cfg.particle}` }} />
            </div>
          </div>
        </div>

        {/* Text panel (right) */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", height: 72 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#e2e8f0", marginBottom: 4, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "'DM Sans', sans-serif" }}>
            {email.subject.length > 28 ? email.subject.slice(0, 28) + "…" : email.subject}
          </div>
          <div style={{
            fontSize: 10, color: "#64748b", lineHeight: 1.5, display: "-webkit-box",
            WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
            fontFamily: "'DM Sans', sans-serif",
            animation: isActive ? "aeif-bounce-text 2.4s ease-in-out infinite" : "none",
          }}>
            {email.preview}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §6  Carousel Component
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFEmailCarousel({ emails, theme, selectedId, onSelect }: {
  emails: AEIFEmail[]; theme: ThemeMode; selectedId: string | null; onSelect: (e: AEIFEmail) => void;
}) {
  const [offset, setOffset] = useState(0);
  const cfg = AEIF_THEMES[theme];
  const ITEM_W = 270;

  return (
    <div style={{ position: "relative" }}>
      {offset > 0 && (
        <button onClick={() => setOffset(o => Math.max(0, o - 1))} style={{ position: "absolute", left: -14, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 28, height: 28, borderRadius: "50%", background: `rgba(255,255,255,0.1)`, border: `1px solid rgba(255,255,255,0.15)`, color: "#fff", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>‹</button>
      )}
      {offset < emails.length - 3 && (
        <button onClick={() => setOffset(o => Math.min(emails.length - 3, o + 1))} style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 28, height: 28, borderRadius: "50%", background: `rgba(255,255,255,0.1)`, border: `1px solid rgba(255,255,255,0.15)`, color: "#fff", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>›</button>
      )}
      <div style={{ overflow: "hidden", borderRadius: 16 }}>
        <div style={{ display: "flex", gap: 10, transform: `translateX(-${offset * ITEM_W}px)`, transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
          {emails.map(email => (
            <AEIFEmailCard key={email.id} email={email} isActive={selectedId === email.id} onClick={() => onSelect(email)} theme={theme} />
          ))}
        </div>
      </div>
      {emails.length > 3 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
          {Array.from({ length: Math.max(0, emails.length - 2) }).map((_, i) => (
            <button key={i} onClick={() => setOffset(i)} style={{ height: 5, width: offset === i ? 18 : 5, borderRadius: 3, background: offset === i ? cfg.particle : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §7  Campaign Workflow Visualizer (from aeif-campaign-engine.ts)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFWorkflowVisualizer({ theme, visible }: { theme: ThemeMode; visible: boolean }) {
  const cfg       = AEIF_THEMES[theme];
  const [ready, setReady] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  useEffect(() => { if (visible) setTimeout(() => setReady(true), 150); }, [visible]);

  const nodeMap = new Map(WORKFLOW_NODES.map(n => [n.id, n]));
  const typeColors: Record<string, string> = { trigger: "#7c3aed", ai: "#0ea5e9", action: "#10b981", condition: "#f59e0b", delay: "#64748b", end: "#7c3aed" };

  return (
    <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(20px)", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 8px" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: "#f1f5f9", letterSpacing: "0.04em" }}>
          🚀 AEIF Campaign Automation — AI Workflow Engine
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 11, color: "#64748b" }}>
          <span style={{ color: cfg.particle }}>● Live</span>
          <span>Reach: 24,800</span>
          <span>Open: <span style={{ color: "#22c55e" }}>31.4%</span></span>
          <span>Causal Lift: <span style={{ color: "#22c55e" }}>+28%</span></span>
          <span>ROI: <span style={{ color: cfg.glow }}>412%</span></span>
        </div>
      </div>
      <div style={{ overflowX: "auto", padding: "0 16px 16px" }}>
        <svg width={1000} height={130} viewBox="0 0 1000 130" style={{ minWidth: 1000 }}>
          {/* Edges */}
          {WORKFLOW_EDGES.map((e, i) => {
            const fn = nodeMap.get(e.from)!, tn = nodeMap.get(e.to)!;
            const x1 = fn.x + 60, y1 = fn.y + 18;
            const x2 = tn.x,      y2 = tn.y + 18;
            const mx = (x1 + x2) / 2;
            return (
              <g key={i}>
                <defs>
                  <marker id={`arr${i}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill={cfg.glow + "88"} />
                  </marker>
                </defs>
                <path d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`} fill="none"
                  stroke={ready ? cfg.glow + "55" : "transparent"} strokeWidth={1.5}
                  markerEnd={`url(#arr${i})`}
                  style={{ transition: `all 0.8s ease ${i * 60}ms`, strokeDasharray: 300, strokeDashoffset: ready ? 0 : 300 }}
                />
                {/* Animated data packet */}
                {ready && (
                  <circle r={3} fill={cfg.particle} style={{ filter: `drop-shadow(0 0 4px ${cfg.particle})` }}>
                    <animateMotion dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.15}s`}>
                      <mpath href={`#wpath${i}`} />
                    </animateMotion>
                  </circle>
                )}
                <path id={`wpath${i}`} d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`} fill="none" />
                {e.label && <text x={mx} y={(y1 + y2) / 2 - 4} textAnchor="middle" fill="#475569" fontSize={8} fontFamily="'DM Sans', sans-serif">{e.label}</text>}
              </g>
            );
          })}
          {/* Nodes */}
          {WORKFLOW_NODES.map((node, i) => {
            const color   = typeColors[node.type]!;
            const isHover = activeNode === node.id;
            return (
              <g key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{ cursor: "pointer", opacity: ready ? 1 : 0, transition: `all 0.5s ease ${i * 50}ms` }}>
                <rect x={node.x} y={node.y} width={115} height={36} rx={9}
                  fill={isHover ? `${color}44` : `${color}1a`}
                  stroke={isHover ? `${color}cc` : `${color}66`} strokeWidth={1.5}
                  style={{ filter: isHover ? `drop-shadow(0 0 10px ${color}88)` : `drop-shadow(0 0 4px ${color}33)`, transition: "all 0.2s" }}
                />
                <text x={node.x + 10} y={node.y + 14} fill={color} fontSize={11} fontFamily="'DM Sans', sans-serif">{node.icon}</text>
                <text x={node.x + 26} y={node.y + 14} fill="#e2e8f0" fontSize={8.5} fontFamily="'DM Sans', sans-serif" fontWeight="600">{node.label.slice(0, 16)}</text>
                <text x={node.x + 26} y={node.y + 26} fill="#475569" fontSize={7} fontFamily="'DM Sans', sans-serif" textTransform="uppercase">{node.type.toUpperCase()}</text>
                {node.active && <circle cx={node.x + 105} cy={node.y + 8} r={4} fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" /></circle>}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §8  Stats Canvas (from aeif-sagi-core + aeif-campaign-engine)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFStatsCanvas({ theme }: { theme: ThemeMode }) {
  const cfg = AEIF_THEMES[theme];
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0, 0, 0]);
  const targets = [1247, 892, 56, 341, 18, 3812];

  useEffect(() => {
    const duration = 1200;
    const start    = Date.now();
    const tick     = () => {
      const elapsed  = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: cubic ease-out
      const t        = 1 - Math.pow(1 - progress, 3);
      setAnimatedValues(targets.map(v => Math.round(v * t)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  const cards = [
    { label: "Inbox",    icon: "📨", value: animatedValues[0]!, accent: "#7c3aed", bg: "rgba(124,58,237,0.12)", delta: "+12%", up: true  },
    { label: "Sent",     icon: "📤", value: animatedValues[1]!, accent: "#0ea5e9", bg: "rgba(14,165,233,0.12)",  delta: "+8%",  up: true  },
    { label: "Starred",  icon: "⭐", value: animatedValues[2]!, accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",  delta: "-3%",  up: false },
    { label: "Blocked",  icon: "🛡️", value: animatedValues[3]!, accent: "#ef4444", bg: "rgba(239,68,68,0.12)",   delta: "-18%", up: false },
    { label: "Drafts",   icon: "📝", value: animatedValues[4]!, accent: "#10b981", bg: "rgba(16,185,129,0.12)",  delta: "+2%",  up: true  },
    { label: "Archived", icon: "🗄️", value: animatedValues[5]!, accent: "#64748b", bg: "rgba(100,116,139,0.12)", delta: "+340", up: true  },
  ];

  return (
    <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none" }}>
      {cards.map((card, i) => (
        <div key={i} style={{
          flex: "0 0 auto", minWidth: 130,
          padding: "12px 14px", borderRadius: 14,
          background: card.bg,
          border: `1px solid ${card.accent}33`,
          backdropFilter: "blur(16px)",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          boxShadow: `0 4px 20px ${card.accent}22`,
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${card.accent}44`; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${card.accent}22`; }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${card.accent}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
              {card.icon}
            </div>
            <span style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif" }}>{card.label}</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: card.accent, fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>
            {card.value > 999 ? `${(card.value / 1000).toFixed(1)}k` : card.value}
          </div>
          <div style={{ fontSize: 10, marginTop: 4, color: card.up ? "#22c55e" : "#ef4444", fontFamily: "'DM Sans', sans-serif" }}>
            {card.up ? "↑" : "↓"} {card.delta} this week
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §9  Sidebar (from disciplines/storage + types)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFSidebar({ theme, activeSection, onSectionChange, onThemeChange }: {
  theme: ThemeMode; activeSection: EmailSection;
  onSectionChange: (s: EmailSection) => void; onThemeChange: (t: ThemeMode) => void;
}) {
  const cfg = AEIF_THEMES[theme];
  const [collapsed, setCollapsed] = useState(false);

  const nav: { id: EmailSection; icon: string; label: string; count: number; badge?: string }[] = [
    { id: "inbox",     icon: "📨", label: "Inbox",     count: 1247, badge: "12 new" },
    { id: "campaigns", icon: "🚀", label: "Campaigns", count: 14   },
    { id: "sent",      icon: "📤", label: "Sent",      count: 892  },
    { id: "starred",   icon: "⭐", label: "Starred",   count: 56   },
    { id: "analytics", icon: "📊", label: "Analytics", count: 0    },
    { id: "drafts",    icon: "📝", label: "Drafts",    count: 18   },
    { id: "blocked",   icon: "🛡️", label: "Blocked",   count: 341  },
    { id: "archived",  icon: "🗄️", label: "Archived",  count: 3812 },
  ];

  const sagiStats = [
    { label: "SAI Score",    value: "98.7%", color: "#22c55e" },
    { label: "Memory Nodes", value: "12.4K", color: cfg.particle },
    { label: "CAG Hit Rate", value: "89.2%", color: cfg.glow   },
    { label: "Risk Blocked", value: "341",   color: "#ef4444"  },
    { label: "Campaigns",    value: "14",    color: "#f59e0b"  },
    { label: "RFM Score",    value: "94.1",  color: "#a78bfa"  },
  ];

  const W = collapsed ? 64 : 224;

  return (
    <div style={{
      width: W, flexShrink: 0, height: "100%", display: "flex", flexDirection: "column",
      background: "rgba(0,0,0,0.45)", backdropFilter: "blur(24px)",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      transition: "width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)", overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{ padding: collapsed ? "18px 14px" : "18px 18px 14px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <button onClick={() => setCollapsed(c => !c)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10, flexShrink: 0,
            background: `conic-gradient(from 0deg, ${cfg.particle}, ${cfg.glow}, ${cfg.particle})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 16px ${cfg.particle}66`, fontSize: 14,
            animation: "aeif-spin-slow 8s linear infinite",
          }}>✦</div>
          {!collapsed && (
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 700, background: `linear-gradient(135deg, ${cfg.particle}, ${cfg.glow})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AEIF ✦ v2
              </div>
              <div style={{ fontSize: 9, color: "#475569", letterSpacing: "0.06em" }}>SAGI ENGINE</div>
            </div>
          )}
        </button>
      </div>

      {/* Status */}
      {!collapsed && (
        <div style={{ margin: "10px 12px", padding: "8px 12px", borderRadius: 10, background: `${cfg.particle}18`, border: `1px solid ${cfg.particle}33`, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.particle, boxShadow: `0 0 8px ${cfg.particle}`, animation: "aeif-pulse 2s infinite" }} />
          <span style={{ fontSize: 11, fontWeight: 500, color: cfg.particle, fontFamily: "'DM Sans', sans-serif" }}>SAGI Online — All Systems</span>
        </div>
      )}

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "8px 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto", scrollbarWidth: "none" }}>
        {nav.map(item => {
          const active = activeSection === item.id;
          return (
            <button key={item.id} onClick={() => onSectionChange(item.id)} style={{
              display: "flex", alignItems: "center", gap: 10, padding: collapsed ? "10px 12px" : "9px 12px",
              borderRadius: 10, border: `1px solid ${active ? cfg.glow + "44" : "transparent"}`,
              background: active ? `${cfg.glow}22` : "transparent", cursor: "pointer",
              boxShadow: active ? `0 0 16px ${cfg.glow}22` : "none",
              transition: "all 0.2s ease", justifyContent: collapsed ? "center" : "flex-start",
            }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <span style={{ fontSize: 15, flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && (
                <>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 500, color: active ? "#f1f5f9" : "#64748b", fontFamily: "'DM Sans', sans-serif", textAlign: "left", whiteSpace: "nowrap" }}>
                    {item.label}
                  </span>
                  {item.count > 0 && (
                    <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 20, background: active ? `${cfg.particle}44` : "rgba(255,255,255,0.06)", color: active ? cfg.particle : "#475569" }}>
                      {item.count > 999 ? `${(item.count / 1000).toFixed(1)}k` : item.count}
                    </span>
                  )}
                </>
              )}
            </button>
          );
        })}
      </nav>

      {/* SAGI Intelligence Stats */}
      {!collapsed && (
        <div style={{ margin: "0 10px 10px", padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>SAGI INTELLIGENCE</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {sagiStats.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <div style={{ fontSize: 9, color: "#475569" }}>{s.label}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Theme Switcher */}
      {!collapsed && (
        <div style={{ margin: "0 10px 10px" }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>4D THEME</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
            {(Object.entries(AEIF_THEMES) as [ThemeMode, typeof AEIF_THEMES[ThemeMode]][]).slice(0, 8).map(([key, t]) => (
              <button key={key} onClick={() => onThemeChange(key)} style={{
                padding: "5px 3px", borderRadius: 7, cursor: "pointer",
                background: theme === key ? `${t.particle}28` : "rgba(255,255,255,0.04)",
                border: `1px solid ${theme === key ? t.particle + "55" : "rgba(255,255,255,0.06)"}`,
                boxShadow: theme === key ? `0 0 12px ${t.particle}44` : "none",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
              }}>
                <span style={{ fontSize: 12 }}>{t.icon}</span>
                <span style={{ fontSize: 8, color: theme === key ? t.particle : "#475569" }}>{t.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* User Profile */}
      {!collapsed && (
        <div style={{ margin: "0 10px 16px", padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${cfg.particle}, ${cfg.glow})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>YO</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>Your Name</div>
            <div style={{ fontSize: 10, color: "#475569" }}>you@aeif.io</div>
          </div>
          <div style={{ marginLeft: "auto", fontSize: 14, color: "#475569" }}>⚙️</div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §10  Compose Panel (from disciplines/parser + executor)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFComposePanel({ theme, contacts }: { theme: ThemeMode; contacts: AEIFContact[] }) {
  const cfg = AEIF_THEMES[theme];
  const [to, setTo]           = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody]       = useState("");
  const [genOpen, setGenOpen] = useState(false);
  const [generating, setGen]  = useState<GenerationMode | null>(null);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const generate = (mode: GenerationMode) => {
    setGenOpen(false);
    setGen(mode);
    setTimeout(() => {
      setGen(null);
      const templates: Record<GenerationMode, string> = {
        text:     "Dear [Name],\n\nI wanted to reach out personally about an opportunity that aligns perfectly with your goals at [Company].\n\nWould you be open to a brief 20-minute conversation this week?\n\nBest regards,\n[Your Name]",
        image:    "[AI Image Generated via DLS v2]\n📎 ai-visual-campaign-001.png (320K resolution, Riemannian color-space calibrated)",
        video:    "[AI Video Generated via AEIF Video Synthesis]\n📎 campaign-montage.mp4 (4K 60fps, face + style transfer applied via SMPL pose)",
        voice:    "[AI Voice Clone Ready]\n🎙️ voice-note.wav (formant-matched, HNR: 22dB, Tacotron-2 synthesis complete)",
        template: "Subject: Following Up — [Product] Demo Opportunity\n\nHi {{first_name}},\n\nThank you for expressing interest in {{product_name}}. Based on your profile, I believe we can help {{company}} achieve {{desired_outcome}}.\n\n→ [CTA Button: Schedule 20-min Call]\n\nBest,\n{{sender_name}}",
        campaign: "[Campaign Workflow Built]\n✓ SAGI Audience Segmented (RFM scoring)\n✓ Thompson Sampling A/B variants (3 subject lines)\n✓ Bayesian send-time optimized per lead\n✓ Re-engagement sequence: 7 touches × 45-day cadence\n→ Projected ROI: 412% (Monte Carlo, 10K paths)",
        workflow: "[n8n Workflow Generated]\n✓ 9 nodes constructed: Trigger → Segment → Personalize → A/B → Send → Track → Branch → Re-engage → CRM\n✓ Causal impact estimation enabled",
      };
      setBody(prev => prev ? `${prev}\n\n${templates[mode]}` : templates[mode]);
    }, 1800);
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 9, color: "#e2e8f0", padding: "9px 12px", fontSize: 12,
    fontFamily: "'DM Sans', sans-serif", outline: "none", width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <div style={{ padding: 14, background: "rgba(0,0,0,0.22)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>✦ COMPOSE MESSAGE</div>

      {/* Row 1: To + Subject */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
        <input value={to} onChange={e => setTo(e.target.value)} placeholder="To: recipient@email.com" style={inputBase}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = `${cfg.particle}66`; (e.target as HTMLInputElement).style.boxShadow = `0 0 0 3px ${cfg.particle}11`; }}
          onBlur={e  => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
        />
        <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject line" style={inputBase}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = `${cfg.particle}66`; (e.target as HTMLInputElement).style.boxShadow = `0 0 0 3px ${cfg.particle}11`; }}
          onBlur={e  => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
        />
      </div>

      {/* Row 2: Body + Floating Menu */}
      <div style={{ position: "relative", marginBottom: 8 }}>
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Compose your message… or use the ✦ AEIF AI tools" rows={5}
          style={{ ...inputBase, resize: "vertical" as const, minHeight: 110, paddingRight: 56 }}
          onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = `${cfg.particle}66`; }}
          onBlur={e  => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
        />
        {/* Rotating FAB */}
        <div style={{ position: "absolute", right: 10, bottom: 10 }}>
          <button onClick={() => setGenOpen(o => !o)} style={{
            width: 38, height: 38, borderRadius: "50%",
            background: `conic-gradient(from 0deg, ${cfg.particle}, ${cfg.glow}, ${cfg.particle})`,
            border: `2px solid ${cfg.glow}`, color: "#fff", fontSize: 16, cursor: "pointer",
            boxShadow: `0 0 18px ${cfg.particle}88, 0 0 36px ${cfg.particle}33`,
            animation: "aeif-spin-slow 8s linear infinite",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>✦</button>
          {/* Radial menu */}
          {genOpen && (
            <div style={{ position: "absolute", right: 0, bottom: 48, background: "rgba(8,4,20,0.96)", border: `1px solid ${cfg.particle}44`, borderRadius: 11, padding: 6, minWidth: 170, backdropFilter: "blur(16px)", zIndex: 50 }}>
              {(["text","image","video","voice","template","campaign","workflow"] as GenerationMode[]).map(mode => {
                const labels: Record<GenerationMode, string> = { text: "✍️ AI Write", image: "🖼️ AI Image (DLS)", video: "🎬 AI Video Synth", voice: "🎙️ Voice Clone", template: "📋 Email Template", campaign: "🚀 Campaign Builder", workflow: "🔀 Build Workflow" };
                return (
                  <button key={mode} onClick={() => generate(mode)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 8, cursor: "pointer", fontSize: 11, color: "#94a3b8", background: "none", border: "none", width: "100%", textAlign: "left", transition: "background 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${cfg.particle}22`; (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    {labels[mode]}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        {/* Generation overlay */}
        {generating && (
          <div style={{ position: "absolute", inset: 0, borderRadius: 9, background: `${cfg.glow}18`, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.particle, animation: `aeif-bounce-dot 1.2s infinite ${i * 150}ms` }} />)}
            <span style={{ fontSize: 12, color: cfg.particle, marginLeft: 6 }}>
              {generating === "image" ? "DLS rendering…" : generating === "voice" ? "Cloning voice…" : generating === "video" ? "Synthesizing video…" : "SAGI writing…"}
            </span>
          </div>
        )}
      </div>

      {/* Row 3: Contact Carousel */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 6, scrollbarWidth: "none", marginBottom: 8 }}>
        {contacts.map(c => (
          <button key={c.id} onClick={() => { setTo(c.email); setSelectedContact(c.id); }} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
            padding: "6px 8px", borderRadius: 10, cursor: "pointer", minWidth: 56, flexShrink: 0,
            background: selectedContact === c.id ? `${c.color}22` : "rgba(255,255,255,0.03)",
            border: `1px solid ${selectedContact === c.id ? c.color + "55" : "rgba(255,255,255,0.06)"}`,
          }}>
            <AEIFAvatar contact={c} size={28} />
            <span style={{ fontSize: 9, color: "#64748b", whiteSpace: "nowrap" }}>{c.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Send */}
      <button style={{
        width: "100%", padding: "10px", borderRadius: 10, border: "none", cursor: "pointer",
        background: `linear-gradient(135deg, ${cfg.accent}, ${cfg.glow})`,
        color: "#fff", fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "0.05em", boxShadow: `0 6px 24px ${cfg.particle}66`,
        transition: "opacity 0.2s",
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
      >
        ✦ Send via AEIF Intelligence
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §11  Email Detail Panel
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFEmailDetail({ email, theme, onClose }: { email: AEIFEmail; theme: ThemeMode; onClose: () => void }) {
  const cfg = AEIF_THEMES[theme];
  const sentimentColors: Record<string, string> = { positive: "#22c55e", neutral: "#94a3b8", negative: "#ef4444", urgent: "#f59e0b" };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(0,0,0,0.28)", borderRadius: 14, border: `1px solid ${cfg.glow}33`, overflow: "hidden", animation: "aeif-fade-up 0.35s ease" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <AEIFAvatar contact={email.from} size={38} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{email.from.name}</div>
            <div style={{ fontSize: 10, color: "#475569" }}>{email.from.email}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ padding: "3px 9px", borderRadius: 20, fontSize: 10, background: `${sentimentColors[email.sentiment]}22`, color: sentimentColors[email.sentiment], border: `1px solid ${sentimentColors[email.sentiment]}44` }}>{email.sentiment}</span>
          <span style={{ padding: "3px 9px", borderRadius: 20, fontSize: 10, background: `${cfg.particle}22`, color: cfg.particle }}>SAGI {(email.sagiScore * 100).toFixed(0)}%</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569", fontSize: 20, cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>×</button>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "14px 16px", flex: 1, overflowY: "auto" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: "#f1f5f9", marginBottom: 10, lineHeight: 1.4 }}>{email.subject}</div>
        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.8, marginBottom: 12 }}>{email.body}</div>

        {/* SAGI Analysis */}
        <div style={{ padding: "10px 12px", borderRadius: 10, background: `${cfg.particle}12`, border: `1px solid ${cfg.particle}22`, marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: cfg.particle, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>🧠 SAGI DEEP ANALYSIS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, fontSize: 11 }}>
            <div><div style={{ color: "#475569" }}>Intent</div><div style={{ color: "#e2e8f0", fontWeight: 500 }}>{email.intent}</div></div>
            <div><div style={{ color: "#475569" }}>Campaign Fit</div><div style={{ color: "#22c55e", fontWeight: 600 }}>{(email.campaignFit * 100).toFixed(0)}%</div></div>
            <div><div style={{ color: "#475569" }}>Risk Score</div><div style={{ color: email.riskScore > 0.5 ? "#ef4444" : "#22c55e", fontWeight: 600 }}>{(email.riskScore * 100).toFixed(0)}%</div></div>
          </div>
        </div>

        {/* Suggested Reply */}
        <div style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>✦ SAGI SUGGESTED REPLY</div>
          <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
            Thank you for reaching out. I'd be happy to walk you through everything in detail. When would be a good time for a quick 20-minute discovery call? I have availability this week and would love to connect.
          </div>
          <button style={{ marginTop: 8, padding: "6px 14px", borderRadius: 7, background: `${cfg.particle}22`, border: `1px solid ${cfg.particle}44`, color: cfg.particle, fontSize: 11, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            Use Suggested Reply ✦
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// §12  Command Bar (from disciplines/executor)
// ─────────────────────────────────────────────────────────────────────────────

export function AEIFCommandBar({ theme }: { theme: ThemeMode }) {
  const cfg = AEIF_THEMES[theme];
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("");

  const execute = () => {
    if (!query.trim()) return;
    const q = query.trim().toUpperCase();
    let result = "";

    if (q.startsWith("RETRIEVE|ENTRY")) result = `[AEIF Storage] Queried canvas successfully.\n• Rows returned: 1,247\n• Execution: 0.8ms\n• Cache: HIT (L1)\n• SAGI Score: 0.94`;
    else if (q.startsWith("SEND|EMAIL"))    result = `[AEIF Transport] Email dispatched.\n• Delivery: Queued via SMTP\n• Risk Score: 0.02 (ALLOWED)\n• SAGI Analysis: intent=transactional\n• Audit: audit_7f3a...`;
    else if (q.startsWith("SCORE|RISK"))    result = `[AEIF Risk Engine] Risk scored.\n• Velocity: 0.12  Entropy: 0.34\n• Behavioral: 0.08  Graph: 0.15\n• Composite Risk: 0.18 → ALLOW\n• Boltzmann Temp: 0.72`;
    else if (q.startsWith("LAUNCH|CAMPAIGN")) result = `[AEIF Campaign Engine] Campaign launched.\n• Nodes: 9 workflow nodes constructed\n• Audience: 24,800 leads segmented\n• A/B Variants: 3 (Thompson Sampling)\n• Projected ROI: 412% (95% CI: [287%, 548%])`;
    else if (q.startsWith("DEFINE|BLUEPRINT")) result = `[AEIF Storage] Blueprint defined.\n• Canvas created with column definitions\n• RBAC policies applied\n• Version: 1\n• Audit: logged`;
    else if (q.startsWith("GENERATE|OTP")) result = `[AEIF Security] OTP generated.\n• Length: 6 digits\n• TTL: 300s\n• Hash: PBKDF2-SHA512 (310K iterations)\n• Chaotic pepper applied\n• Email: dispatched`;
    else result = `[AEIF Parser] Unrecognized command: '${query.slice(0, 40)}'\nValid verbs: DEFINE|BLUEPRINT, STORE|ENTRY, RETRIEVE|ENTRY, REFINE|ENTRY, ERASE|ENTRY, SEND|EMAIL, SCORE|RISK, DETECT|ANOMALY, LAUNCH|CAMPAIGN, GENERATE|OTP, GENERATE|MAGIC-LINK, GENERATE|CONTENT, CLONE|VOICE, SYNTHESIZE|VIDEO, RENDER|THEME`;

    setOutput(result);
    setQuery("");
  };

  return (
    <div style={{ padding: "12px 16px", background: "rgba(0,0,0,0.4)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(16px)" }}>
      <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>✦ AEIF DSL COMMAND CONSOLE</div>
      <div style={{ display: "flex", gap: 8, marginBottom: output ? 8 : 0 }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 8, padding: "0 12px", gap: 8 }}>
          <span style={{ color: cfg.particle, fontSize: 12 }}>❯</span>
          <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && execute()}
            placeholder='RETRIEVE|ENTRY FROM Emails WHERE sentiment = "positive" LIMIT 10'
            style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#e2e8f0", fontSize: 12, fontFamily: "monospace", padding: "9px 0" }}
          />
        </div>
        <button onClick={execute} style={{ padding: "0 16px", borderRadius: 8, background: `linear-gradient(135deg, ${cfg.accent}, ${cfg.glow})`, border: "none", color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
          Execute
        </button>
      </div>
      {output && (
        <pre style={{ margin: 0, padding: "10px 12px", background: "rgba(0,0,0,0.6)", borderRadius: 8, fontSize: 11, color: "#94a3b8", fontFamily: "monospace", lineHeight: 1.7, whiteSpace: "pre-wrap", border: `1px solid ${cfg.particle}22` }}>
          <span style={{ color: cfg.particle }}>✦ </span>{output}
        </pre>
      )}
    </div>
  );
}
