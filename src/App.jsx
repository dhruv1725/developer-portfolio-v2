import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const World3D = lazy(() => import('./components/World3D.jsx'))

import CustomCursor from './components/CustomCursor.jsx'
import Reveal from './components/Reveal.jsx'

// =====================================================
// ACCESSIBLE COLOR CONSTANTS
// =====================================================

const COLORS = {
  background: '#08090d',
  primary: '#f1eee8',
  secondary: '#b8b5ae',
  gold: '#d69a58',
  goldHover: '#e5b47e',
}

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  {
    number: '01',
    name: 'FaceAttend AI',
    category: 'COMPUTER VISION',
    description:
      'An AI-powered attendance system using facial recognition, Flask, InsightFace, and PostgreSQL.',
    technologies: ['Python', 'Flask', 'InsightFace', 'PostgreSQL'],
    link: 'https://github.com/dhruv1725/AI-BasedFacialRecognitionSystem',
  },
  {
    number: '02',
    name: 'LinkForge',
    category: 'BACKEND ENGINEERING',
    description:
      'A URL shortening service featuring custom aliases, expiration dates, click tracking, and request validation.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/dhruv1725/LinkForge',
  },
  {
    number: '03',
    name: 'ResearchPilot',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'An AI research assistant that generates structured research reports from a given topic using Gemini.',
    technologies: ['Python', 'Gemini API', 'AI'],
    link: 'https://github.com/dhruv1725',
  },
]

// =====================================================
// CINEMATIC LOADING SCREEN
// =====================================================

function LoadingScreen() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#08090d] px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.9,
        ease: 'easeInOut',
      }}
    >
      {/* Cinematic atmospheric glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        style={{
          background:
            'radial-gradient(ellipse at 50% 43%, rgba(214,154,88,0.13) 0%, rgba(100,90,130,0.035) 32%, rgba(8,9,13,0) 68%)',
        }}
      />

      {/* Subtle ambient light */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d69a58]/[0.06] sm:h-80 sm:w-80"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* Animated emblem */}
      <motion.div
        className="relative mb-9 flex h-20 w-20 items-center justify-center rounded-full border border-[#d69a58]/35 sm:h-24 sm:w-24"
        initial={{
          opacity: 0,
          scale: 0.55,
          rotate: -35,
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: [0.65, 1, 0.65],
                scale: [0.96, 1.04, 0.96],
              }
        }
        transition={{
          duration: 3,
          repeat: shouldReduceMotion ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Rotating outer ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border border-dashed border-[#d69a58]/20"
          animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
          transition={{
            duration: 35,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'linear',
          }}
        />

        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-[#d69a58]/15"
          animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
          transition={{
            duration: 35,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'linear',
          }}
        />

        {/* Emblem glow */}
        <motion.span
          className="relative text-4xl text-[#d69a58] sm:text-5xl"
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: [0.65, 1, 0.65],
                  scale: [0.96, 1.04, 0.96],
                }
          }
          transition={{
            duration: 3,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        >
          ✦
        </motion.span>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="relative font-serif text-3xl tracking-[0.13em] text-[#f1eee8] sm:text-6xl sm:tracking-[0.22em]"
        style={{
          fontFamily: 'var(--font-display)',
        }}
        initial={{
          opacity: 0,
          y: 22,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: 'easeOut',
        }}
      >
        DHRUV KUMAR
      </motion.h1>

      {/* Accent divider */}
      <motion.div
        className="mt-5 h-px w-10 bg-[#d69a58]/70"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          delay: 0.55,
          duration: 0.8,
        }}
      />

      {/* Subtitle */}
      <motion.p
        className="relative mt-5 text-[9px] uppercase tracking-[0.22em] text-[#d69a58] sm:text-xs sm:tracking-[0.35em]"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
          duration: 0.8,
        }}
      >
        Software Developer · AI Explorer
      </motion.p>

      {/* Loading progress track */}
      <div className="relative mt-12 h-px w-48 overflow-hidden bg-white/10 sm:w-64">
        <motion.div
          className="h-full w-full origin-left bg-[#d69a58]"
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 2.2,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Loading caption */}
      <motion.p
        className="relative mt-5 text-[9px] uppercase tracking-[0.3em] text-[#b8b5ae]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.75,
          duration: 0.8,
        }}
      >
        Entering the unknown
      </motion.p>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-8 px-4 text-[8px] tracking-[0.2em] text-[#b8b5ae] sm:tracking-[0.25em]"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
      >
        AN INTERACTIVE DIGITAL EXPERIENCE
      </motion.div>
    </motion.div>
  )
}

