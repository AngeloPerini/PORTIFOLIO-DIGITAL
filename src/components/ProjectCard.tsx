import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import { getLocalizedText } from '../utils/localize';
import { cn } from '../utils/cn';
import LazyImage from './LazyImage';

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { i18n, t } = useTranslation();
  const title = getLocalizedText(project.name, i18n.language);
  const summary = getLocalizedText(project.summary, i18n.language);
  const statusLabel = getLocalizedText(project.status, i18n.language);
  const imageAlt = getLocalizedText(project.imageAlt, i18n.language);

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.24 }}
      className={cn(
        'group project-card glass-panel relative overflow-hidden rounded-[30px] p-3 sm:p-4',
        featured ? 'lg:min-h-[36rem]' : 'lg:min-h-[30rem]',
      )}
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/6">
        {featured ? (
          <div className="absolute left-4 top-4 z-10 rounded-full border border-emerald-300/25 bg-[rgba(10,18,30,0.78)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-200 backdrop-blur-md">
            {t('common.labels.featuredProject')}
          </div>
        ) : null}
        <LazyImage
          src={project.image}
          alt={imageAlt}
          fallbackSeed={project.slug}
          className="h-[18rem] w-full transition duration-700 group-hover:scale-[1.03] sm:h-[20rem]"
        />
      </div>

      <div className="flex h-full flex-col gap-5 px-1 pb-2 pt-5">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{statusLabel}</span>
          <span>{getLocalizedText(project.industry, i18n.language)}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-cyan-300/18 bg-cyan-400/8 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cyan-100"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">{title}</h3>
          <p className="max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">{summary}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to={`/projects/${project.slug}`} className="primary-button inline-flex items-center gap-2">
            {t('common.actions.viewCase')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button inline-flex items-center gap-2"
            >
              {t('common.actions.openDemo')}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="mt-auto flex flex-col gap-5">
          <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
            {project.features.slice(0, 3).map((feature) => (
              <li key={getLocalizedText(feature, i18n.language)} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                <span>{getLocalizedText(feature, i18n.language)}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
