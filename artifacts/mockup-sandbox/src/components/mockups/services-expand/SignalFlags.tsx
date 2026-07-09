import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FlagPattern = "stripesV" | "quarters" | "cross" | "checker" | "diagonal" | "border";

const SERVICES: {
  code: string;
  title: string;
  desc: string;
  pattern: FlagPattern;
  colors: string[];
}[] = [
  { code: "S", title: "Shipping", desc: "Safe, efficient sea transport for dry bulk and general cargo.", pattern: "quarters", colors: ["#FFD400", "#16233B"] },
  { code: "C", title: "Chartering", desc: "Tailored chartering backed by market expertise and a trusted network.", pattern: "stripesV", colors: ["#C81D25", "#FFFFFF", "#C81D25"] },
  { code: "B", title: "Brokering", desc: "Expert negotiation connecting shipowners and charterers.", pattern: "cross", colors: ["#16233B", "#FFFFFF"] },
  { code: "P", title: "Port Agency", desc: "Responsive port services ensuring smooth calls, every time.", pattern: "checker", colors: ["#C81D25", "#FFFFFF"] },
  { code: "M", title: "Ship Management", desc: "Technical and commercial management for efficient operations.", pattern: "diagonal", colors: ["#FFD400", "#16233B"] },
  { code: "R", title: "Ship Repair", desc: "Coordinated docking, repair supervision, and technical support.", pattern: "border", colors: ["#16233B", "#C81D25"] },
];

const INK = "#0B0F1A";

function FlagGraphic({ pattern, colors }: { pattern: FlagPattern; colors: string[] }) {
  const [a, b, c] = colors;
  if (pattern === "stripesV") {
    return (
      <div className="flex w-full h-full">
        <div className="flex-1" style={{ background: a }} />
        <div className="flex-1" style={{ background: b }} />
        <div className="flex-1" style={{ background: c || a }} />
      </div>
    );
  }
  if (pattern === "quarters") {
    return (
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <div style={{ background: a }} />
        <div style={{ background: b }} />
        <div style={{ background: b }} />
        <div style={{ background: a }} />
      </div>
    );
  }
  if (pattern === "cross") {
    return (
      <div className="relative w-full h-full" style={{ background: b }}>
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[35%]" style={{ background: a }} />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[35%]" style={{ background: a }} />
      </div>
    );
  }
  if (pattern === "checker") {
    return (
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} style={{ background: (Math.floor(i / 3) + i) % 2 === 0 ? a : b }} />
        ))}
      </div>
    );
  }
  if (pattern === "diagonal") {
    return (
      <div
        className="w-full h-full"
        style={{ background: `repeating-linear-gradient(45deg, ${a} 0, ${a} 14%, ${b} 14%, ${b} 28%)` }}
      />
    );
  }
  return (
    <div className="relative w-full h-full" style={{ background: a }}>
      <div className="absolute inset-[12%]" style={{ background: b }} />
    </div>
  );
}

export default function SignalFlags() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="w-full h-full flex overflow-hidden relative"
      style={{ backgroundColor: INK, fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {SERVICES.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={s.code}
            onClick={() => setActive(i)}
            style={{ flexGrow: isActive ? 14 : 1, flexBasis: 0, minWidth: 64 }}
            className="relative h-full cursor-pointer transition-[flex-grow] duration-[550ms] ease-[cubic-bezier(0.65,0,0.35,1)] group border-l border-white/10"
          >
            {/* Collapsed content: flag fills the strip */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <div className="absolute inset-0 group-hover:brightness-110 transition-[filter]">
                <FlagGraphic pattern={s.pattern} colors={s.colors} />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between py-8">
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: INK, color: "#fff" }}
                >
                  {s.code}
                </span>
                <span
                  className="whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold px-2 py-1 rounded-sm"
                  style={{ writingMode: "vertical-rl", color: "#fff", background: "rgba(11,15,26,0.55)" }}
                >
                  {s.title}
                </span>
                <span className="w-8" />
              </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex"
                >
                  <div className="flex-1 p-10 lg:p-14 flex flex-col justify-end min-w-0">
                    <span
                      className="w-10 h-10 mb-6 flex items-center justify-center rounded-full text-base font-bold"
                      style={{ background: s.colors[0], color: s.colors[0] === "#FFD400" ? INK : "#fff" }}
                    >
                      {s.code}
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-white mb-6">
                      {s.title}
                    </h2>
                    <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                      {s.desc}
                    </p>
                    <button className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white font-bold w-fit">
                      <span>Learn more</span>
                      <span className="w-8 h-px bg-white/60 group-hover:w-12 transition-all" />
                    </button>
                  </div>
                  <div className="w-[28%] h-full flex-shrink-0">
                    <FlagGraphic pattern={s.pattern} colors={s.colors} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