// =====================================================
// PORTFOLIO APPLICATION
// =====================================================

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [show3DScene, setShow3DScene] = useState(false)

  // Loading screen timer
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 2400)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  // Start loading the 3D scene after the initial loading screen.
  useEffect(() => {
    if (isLoading) return

    const timer = window.setTimeout(() => {
      setShow3DScene(true)
    }, 100)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isLoading])

  // Scroll progress indicator
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0

      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    updateScrollProgress()

    window.addEventListener('scroll', updateScrollProgress, {
      passive: true,
    })

    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090d] text-[#f1eee8]">
      <CustomCursor />

      {/* =================================================
          LOADING SCREEN
      ================================================= */}

      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* =================================================
          3D WORLD
      ================================================= */}

      <div className="fixed inset-0 z-0">
        {show3DScene && (
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-[#08090d]" />
            }
          >
            <World3D />
          </Suspense>
        )}
      </div>

      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,9,13,0.18) 0%, transparent 35%, rgba(8,9,13,0.25) 65%, #08090d 100%)',
        }}
      />

      {/* =================================================
          NAVIGATION
      ================================================= */}

      {/* Scroll progress indicator */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] bg-white/[0.04]"
      >
        <motion.div
          className="h-full origin-left bg-[#d69a58]"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-[#08090d]/35 px-6 py-5 backdrop-blur-md sm:px-12 sm:py-6 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            aria-label="Go to home"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-50 text-xl font-semibold tracking-[0.2em] sm:text-2xl"
          >
            DHRUV<span className="text-[#d69a58]">.</span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-[10px] tracking-[0.18em] text-[#b8b5ae] md:flex lg:gap-10 lg:text-xs"
          >
            {[
              ['HOME', '#home'],
              ['ABOUT', '#about'],
              ['PROJECTS', '#projects'],
              ['CONTACT', '#contact'],
            ].map(([label, href]) => (
              <motion.a
                key={href}
                href={href}
                whileHover={{ y: -2 }}
                className="group relative py-2 transition-colors duration-300 hover:text-[#e5b47e]"
              >
                {label}

                <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-[#d69a58] transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] border border-white/15 bg-black/30 md:hidden"
          >
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 4 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-px w-5 bg-[#d69a58]"
              transition={{ duration: 0.2 }}
            />

            <motion.span
              animate={
                mobileMenuOpen
                  ? { opacity: 0, x: 8 }
                  : { opacity: 1, x: 0 }
              }
              className="block h-px w-5 bg-[#f1eee8]"
              transition={{ duration: 0.15 }}
            />

            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: -10 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-px w-5 bg-[#d69a58]"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Animated mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col border-t border-white/10 pt-3">
                {[
                  ['01', 'HOME', '#home'],
                  ['02', 'ABOUT', '#about'],
                  ['03', 'PROJECTS', '#projects'],
                  ['04', 'CONTACT', '#contact'],
                ].map(([number, label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-5 border-b border-white/[0.06] py-4 text-xs tracking-[0.2em] text-[#b8b5ae] transition-colors hover:text-[#e5b47e]"
                  >
                    <span className="text-[9px] text-[#d69a58]">
                      {number}
                    </span>

                    {label}

                    <span className="ml-auto text-[#d69a58]">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center px-6 pb-24 pt-32 sm:px-12 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="max-w-4xl"
        >
          {/* Animated eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#d69a58] sm:text-xs sm:tracking-[0.35em]"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-[#d69a58]"
            />

            SOFTWARE DEVELOPER · AI EXPLORER
          </motion.p>

          {/* Main headline */}
          <h1 className="font-serif text-5xl font-medium leading-[1.05] sm:text-7xl lg:text-[112px]">
            <motion.span
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              Building beyond
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              the{' '}
              <span
                className="italic text-[#d69a58]"
                style={{
                  textShadow: '0 0 45px rgba(214,154,88,0.25)',
                }}
              >
                ordinary.
              </span>
            </motion.span>
          </h1>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-8 max-w-lg text-sm leading-7 text-[#b8b5ae] sm:text-base"
          >
            I build thoughtful software, explore artificial
            intelligence, and turn complex ideas into practical
            digital experiences.
          </motion.p>

          {/* Animated buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="pointer-events-auto border border-[#d69a58] bg-[#d69a58] px-6 py-4 text-[10px] font-semibold tracking-[0.15em] !text-[#08090d] transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b47e] hover:bg-[#e5b47e] hover:!text-[#08090d] hover:shadow-[0_0_30px_rgba(214,154,88,0.15)]"
            >
              EXPLORE MY WORK ↘
            </a>

            <a
              href="https://github.com/dhruv1725"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto border border-white/25 bg-black/30 px-6 py-4 text-[10px] tracking-[0.15em] text-[#f1eee8] transition-all duration-300 hover:-translate-y-1 hover:border-[#d69a58] hover:text-[#e5b47e]"
            >
              GITHUB ↗
            </a>
            
            <a
              href="/Dhruv_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto border border-white/20 bg-black/30 px-6 py-4 text-[10px] tracking-[0.15em] text-[#f1eee8] transition-all duration-300 hover:-translate-y-1 hover:border-[#d69a58] hover:text-[#e5b47e]"
            >
              VIEW RESUME ↗
            </a>

          </motion.div>
        </motion.div>

        {/* Cursor interaction hint */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-10 left-6 flex items-center gap-3 text-[9px] tracking-[0.2em] text-[#b8b5ae] sm:left-12 lg:left-20"
        >
          <motion.span
            animate={{ scaleY: [1, 0.65, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-8 w-px origin-top bg-[#d69a58]/70"
          />

          <span className="hidden sm:inline">
            MOVE YOUR CURSOR TO EXPLORE
          </span>

          <span className="sm:hidden">
            AN INTERACTIVE WORLD
          </span>
        </motion.div>

        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 right-6 text-[10px] tracking-widest text-[#b8b5ae] sm:right-12 lg:right-20"
        >
          01 <span className="mx-2 text-[#d69a58]">/</span> 03
        </motion.div>
      </section>

      {/* =================================================
          ABOUT SECTION — SKILLS & EXPERTISE
      ================================================= */}

      <section
        id="about"
        className="relative z-10 overflow-hidden border-t border-white/10 bg-[#08090d]/95 px-6 py-24 sm:px-12 lg:px-20 lg:py-32"
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(214,154,88,0.08), transparent 70%)',
          }}
        />

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#d69a58] sm:text-xs">
              <span className="h-px w-8 bg-[#d69a58]" />
              THE PERSON BEHIND THE CODE
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
              Curiosity is the
              <br />

              <span className="italic text-[#d69a58]">
                starting point.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-[#b8b5ae] sm:text-base">
            I'm Dhruv, a developer interested in building useful software
            through backend engineering, computer vision, and artificial
            intelligence. I enjoy exploring how systems work and turning
            what I learn into practical applications.
          </p>
        </motion.div>

        {/* Expertise areas */}
        <div className="relative mt-16 grid gap-4 md:grid-cols-3">
          {/* Backend development */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-[#d69a58]/40 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-3xl text-[#d69a58]">
                01
              </span>

              <span className="text-2xl text-[#d69a58] transition-transform duration-500 group-hover:rotate-12">
                ◈
              </span>
            </div>

            <p className="mb-3 text-[9px] tracking-[0.25em] text-[#b8b5ae]">
              SYSTEMS & APIS
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl">
              Backend Engineering
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#b8b5ae]">
              Building application logic, REST APIs, data persistence,
              request validation, and reliable server-side systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Flask', 'REST APIs'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-2 text-[9px] text-[#b8b5ae]"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d69a58] transition-all duration-700 group-hover:w-full" />
          </motion.article>

          {/* Artificial intelligence */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-[#d69a58]/40 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-3xl text-[#d69a58]">
                02
              </span>

              <span className="text-2xl text-[#d69a58] transition-transform duration-500 group-hover:rotate-12">
                ✳
              </span>
            </div>

            <p className="mb-3 text-[9px] tracking-[0.25em] text-[#b8b5ae]">
              INTELLIGENT APPLICATIONS
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl">
              AI & Computer Vision
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#b8b5ae]">
              Exploring facial recognition, AI-powered research workflows,
              and applications that transform complex tasks into useful
              experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['Python', 'InsightFace', 'Gemini API', 'AI'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-2 text-[9px] text-[#b8b5ae]"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d69a58] transition-all duration-700 group-hover:w-full" />
          </motion.article>

          {/* Databases and tools */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-[#d69a58]/40 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-3xl text-[#d69a58]">
                03
              </span>

              <span className="text-2xl text-[#d69a58] transition-transform duration-500 group-hover:rotate-12">
                ⌘
              </span>
            </div>

            <p className="mb-3 text-[9px] tracking-[0.25em] text-[#b8b5ae]">
              DATA & DEVELOPMENT
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl">
              Data & Tools
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#b8b5ae]">
              Working with relational databases, application testing,
              development environments, and tools for building and
              maintaining software.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['PostgreSQL', 'SQL', 'Git', 'GitHub'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-2 text-[9px] text-[#b8b5ae]"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d69a58] transition-all duration-700 group-hover:w-full" />
          </motion.article>
        </div>

        {/* Technical skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#d69a58]">
              MY TOOLKIT
            </p>

            <h3 className="font-serif text-4xl leading-tight sm:text-5xl">
              Tools for
              <br />

              <span className="italic text-[#d69a58]">
                the journey.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#b8b5ae]">
              Technologies I've used while developing my projects and
              continuing to grow as a software developer.
            </p>
          </div>

          {/* Animated skill indicators */}
          <div className="space-y-7">
            {[
              {
                name: 'Python',
                category: 'AI & APPLICATION DEVELOPMENT',
                level: 80,
              },
              {
                name: 'Java & Spring Boot',
                category: 'BACKEND DEVELOPMENT',
                level: 75,
              },
              {
                name: 'PostgreSQL & SQL',
                category: 'DATABASES',
                level: 75,
              },
              {
                name: 'AI & Computer Vision',
                category: 'INTELLIGENT SYSTEMS',
                level: 70,
              },
              {
                name: 'React & Frontend',
                category: 'WEB DEVELOPMENT',
                level: 60,
              },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h4 className="text-sm text-[#f1eee8]">
                      {skill.name}
                    </h4>

                    <p className="mt-1 text-[8px] tracking-[0.15em] text-[#b8b5ae] sm:text-[9px]">
                      {skill.category}
                    </p>
                  </div>

                  <span className="text-[10px] tracking-widest text-[#d69a58]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="h-[3px] overflow-hidden bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: index * 0.12,
                      ease: 'easeOut',
                    }}
                    className="h-full bg-[#d69a58]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 border-l border-[#d69a58]/50 pl-6 sm:pl-8"
        >
          <p className="max-w-3xl font-serif text-2xl leading-relaxed text-[#b8b5ae] sm:text-3xl">
            "The goal isn't just to make things work.
            <span className="italic text-[#d69a58]">
              {' '}It's to understand why they work.
            </span>"
          </p>
        </motion.div>
      </section>

      {/* =================================================
          PROJECTS SECTION
      ================================================= */}

      <section
        id="projects"
        className="relative z-10 border-t border-white/10 bg-[#08090d]/95 px-6 py-24 sm:px-12 lg:px-20"
      >
        <p className="mb-5 text-xs tracking-[0.3em] text-[#d69a58]">
          SELECTED PROJECTS
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-7xl">
              Work in{' '}
              <span className="italic text-[#d69a58]">
                progress.
              </span>
            </h2>
          </Reveal>

          <Reveal direction="left" delay={0.35}>
            <p className="max-w-sm text-sm leading-7 text-[#b8b5ae]">
              A collection of projects exploring intelligent systems,
              backend development, and practical software.
            </p>
          </Reveal>
        </div>

        {/* Editorial project showcase */}
        <div className="mt-14 border-t border-white/15">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.15}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Explore ${project.name} on GitHub`}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="group relative grid gap-6 overflow-hidden border-b border-white/15 px-1 py-8 transition-colors duration-500 hover:bg-white/[0.025] sm:py-10 lg:grid-cols-[90px_minmax(0,1.1fr)_minmax(240px,0.9fr)_40px] lg:items-center lg:gap-8 lg:px-5"
              >
                {/* Animated accent line */}
                <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#d69a58] transition-all duration-700 group-hover:w-full" />

                {/* Project number and category */}
                <div className="flex items-center gap-4 lg:block">
                  <span className="font-serif text-3xl text-[#d69a58] sm:text-4xl">
                    {project.number}
                  </span>

                  <span className="text-[9px] tracking-[0.22em] text-[#b8b5ae] lg:mt-3 lg:block">
                    {project.category}
                  </span>
                </div>

                {/* Project name and description */}
                <div className="min-w-0">
                  <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#e5b47e] sm:text-4xl lg:text-5xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#b8b5ae]">
                    {project.description}
                  </p>
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap content-start gap-2 lg:justify-start">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 px-3 py-2 text-[9px] tracking-wider text-[#b8b5ae] transition-colors duration-300 group-hover:border-[#d69a58]/25"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg text-[#b8b5ae] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#d69a58]/60 group-hover:text-[#e5b47e] lg:flex">
                  ↗
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* More projects link */}
        <div className="mt-8 flex flex-col gap-3 text-[10px] tracking-[0.16em] text-[#b8b5ae] sm:flex-row sm:items-center sm:justify-between">
          <span>
            BUILT THROUGH CURIOSITY AND ITERATION
          </span>

          <a
            href="https://github.com/dhruv1725"
            target="_blank"
            rel="noreferrer"
            className="w-fit border-b border-[#d69a58]/40 pb-1 text-[#d69a58] transition-colors hover:border-[#e5b47e] hover:text-[#e5b47e]"
          >
            MORE ON GITHUB ↗
          </a>
        </div>
      </section>

      {/* =================================================
          CONTACT SECTION
      ================================================= */}

      <section
        id="contact"
        className="relative z-10 border-t border-white/10 bg-[#0b0b10] px-6 py-24 sm:px-12 lg:px-20"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs tracking-[0.3em] text-[#d69a58]">
            THE NEXT CHAPTER
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-7xl">
            Have an idea?
            <br />

            <span className="italic text-[#d69a58]">
              Let's build something.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#b8b5ae]">
            I'm always interested in learning, collaborating, and
            building meaningful software.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://github.com/dhruv1725"
              target="_blank"
              rel="noreferrer"
              className="border border-[#d69a58] px-6 py-4 text-[10px] tracking-[0.15em] text-[#d69a58] transition-colors duration-300 hover:bg-[#d69a58] hover:text-[#08090d]"
            >
              FIND ME ON GITHUB ↗
            </a>

            <a
              href="https://linkedin.com/in/Dhruv-Kumar03"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 px-6 py-4 text-[10px] tracking-[0.15em] text-[#f1eee8] transition-colors duration-300 hover:border-white/60"
            >
              CONNECT ON LINKEDIN ↗
            </a>

            <a
              href="mailto:dhruvkumar1725@gmail.com"
              className="border border-white/20 px-6 py-4 text-[10px] tracking-[0.15em] text-[#f1eee8] transition-colors duration-300 hover:border-[#d69a58] hover:bg-[#d69a58] hover:text-[#08090d]"
            >
              EMAIL ME ↗
            </a>


          </div>
        </motion.div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#08090d] px-6 py-8 text-[10px] tracking-widest text-[#b8b5ae] sm:px-12 lg:px-20">
        <span>
          DHRUV KUMAR{' '}
          <span className="text-[#d69a58]">·</span>{' '}
          DEVELOPER
        </span>

        <div className="flex gap-5">
          <a
            className="transition-colors hover:text-[#e5b47e]"
            href="https://linkedin.com/in/Dhruv-Kumar03"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            className="transition-colors hover:text-[#e5b47e]"
            href="https://leetcode.com/u/dhruv160305simple/"
            target="_blank"
            rel="noreferrer"
          >
            LEETCODE ↗
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App