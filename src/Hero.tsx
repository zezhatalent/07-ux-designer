import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function Mockup() {
  const { theme } = useTheme();
  return (
    <div
      className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border p-4"
      style={{ borderColor: theme.border, background: theme.surface }}
    >
      {/* wireframe → color transition on load */}
      <motion.div
        initial={{ background: '#ece4f4' }}
        animate={{ background: `linear-gradient(120deg, ${theme.accent}, ${theme.accent2})` }}
        transition={{ duration: 1.6, delay: 0.6 }}
        className="h-20 rounded-xl"
      />
      <div className="mt-3 space-y-2">
        {[90, 70, 80, 55].map((w, i) => (
          <motion.div
            key={i}
            initial={{ backgroundColor: '#e2d6ee' }}
            animate={{ backgroundColor: theme.bg }}
            className="h-3 rounded"
            style={{ width: `${w}%` }}
            transition={{ duration: 1, delay: 1 + i * 0.15 }}
          />
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <motion.div
          initial={{ backgroundColor: '#e2d6ee' }}
          animate={{ background: theme.accent }}
          className="h-9 w-24 rounded-lg"
          transition={{ duration: 0.8, delay: 1.6 }}
        />
        <motion.div
          initial={{ backgroundColor: '#e2d6ee' }}
          animate={{ background: theme.accent2 }}
          className="h-9 w-24 rounded-lg"
          transition={{ duration: 0.8, delay: 1.8 }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at 25% 30%, ${theme.accent}17, transparent), radial-gradient(600px circle at 80% 70%, ${theme.accent2}17, transparent)`,
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm"
            style={{ color: theme.accent }}
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-semibold"
            style={{
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="rounded-lg px-6 py-3 font-semibold"
              style={{ background: theme.accent, color: '#fff' }}
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 px-6 py-3 font-semibold"
              style={{ borderColor: theme.accent2, color: theme.accent2 }}
            >
              Get in touch
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Mockup />
        </div>
      </div>
    </section>
  );
}
