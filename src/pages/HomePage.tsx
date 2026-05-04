import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import IdeaCard from '../components/IdeaCard';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { portfolio } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import { getLocalizedText } from '../utils/localize';
import { sortIdeasByRelevance, sortProjectsByRelevance } from '../utils/portfolio';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.35], [0, 84]);
  const featuredProjects = useMemo(() => sortProjectsByRelevance(portfolio.projects).slice(0, 3), []);
  const featuredIdeas = useMemo(() => sortIdeasByRelevance(portfolio.ideas).slice(0, 2), []);
  const commandSamples = useMemo(
    () => portfolio.profile.commandSamples.map((sample) => getLocalizedText(sample, i18n.language)),
    [i18n.language],
  );
  const typedCommand = useTypewriter(commandSamples);

  return (
    <>
      <Seo
        title="Angelo Perini | Desenvolvedor Web"
        description="Portfólio profissional de Angelo Perini, com projetos em desenvolvimento web, sistemas personalizados e soluções digitais."
      />

      <section className="section-shell relative min-h-[calc(100svh-7rem)] py-10 sm:py-16">
        <div className="hero-grid absolute inset-x-4 inset-y-8 rounded-[40px] opacity-40 sm:inset-x-6 lg:inset-x-8" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="section-label"
            >
              {t('home.eyebrow')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="section-title max-w-5xl"
            >
              {getLocalizedText(portfolio.profile.headline, i18n.language)}{' '}
              <span className="text-gradient">{getLocalizedText(portfolio.profile.role, i18n.language)}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="section-copy mt-6"
            >
              {getLocalizedText(portfolio.profile.subheadline, i18n.language)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/projects" className="primary-button gap-2">
                {t('common.actions.viewProjects')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={portfolio.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button gap-2"
              >
                {t('common.actions.contact')}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {portfolio.profile.stackHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div style={{ y: visualY }} className="relative mx-auto w-full max-w-[36rem]">
            <div className="floating-orb left-2 top-0 h-36 w-36 bg-[var(--accent-strong)]/30" />
            <div className="floating-orb right-8 top-20 h-44 w-44 bg-[var(--accent-soft)]/30 [animation-delay:-7s]" />
            <div className="glass-panel relative overflow-hidden rounded-[34px] p-4 sm:p-6">
              <div className="noise-layer absolute inset-0" />
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                  <span>{t('home.terminalLabel')}</span>
                  <span>{getLocalizedText(portfolio.profile.availability, i18n.language)}</span>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-black/25 p-5 text-sm text-[var(--text-secondary)] shadow-[var(--shadow-card)]">
                  <div className="mb-5 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3 font-mono text-sm leading-7">
                    <div className="text-emerald-300">
                      <span className="text-[var(--text-muted)]">$</span> {typedCommand}
                      <span className="ml-1 inline-block h-5 w-[2px] bg-current align-middle" />
                    </div>
                    <div className="rounded-2xl border border-white/6 bg-white/5 p-3 text-[var(--text-secondary)]">
                      {getLocalizedText(portfolio.profile.longBio, i18n.language)}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {portfolio.profile.metrics.map((metric) => (
                    <div key={metric.value} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{metric.value}</div>
                      <div className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                        {getLocalizedText(metric.label, i18n.language)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-label">{t('common.labels.featured')}</span>
            <h2 className="section-title max-w-4xl text-[clamp(2.4rem,4vw,4.3rem)]">{t('home.featuredTitle')}</h2>
          </div>
          <p className="section-copy max-w-2xl">{t('home.featuredCopy')}</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <ProjectCard project={featuredProjects[0]} featured />
          <div className="grid gap-6">
            {featuredProjects.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <span className="section-label">{t('common.labels.services')}</span>
            <h2 className="section-title max-w-3xl text-[clamp(2.3rem,4vw,4rem)]">{t('home.processTitle')}</h2>
            <p className="section-copy">{t('home.processCopy')}</p>
          </div>

          <div className="space-y-4">
            {portfolio.profile.process.map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ x: 4 }}
                className="glass-panel grid gap-4 rounded-[28px] p-5 sm:grid-cols-[96px_1fr]"
              >
                <div className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{item.step}</div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                    {getLocalizedText(item.title, i18n.language)}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {getLocalizedText(item.description, i18n.language)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-label">{t('common.nav.ideas')}</span>
            <h2 className="section-title max-w-4xl text-[clamp(2.3rem,4vw,4.1rem)]">{t('home.labTitle')}</h2>
          </div>
          <p className="section-copy max-w-2xl">{t('home.labCopy')}</p>
        </div>

        <div className="grid gap-6">
          {featuredIdeas.map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-20">
        <div className="glass-panel relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="section-label">{t('common.nav.contact')}</span>
              <h2 className="section-title max-w-4xl text-[clamp(2.2rem,4vw,4rem)]">{t('home.contactTitle')}</h2>
              <p className="section-copy max-w-3xl">{t('home.contactCopy')}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={portfolio.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button gap-2"
              >
                {t('common.actions.talkNow')}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={portfolio.contacts.email}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button gap-2"
              >
                {t('common.actions.sendEmail')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
