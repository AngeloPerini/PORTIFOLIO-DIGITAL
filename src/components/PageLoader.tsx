import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PageLoader() {
  const { t } = useTranslation();

  return (
    <div className="section-shell flex min-h-[70vh] items-center py-16">
      <div className="glass-panel relative w-full overflow-hidden rounded-[32px] p-6 sm:p-8">
        <div className="noise-layer absolute inset-0" />
        <div className="relative space-y-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY }}
              className="h-2.5 w-2.5 rounded-full bg-[var(--accent-strong)]"
            />
            {t('common.loading')}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="h-6 w-40 rounded-full bg-white/10 animate-pulse" />
              <div className="h-16 w-full rounded-[28px] bg-white/10 animate-pulse" />
              <div className="h-16 w-10/12 rounded-[28px] bg-white/5 animate-pulse" />
            </div>

            <div className="rounded-[28px] border border-white/8 bg-black/20 p-5 shadow-[var(--shadow-card)]">
              <div className="mb-5 h-5 w-32 rounded-full bg-white/10 animate-pulse" />
              <div className="space-y-3">
                <div className="h-12 rounded-2xl bg-white/10 animate-pulse" />
                <div className="h-12 rounded-2xl bg-white/5 animate-pulse" />
                <div className="h-12 rounded-2xl bg-white/10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
