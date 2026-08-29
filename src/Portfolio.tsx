import { motion } from 'framer-motion';
import Reveal from './lib/Reveal';
import { useInView } from './hooks/useMotion';
import { useTheme } from './components/ThemeProvider';

const projects = [
  { title: 'Banking App', tag: 'Mobile · Fintech' },
  { title: 'SaaS Dashboard', tag: 'Web · B2B' },
  { title: 'Wellness App', tag: 'Mobile · Health' },
];

function MorphCard({ title, tag, index }: { title: string; tag: string; index: number }) {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div ref={ref}>
      <Reveal delay={index * 0.1}>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: theme.border, background: theme.surface }}>
          {/* morph from wireframe to color */}
          <motion.div
            className="h-44"
            initial={{ background: '#e7dbef' }}
            animate={inView ? { background: `linear-gradient(130deg, ${theme.accent}, ${theme.accent2})` } : {}}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            {/* wireframe lines that fade out */}
            <div className="flex h-full items-end gap-2 p-4 opacity-60">
              {[30, 50, 40, 65, 55, 75].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-t"
                  style={{ background: theme.surface, height: `${h}%` }}
                  animate={inView ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
                />
              ))}
            </div>
          </motion.div>
          <div className="p-5">
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>{title}</h3>
            <p className="text-sm" style={{ color: theme.muted }}>{tag}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Portfolio() {
  const { theme } = useTheme();
  return (
    <section id="portfolio" className="py-24" style={{ background: theme.surface }}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold" style={{ color: theme.text }}>Selected case studies</h2>
          <p className="mt-2" style={{ color: theme.muted }}>
            Watch wireframes morph into final, polished interfaces as you scroll.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <MorphCard key={p.title} title={p.title} tag={p.tag} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
