import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, TrendingUp, Handshake, MapPin, Compass, Wrench } from "lucide-react";

const SERVICES = [
  { code: "ITEM NO. 01", title: "Shipping", desc: "Safe, efficient sea transport for dry bulk and general cargo.", icon: Ship },
  { code: "ITEM NO. 02", title: "Chartering", desc: "Tailored chartering backed by market expertise and a trusted network.", icon: TrendingUp },
  { code: "ITEM NO. 03", title: "Brokering", desc: "Expert negotiation connecting shipowners and charterers.", icon: Handshake },
  { code: "ITEM NO. 04", title: "Port Agency", desc: "Responsive port services ensuring smooth calls, every time.", icon: MapPin },
  { code: "ITEM NO. 05", title: "Ship Management", desc: "Technical and commercial management for efficient operations.", icon: Compass },
  { code: "ITEM NO. 06", title: "Ship Repair", desc: "Coordinated docking, repair supervision, and technical support.", icon: Wrench },
];

const PAPER = "#EFE6D3";
const INK = "#1F2C1A";
const RUST = "#9C3B2E";
const NAVY = "#16233B";

export default function CargoManifest() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="w-full h-full flex overflow-hidden relative"
      style={{ backgroundColor: PAPER, fontFamily: "'Source Serif 4', serif" }}
    >
      {/* paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(#00000008 1px, transparent 1px), radial-gradient(#00000006 1px, transparent 1px)",
          backgroundSize: "3px 3px, 7px 7px",
          backgroundPosition: "0 0, 2px 3px",
        }}
      />

      {SERVICES.map((s, i) => {
        const isActive = i === active;
        const Icon = s.icon;
        return (
          <div
            key={s.code}
            onClick={() => setActive(i)}
            style={{ flexGrow: isActive ? 14 : 1, flexBasis: 0, minWidth: 64 }}
            className="relative h-full cursor-pointer transition-[flex-grow] duration-[550ms] ease-[cubic-bezier(0.65,0,0.35,1)] group"
          >
            {/* perforation divider */}
            {i !== 0 && (
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                  backgroundImage: `radial-gradient(${INK}55 1.2px, transparent 1.5px)`,
                  backgroundSize: "1px 14px",
                }}
              />
            )}

            {/* Collapsed content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-between py-10 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <div
                className="w-9 h-9 rounded-full border-[1.5px] flex items-center justify-center rotate-[-8deg]"
                style={{ borderColor: RUST, color: RUST }}
              >
                <Icon size={15} strokeWidth={1.75} />
              </div>
              <span
                className="whitespace-nowrap uppercase text-sm tracking-[0.3em] font-semibold group-hover:opacity-70 transition-opacity"
                style={{ writingMode: "vertical-rl", color: INK }}
              >
                {s.title}
              </span>
              <span className="text-[9px] tracking-[0.15em]" style={{ color: `${INK}99`, fontFamily: "'IBM Plex Mono', monospace" }}>
                {s.code.replace("ITEM NO. ", "N\u00b0")}
              </span>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: isActive ? 0.2 : 0 }}
                  className="absolute inset-0 p-10 lg:p-14 flex flex-col justify-end"
                >
                  <div
                    className="absolute top-8 left-10 right-10 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase pb-3"
                    style={{ color: `${INK}88`, borderBottom: `1px solid ${INK}33`, fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    <span>Manifest {s.code}</span>
                    <span>Drybulk Pioneer</span>
                  </div>

                  <div className="max-w-xl relative z-10">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-8 rotate-[-6deg]"
                      style={{ borderColor: RUST, color: RUST }}
                    >
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <h2
                      className="text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-6"
                      style={{ color: NAVY }}
                    >
                      {s.title}
                    </h2>

                    <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: `${INK}dd` }}>
                      {s.desc}
                    </p>

                    <button className="inline-flex items-center">
                      <span
                        className="px-5 py-2.5 border-2 rounded-full text-xs tracking-[0.25em] uppercase font-semibold rotate-[-2deg] transition-transform group-hover:rotate-0"
                        style={{ borderColor: NAVY, color: NAVY }}
                      >
                        Details &#9654;
                      </span>
                    </button>
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
