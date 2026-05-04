import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import Seo from '../components/Seo';
import { portfolio } from '../data/portfolio';
import { getLocalizedText } from '../utils/localize';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section-shell py-24">
        <h1 className="section-title">{t('notFound.title')}</h1>
        <p className="section-copy mt-5">{t('notFound.description')}</p>
        <Link to="/projects" className="primary-button mt-8 gap-2">
          {t('common.actions.backToProjects')}
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </section>
    );
  }

  const title = getLocalizedText(project.name, i18n.language);
  const summary = getLocalizedText(project.summary, i18n.language);
  const imageAlt = getLocalizedText(project.imageAlt, i18n.language);

  return (
    <>
      <Seo title={title} description={summary} />

      <section className="section-shell py-10 sm:py-14">
        <Link to="/projects" className="secondary-button gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t('common.actions.backToProjects')}
        </Link>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <LazyImage
            src={project.image}
            alt={imageAlt}
            fallbackSeed={project.slug}
            className="h-[26rem] w-full"
            wrapperClassName="glass-panel p-3"
          />

          <div className="glass-panel rounded-[32px] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              {getLocalizedText(project.status, i18n.language)}
            </div>
            <h1 className="mt-4 text-[clamp(2.6rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[var(--text-primary)]">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">{summary}</p>
            <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
              {getLocalizedText(project.description, i18n.language)}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-300/18 bg-cyan-400/8 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cyan-100"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="primary-button mt-8 gap-2">
                {t('common.actions.openDemo')}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-6">
          <span className="section-label">{t('projectDetail.galleryTitle')}</span>
          <h2 className="section-title text-[clamp(2rem,3.5vw,3.2rem)]">{t('projectDetail.summaryTitle')}</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {project.gallery.map((image, index) => (
            <LazyImage
              key={`${project.slug}-${index + 1}`}
              src={image.src}
              alt={getLocalizedText(image.alt, i18n.language)}
              fallbackSeed={`${project.slug}-${index + 1}`}
              className="h-72 w-full transition duration-700 hover:scale-[1.03]"
              wrapperClassName="glass-panel p-3 shadow-[var(--shadow-card)]"
            />
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-8 xl:grid-cols-2">
          <div>
            <div className="mb-6">
              <span className="section-label">{t('projectDetail.featuresTitle')}</span>
              <h2 className="section-title text-[clamp(2rem,3.4vw,3.2rem)]">{t('projectDetail.featuresTitle')}</h2>
            </div>
            <ul className="detail-list">
              {project.features.map((feature) => (
                <li
                  key={getLocalizedText(feature, i18n.language)}
                  className="detail-list-item flex gap-3 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                  <span>{getLocalizedText(feature, i18n.language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <span className="section-label">{t('projectDetail.challengesTitle')}</span>
              <h2 className="section-title text-[clamp(2rem,3.4vw,3.2rem)]">{t('projectDetail.challengesTitle')}</h2>
            </div>
            <div className="grid gap-4">
              {project.challenges.map((challenge) => (
                <div key={getLocalizedText(challenge.title, i18n.language)} className="glass-panel rounded-[28px] p-5">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                    {getLocalizedText(challenge.title, i18n.language)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {getLocalizedText(challenge.description, i18n.language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-6">
          <span className="section-label">{t('projectDetail.architectureTitle')}</span>
          <h2 className="section-title text-[clamp(2rem,3.4vw,3.2rem)]">{t('projectDetail.architectureTitle')}</h2>
        </div>
        <div className="glass-panel rounded-[32px] p-5 sm:p-6">
          <div className="grid gap-4">
            {project.architecture.map((item) => (
              <div
                key={getLocalizedText(item.label, i18n.language)}
                className="grid gap-3 rounded-[24px] border border-white/8 bg-white/5 p-4 md:grid-cols-[180px_1fr]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {getLocalizedText(item.label, i18n.language)}
                </div>
                <div className="text-sm leading-7 text-[var(--text-secondary)]">
                  {getLocalizedText(item.value, i18n.language)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 pb-20">
        <div className="glass-panel rounded-[34px] p-6 sm:p-8">
          <span className="section-label">{t('projectDetail.outcomesTitle')}</span>
          <h2 className="section-title text-[clamp(2rem,3.4vw,3.2rem)]">{t('projectDetail.ctaTitle')}</h2>
          <p className="section-copy mt-4">{t('projectDetail.ctaCopy')}</p>
          <div className="mt-6 detail-list">
            {project.outcomes.map((outcome) => (
              <div key={getLocalizedText(outcome, i18n.language)} className="detail-list-item text-sm leading-7 text-[var(--text-secondary)]">
                {getLocalizedText(outcome, i18n.language)}
              </div>
            ))}
          </div>
          <a
            href={portfolio.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button mt-8 gap-2"
          >
            {t('common.actions.talkNow')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
