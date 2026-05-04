import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { portfolio } from '../data/portfolio';
import { getLocalizedText } from '../utils/localize';
import { getTopTechnologies } from '../utils/portfolio';

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const topTechnologies = useMemo(() => getTopTechnologies(portfolio.projects, 8), []);

  return (
    <>
      <Seo title={t('common.nav.about')} description={t('about.description')} />

      <section className="section-shell py-12 sm:py-16">
        <span className="section-label">{t('about.eyebrow')}</span>
        <h1 className="section-title max-w-5xl">{t('about.title')}</h1>
        <p className="section-copy mt-6 max-w-4xl">{t('about.description')}</p>
      </section>

      <AnimatedSection className="section-shell py-16">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[32px] p-6 sm:p-8">
            <p className="text-lg leading-9 text-[var(--text-secondary)]">
              {getLocalizedText(portfolio.profile.longBio, i18n.language)}
            </p>
          </div>
          <div className="glass-panel rounded-[32px] p-6 sm:p-8">
            <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{t('about.highlightsTitle')}</div>
            <ul className="space-y-3">
              {portfolio.profile.highlights.map((item) => (
                <li key={getLocalizedText(item, i18n.language)} className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                  <span>{getLocalizedText(item, i18n.language)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <div className="glass-panel rounded-[32px] p-6 sm:p-8">
          <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{t('about.topTechTitle')}</div>
          <div className="flex flex-wrap gap-2">
            {topTechnologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-300/18 bg-emerald-400/8 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <div className="mb-8">
          <span className="section-label">{t('about.skillsTitle')}</span>
          <h2 className="section-title text-[clamp(2.1rem,3.5vw,3.5rem)]">{t('about.skillsTitle')}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.profile.skills.map((group) => (
            <div key={getLocalizedText(group.category, i18n.language)} className="glass-panel rounded-[30px] p-6">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                {getLocalizedText(group.category, i18n.language)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <div className="mb-8">
          <span className="section-label">{t('about.servicesTitle')}</span>
          <h2 className="section-title text-[clamp(2.1rem,3.5vw,3.5rem)]">{t('about.servicesTitle')}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {portfolio.profile.services.map((service) => (
            <motion.article key={getLocalizedText(service.title, i18n.language)} whileHover={{ y: -6 }} className="glass-panel rounded-[30px] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                {getLocalizedText(service.title, i18n.language)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {getLocalizedText(service.description, i18n.language)}
              </p>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <div className="mb-8">
          <span className="section-label">{t('about.principlesTitle')}</span>
          <h2 className="section-title text-[clamp(2.1rem,3.5vw,3.5rem)]">{t('about.principlesTitle')}</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolio.profile.principles.map((principle) => (
            <div key={getLocalizedText(principle.title, i18n.language)} className="glass-panel rounded-[30px] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                {getLocalizedText(principle.title, i18n.language)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {getLocalizedText(principle.description, i18n.language)}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
