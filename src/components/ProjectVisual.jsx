import { motion, useReducedMotion } from "motion/react";

const themes = {
  vision: {
    label: "COMPUTER VISION",
    code: "FACIAL RECOGNITION",
  },
  backend: {
    label: "BACKEND INFRASTRUCTURE",
    code: "URL · API · DATABASE",
  },
  research: {
    label: "INTELLIGENCE ENGINE",
    code: "SEARCH · ANALYZE · REPORT",
  },
};

function FaceRecognitionVisual({ reduceMotion }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute flex h-36 w-36 items-center justify-center rounded-full border border-dashed border-[#d69a58]/40"
      >
        <div className="absolute inset-3 rounded-full border border-white/10" />

        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d69a58]" />
      </motion.div>

      {/* Facial recognition illustration */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#d69a58]/50 bg-[#d69a58]/5">
        <svg
          viewBox="0 0 100 100"
          className="h-20 w-20 text-[#d69a58]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M25 35V25H35" />
          <path d="M65 25H75V35" />
          <path d="M25 65V75H35" />
          <path d="M65 75H75V65" />

          <path d="M34 42Q40 36 46 42" />
          <path d="M54 42Q60 36 66 42" />

          <path d="M50 42L46 56H53" />

          <path d="M38 65Q50 75 62 65" />

          <circle cx="40" cy="42" r="1.5" fill="currentColor" />
          <circle cx="60" cy="42" r="1.5" fill="currentColor" />
        </svg>

        {/* Scanning line */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [-30, 30, -30] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-4 right-4 top-1/2 h-px bg-[#d69a58]/70"
        />
      </div>

      {/* Technical labels */}
      <span className="absolute left-4 top-8 font-mono text-[9px] tracking-widest text-white/40">
        FACE_ID
      </span>

      <span className="absolute right-4 top-8 font-mono text-[9px] tracking-widest text-[#d69a58]/70">
        AI / 01
      </span>

      <span className="absolute bottom-12 left-5 font-mono text-[9px] text-white/40">
        EMBEDDINGS
      </span>

      <span className="absolute bottom-12 right-5 font-mono text-[9px] text-white/40">
        MATCH ENGINE
      </span>
    </div>
  );
}

function LinkForgeVisual({ reduceMotion }) {
  const nodes = [
    { label: "URL", subtitle: "INPUT" },
    { label: "API", subtitle: "PROCESS" },
    { label: "DB", subtitle: "STORE" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-center gap-2 sm:gap-4">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex items-center gap-2 sm:gap-4">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -5, 0] }
              }
              transition={{
                duration: 2.5,
                delay: index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-16 w-16 flex-col items-center justify-center border border-[#d69a58]/30 bg-[#d69a58]/5 sm:h-20 sm:w-20"
            >
              <span className="font-mono text-lg text-[#d69a58]">
                {node.label}
              </span>

              <span className="mt-1 text-[8px] tracking-widest text-white/40">
                {node.subtitle}
              </span>
            </motion.div>

            {index < nodes.length - 1 && (
              <div className="relative h-px w-5 overflow-hidden bg-white/10 sm:w-8">
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { x: [-20, 35] }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 left-0 w-3 bg-[#d69a58]"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-7 -translate-x-1/2 font-mono text-[9px] tracking-[0.25em] text-white/40">
        LINKFORGE SYSTEM
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-widest text-[#d69a58]/70">
        CREATE → REDIRECT → TRACK
      </div>
    </div>
  );
}

function ResearchPilotVisual({ reduceMotion }) {
  const nodes = [
    { label: "SEARCH", x: "-66px", y: "-31px" },
    { label: "ANALYZE", x: "66px", y: "-31px" },
    { label: "REPORT", x: "0px", y: "65px" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Orbital rings */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { rotate: -360 }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-36 w-36 rounded-full border border-dashed border-[#d69a58]/30"
      />

      <div className="absolute h-28 w-28 rounded-full border border-white/10" />

      {/* Research core */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.08, 1] }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#d69a58]/60 bg-[#d69a58]/10"
      >
        <span className="font-serif text-3xl text-[#d69a58]">
          R
        </span>
      </motion.div>

      {/* Research workflow nodes */}
      {nodes.map((node) => (
        <div
          key={node.label}
          style={{
            transform: `translate(${node.x}, ${node.y})`,
          }}
          className="absolute z-20 border border-white/10 bg-[#101016] px-3 py-2 font-mono text-[8px] tracking-widest text-white/70"
        >
          {node.label}
        </div>
      ))}

      <span className="absolute left-4 top-7 font-mono text-[9px] text-white/40">
        GEMINI AI
      </span>

      <span className="absolute right-4 top-7 font-mono text-[9px] text-[#d69a58]/70">
        RESEARCH / 03
      </span>
    </div>
  );
}

export default function ProjectVisual({ type }) {
  const reduceMotion = useReducedMotion();

  const theme = themes[type] ?? themes.vision;

  return (
    <div className="group/visual relative mb-7 h-48 overflow-hidden border border-white/10 bg-[#0b0b12]">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,154,88,0.13),transparent_70%)]" />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated scanning beam */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, 190, 0] }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-[#d69a58]/80 to-transparent"
      />

      {/* Project-specific visual */}
      {type === "vision" && (
        <FaceRecognitionVisual reduceMotion={reduceMotion} />
      )}

      {type === "backend" && (
        <LinkForgeVisual reduceMotion={reduceMotion} />
      )}

      {type === "research" && (
        <ResearchPilotVisual reduceMotion={reduceMotion} />
      )}

      {/* Bottom metadata */}
      <div className="absolute bottom-3 left-4 right-4 z-40 flex items-center justify-between gap-2">
        <span className="text-[8px] tracking-[0.18em] text-white/50">
          {theme.label}
        </span>

        <span className="text-right font-mono text-[8px] tracking-wider text-[#d69a58]/80">
          {theme.code}
        </span>
      </div>
    </div>
  );
}