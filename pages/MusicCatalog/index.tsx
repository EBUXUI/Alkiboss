"use client";

/**
 * ============================================================================
 * AEIF — pages/dashboard/index.tsx
 * Arithmetical Email Intelligence Framework — World-Class 4D SaaS Dashboard
 * ============================================================================
**/

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import {  
  AEIF_CONTACTS,  
  AEIFCommandBar,
  AEIFComposePanel,
  AEIFEmail,
  AEIFEmailCarousel,
  AEIFEmailDetail,
  AEIFParticleCanvas,
  AEIFSidebar,
  AEIFStatsCanvas,
  AEIFWorkflowVisualizer,
  AEIF_THEMES, 
  buildInboxEmails,
  ThemeMode,
  EmailSection
} from "./types/v1";
// ─────────────────────────────────────────────────────────────────────────────
// §13  Main Dashboard Page
// ─────────────────────────────────────────────────────────────────────────────

export default function AEIFDashboard() {
  const [theme, setTheme]               = useState<ThemeMode>("particle");
  const [activeSection, setSection]     = useState<EmailSection>("inbox");
  const [selectedEmail, setEmail]       = useState<AEIFEmail | null>(null);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [isFirstVisit]                  = useState(true);
  const cfg                             = AEIF_THEMES[theme];

  const emails = useMemo(() => {
    if (isFirstVisit && activeSection === "inbox") return buildInboxEmails();
    const section = activeSection === "campaigns" || activeSection === "analytics" ? "inbox" : activeSection;
    return buildInboxEmails().filter(e => e.section === section || activeSection === "inbox");
  }, [activeSection, isFirstVisit]);

  // Global keydown — Escape closes email detail
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setEmail(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>

      {/* Root container */}
      <div style={{ 
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        background: cfg.bg, 
        fontFamily: "'DM Sans', sans-serif", 
        position: "relative", overflowY: "scroll", transition: "background 1.4s ease" }}>

        {/* 4D Particle Physics Canvas */}
        <AEIFParticleCanvas theme={theme} />

        {/* Ambient volumetric glow orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", width: "50vw", height: "50vh", borderRadius: "50%", background: `radial-gradient(ellipse, ${cfg.particle}18 0%, transparent 70%)`, top: "-20%", left: "-10%", filter: "blur(60px)", animation: "aeif-glow-pulse 8s ease-in-out infinite", "--glow-color": `${cfg.particle}22` } as React.CSSProperties} />
          <div style={{ position: "absolute", width: "40vw", height: "40vh", borderRadius: "50%", background: `radial-gradient(ellipse, ${cfg.glow}12 0%, transparent 70%)`, bottom: "-15%", right: "5%", filter: "blur(60px)", animation: "aeif-glow-pulse 10s ease-in-out infinite 3s", "--glow-color": `${cfg.glow}18` } as React.CSSProperties} />
        </div>

        {/* Main layout */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", height: "100%", gap: 0 }}>

          {/* Sidebar */}
          <AEIFSidebar theme={theme} activeSection={activeSection} onSectionChange={s => { setSection(s); setEmail(null); }} onThemeChange={setTheme} />

          {/* Main Content */}
          <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", padding: "16px 16px 16px 14px", gap: 12 }}>

            {/* Top Header Bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: "#f1f5f9", letterSpacing: "-0.01em", lineHeight: 1 }}>
                  {isFirstVisit && activeSection === "inbox" ? "Welcome to AEIF ✦" : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                </div>
                <div style={{ fontSize: 12, color: "#475569", marginTop: 3 }}>
                  {emails.length} messages · {cfg.icon} {cfg.name} · SAGI Online
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => setShowWorkflow(w => !w)} style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 10, cursor: "pointer",
                  background: showWorkflow ? `${cfg.particle}22` : "rgba(255,255,255,0.06)",
                  border: `1px solid ${showWorkflow ? cfg.particle + "55" : "rgba(255,255,255,0.08)"}`,
                  color: showWorkflow ? cfg.particle : "#64748b", fontSize: 12, fontFamily: "'DM Sans', sans-serif",
                }}>🚀 Campaign Workflow</button>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", animation: "aeif-pulse 2s infinite" }} />
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>All Systems Operational</span>
                </div>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div style={{ flexShrink: 0 }}>
              <AEIFStatsCanvas theme={theme} />
            </div>

            {/* Campaign Workflow (collapsible) */}
            {showWorkflow && (
              <div style={{ flexShrink: 0, animation: "aeif-fade-up 0.4s ease" }}>
                <AEIFWorkflowVisualizer theme={theme} visible={showWorkflow} />
              </div>
            )}

            {/* Email Carousel */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                📨 {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} — {emails.length} messages
              </div>
              <AEIFEmailCarousel emails={emails} theme={theme} selectedId={selectedEmail?.id ?? null} onSelect={e => setEmail(prev => prev?.id === e.id ? null : e)} />
            </div>

            {/* Bottom Panel: Compose + Detail */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: selectedEmail ? "1fr 1fr" : "1fr", gap: 12, overflow: "hidden", minHeight: 0 }}>
              <div style={{ overflowY: "auto", scrollbarWidth: "none" }}>
                <AEIFComposePanel theme={theme} contacts={AEIF_CONTACTS} />
                <div style={{ marginTop: 12 }}>
                  <AEIFCommandBar theme={theme} />
                </div>
              </div>
              {selectedEmail && (
                <div style={{ overflow: "hidden", animation: "aeif-fade-up 0.35s ease" }}>
                  <AEIFEmailDetail email={selectedEmail} theme={theme} onClose={() => setEmail(null)} />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}