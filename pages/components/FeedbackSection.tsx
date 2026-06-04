"use client";

import { useEffect, useRef } from "react";

const feedbacks = [
  {
    name: "Daniel",
    avatar: "D",
    color: "#4f46e5",
    message:
      "Bro the engagement on the video was actually crazy 🔥 We got way more interaction than expected. Definitely working with you again.",
    time: "8:42 PM",
    reply:
      "Glad you loved it 🙌 Looking forward to the next campaign.",
    replyTime: "8:44 PM",
  },
  {
    name: "Sarah M.",
    avatar: "S",
    color: "#db2777",
    message:
      "Your content felt very natural and authentic. Honestly one of the best promo videos we've received from creators.",
    time: "11:16 AM",
    reply:
      "Thank you so much 😊 Appreciate the feedback.",
    replyTime: "11:18 AM",
  },
  {
    name: "Kevin",
    avatar: "K",
    color: "#0ea5e9",
    message:
      "The TikTok content performed really well on our page. You understand trends and audience attention very well.",
    time: "6:03 PM",
    reply:
      "Happy to hear that 🚀 Thank you for trusting me with the campaign.",
    replyTime: "6:05 PM",
  },
];

function ChatBubble({
  feedback,
}: {
  feedback: (typeof feedbacks)[0];
}) {
  return (
    <div
      className="
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        backdrop-blur-xl
        flex
        flex-col
        h-full
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
      style={{
        minHeight: "340px",
        background:
          "linear-gradient(180deg,#111827 0%,#0f172a 100%)",
        boxShadow:
          "0 25px 50px rgba(15,23,42,.15)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <div
          className="
            w-12
            h-12
            rounded-full
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-sm
            shadow-lg
            ring-2
            ring-white/10
            flex-shrink-0
          "
          style={{
            background: feedback.color,
          }}
        >
          {feedback.avatar}
        </div>

        <div>
          <div className="text-white font-semibold text-sm font-montserrat">
            {feedback.name}
          </div>

          <div className="text-green-400 text-xs font-montserrat">
            online
          </div>
        </div>

        <div className="ml-auto flex gap-1">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-red-400" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <div className="text-center text-xs text-slate-500 font-medium">
          Today
        </div>

        {/* Received */}
        <div className="max-w-[85%]">
          <div
            className="text-xs font-semibold mb-1"
            style={{
              color: feedback.color,
            }}
          >
            {feedback.name}
          </div>

          <div
            className="
              rounded-2xl
              rounded-tl-none
              px-4
              py-3
              text-white
              text-sm
              leading-relaxed
            "
            style={{
              background:
                "linear-gradient(135deg,#1e293b,#334155)",
            }}
          >
            {feedback.message}
          </div>

          <div className="text-xs text-slate-500 mt-1">
            {feedback.time}
          </div>
        </div>

        {/* Reply */}
        <div className="max-w-[85%] ml-auto">
          <div
            className="
              rounded-2xl
              rounded-tr-none
              px-4
              py-3
              text-white
              text-sm
              leading-relaxed
            "
            style={{
              background:
                "linear-gradient(135deg,#059669,#10b981)",
            }}
          >
            {feedback.reply}
          </div>

          <div className="flex items-center justify-end gap-1 text-xs text-slate-400 mt-1">
            {feedback.replyTime}

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12L9 17L20 6"
                stroke="#60A5FA"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeedbackSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els =
              entry.target.querySelectorAll(".fb-anim");

            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add(
                  "opacity-100",
                  "translate-y-0"
                );

                el.classList.remove(
                  "opacity-0",
                  "translate-y-8"
                );
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#eef6ff 0%,#ffffff 45%,#f8fbff 100%)",
      }}
    >
      {/* Decorative Background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.35) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.35) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            className="font-black leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#0a0a0a",
            }}
          >
            Collaboration
          </h2>

          <h2
            className="font-black leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              background:
                "linear-gradient(135deg,#2563eb,#38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Feedback
          </h2>
        </div>

        {/* Divider */}
        <div
          className="w-24 h-1 mx-auto mb-8 rounded-full"
          style={{
            background:
              "linear-gradient(90deg,#2563eb,#38bdf8)",
          }}
        />

        {/* Subtitle */}
        <div className="text-center mb-14">
          <p className="text-slate-500 font-medium tracking-wide">
            Real conversations from satisfied brand collaborations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((fb, i) => (
            <div
              key={i}
              className="
                fb-anim
                opacity-0
                translate-y-8
                transition-all
                duration-700
              "
            >
              <ChatBubble feedback={fb} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}