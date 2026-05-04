import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Idea } from '../types/portfolio';
import { getLocalizedText } from '../utils/localize';
import LazyImage from './LazyImage';

type IdeaCardProps = {
  idea: Idea;
};

export default function IdeaCard({ idea }: IdeaCardProps) {
  const { i18n, t } = useTranslation();

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.24 }}
      className="glass-panel group relative overflow-hidden rounded-[30px] p-4"
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <LazyImage
          src={idea.image}
          alt={getLocalizedText(idea.name, i18n.language)}
          fallbackSeed={idea.slug}
          className="h-56 w-full transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t(`common.ideaLevel.${idea.level}`)}</span>
            <span>{t('ideas.opportunityLabel')}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
              {getLocalizedText(idea.name, i18n.language)}
            </h3>
            <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              {getLocalizedText(idea.summary, i18n.language)}
            </p>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              {getLocalizedText(idea.opportunity, i18n.language)}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {idea.stackFocus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
            <span>{getLocalizedText(idea.description, i18n.language)}</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
