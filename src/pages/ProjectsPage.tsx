import { AnimatePresence, motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { portfolio } from '../data/portfolio';
import { filterProjects, getAllTechnologies, sortProjectsByRelevance } from '../utils/portfolio';

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const projects = useMemo(() => sortProjectsByRelevance(portfolio.projects), []);
  const technologies = useMemo(() => getAllTechnologies(projects), [projects]);
  const [query, setQuery] = useState('');
  const [activeTechnology, setActiveTechnology] = useState('all');

  const filteredProjects = useMemo(
    () => filterProjects(projects, query, activeTechnology, i18n.language),
    [activeTechnology, i18n.language, projects, query],
  );

  return (
    <>
      <Seo title={t('common.nav.projects')} description={t('projects.description')} />

      <section className="section-shell py-12 sm:py-16">
        <span className="section-label">{t('projects.eyebrow')}</span>
        <h1 className="section-title max-w-5xl">{t('projects.title')}</h1>
        <p className="section-copy mt-6 max-w-4xl">{t('projects.description')}</p>
      </section>

      <section className="section-shell pb-10">
        <div className="glass-panel rounded-[32px] p-5 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[var(--text-muted)]">
              <Search className="h-4 w-4" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t('common.searchPlaceholder')}
                className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
              <Filter className="h-4 w-4" />
              <span>{t('projects.filterLabel')}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTechnology('all')}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeTechnology === 'all'
                  ? 'bg-white/12 text-[var(--text-primary)]'
                  : 'border border-white/10 bg-white/5 text-[var(--text-muted)]'
              }`}
            >
              {t('common.filterAll')}
            </button>
            {technologies.map((technology) => (
              <button
                key={technology}
                type="button"
                onClick={() => setActiveTechnology(technology)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeTechnology === technology
                    ? 'bg-white/12 text-[var(--text-primary)]'
                    : 'border border-white/10 bg-white/5 text-[var(--text-muted)]'
                }`}
              >
                {technology}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mb-6 text-sm text-[var(--text-muted)]">
          {filteredProjects.length} {t('projects.resultsLabel')}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="glass-panel rounded-[32px] p-8 text-center">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
              {t('common.emptyStateTitle')}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{t('common.emptyStateCopy')}</p>
          </div>
        ) : (
          <motion.div layout className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <ProjectCard project={filteredProjects[0]} featured />
            <div className="grid gap-6">
              <AnimatePresence>
                {filteredProjects.slice(1).map((project) => (
                  <motion.div key={project.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
}
