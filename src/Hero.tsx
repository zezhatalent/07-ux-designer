import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function WireframeBackground() {
  const { theme } = useTheme();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1440 900" className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
        {/* Wireframe rectangles */}
        {[
          { x: 80, y: 120, w: 300, h: 180, delay: 0.3 },
          { x: 500, y: 200, w: 250, h: 150, delay: 0.5 },
          { x: 900, y: 100, w: 280, h: 200, delay: 0.7 },
          { x: 1200, y: 300, w: 200, h: 160, delay: 0.9 },
          { x: 200, y: 500, w: 350, h: 120, delay: 1.1 },
          { x: 700, y: 550, w: 260, h: 140, delay: 1.3 },
        ].map((rect, i) => (
          <motion.rect
            key={i}
            x={rect.x} y={rect.y} width={rect.w} height={rect.h}
            rx="8" fill="none" stroke={i % 2 === 0 ? theme.accent : theme.accent2} strokeWidth="1.5" strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: rect.delay }}
          />
        ))}
        {/* Connecting lines */}
        {[
          'M380,210 L500,275',
          'M750,275 L900,200',
          'M1180,200 L1200,380',
          'M350,300 L200,560',
          'M960,340 L700,620',
        ].map((d, i) => (
          <motion.path
            key={`line-${i}`}
            d={d} fill="none" stroke={theme.accent} strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 + i * 0.2 }}
          />
        ))}
        {/* Cursor icon */}
        <motion.g initial={{ opacity: 0, x: -50, y: -50 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 2, duration: 1 }}>
          <path d="M200,400 L200,360 L220,375 L215,390 Z" fill={theme.accent} opacity="0.4" />
        </motion.g>
      </svg>
    </div>
  );
}

function FloatingElements() {
  const { theme } = useTheme();
  const elements = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 18 + 6,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 4,
    shape: ['circle', 'pentagon', 'triangle'][i % 3],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{
            left: `${el.x}%`, top: `${el.y}%`,
            width: el.size, height: el.size,
            borderRadius: el.shape === 'circle' ? '50%' : '3px',
            border: `1px solid ${el.id % 2 === 0 ? theme.accent : theme.accent2}`,
            background: `${el.id % 2 === 0 ? theme.accent : theme.accent2}10`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: el.duration, repeat: Infinity, delay: el.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function Mockup() {
  const { theme } = useTheme();
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border p-4" style={{ borderColor: theme.border, background: theme.surface }}>
      <motion.div initial={{ background: '#ece4f4' }}
        animate={{ background: `linear-gradient(120deg, ${theme.accent}, ${theme.accent2})` }}
        transition={{ duration: 1.6, delay: 0.6 }} className="h-20 rounded-xl" />
      <div className="mt-3 space-y-2">
        {[90, 70, 80, 55].map((w, i) => (
          <motion.div key={i} initial={{ backgroundColor: '#e2d6ee' }} animate={{ backgroundColor: theme.bg }}
            className="h-3 rounded" style={{ width: `${w}%` }}
            transition={{ duration: 1, delay: 1 + i * 0.15 }} />
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <motion.div initial={{ backgroundColor: '#e2d6ee' }} animate={{ background: theme.accent }}
          className="h-9 w-24 rounded-lg" transition={{ duration: 0.8, delay: 1.6 }} />
        <motion.div initial={{ backgroundColor: '#e2d6ee' }} animate={{ background: theme.accent2 }}
          className="h-9 w-24 rounded-lg" transition={{ duration: 0.8, delay: 1.8 }} />
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }} onMouseMove={handleMouse}>
      <WireframeBackground />
      <FloatingElements />

      <div className="pointer-events-none absolute inset-0" style={{
        background: `radial-gradient(600px circle at 25% 30%, ${theme.accent}17, transparent), radial-gradient(600px circle at 80% 70%, ${theme.accent2}17, transparent)`,
      }} />

      <motion.div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2"
        style={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }} transition={{ type: 'spring', stiffness: 50, damping: 30 }}>
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="font-mono text-sm" style={{ color: theme.accent }}>Hi, I&apos;m</motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold md:text-6xl" style={{ color: theme.text }}>{content.name}</motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-xl font-semibold" style={{
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{content.tagline}</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a href="#portfolio" className="rounded-lg px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: theme.accent, color: '#fff' }}>View my work</a>
            <a href="#contact" className="rounded-lg border-2 px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: theme.accent2, color: theme.accent2 }}>Get in touch</a>
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center" style={{ x: mouse.x * -0.5, y: mouse.y * -0.5 }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}>
          <Mockup />
        </motion.div>
      </motion.div>
    </section>
  );
}
