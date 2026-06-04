"use client";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className}`} style={{ background: "#1a1a1a", borderRadius: "36px", padding: "8px", boxShadow: "0 20px 60px rgba(0,0,0,0.35), inset 0 0 0 2px #333", position: "relative" }}>
      <div className="phone-screen" style={{ borderRadius: "30px", overflow: "hidden", background: "#000", position: "relative", aspectRatio: "9/16" }}>
        {/* Notch */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "30%", height: "22px", background: "#1a1a1a", borderRadius: "0 0 12px 12px", zIndex: 20 }} />
        {children}
      </div>
      {/* Side buttons */}
      <div style={{ position: "absolute", right: "-3px", top: "80px", width: "3px", height: "30px", background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
      <div style={{ position: "absolute", left: "-3px", top: "70px", width: "3px", height: "25px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: "-3px", top: "105px", width: "3px", height: "25px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
    </div>
  );
}
