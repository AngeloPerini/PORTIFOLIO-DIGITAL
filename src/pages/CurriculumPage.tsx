import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import curriculoImg from '../assets/curriculo/curriculo.jpeg';

export default function CurriculumPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('common.nav.curriculum')} description={t('curriculum.description')} />

      <section className="section-shell py-12 sm:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-label">{t('curriculum.eyebrow')}</span>
            <h1 className="section-title max-w-5xl">{t('curriculum.title')}</h1>
            <p className="section-copy mt-6 max-w-4xl">{t('curriculum.description')}</p>
          </div>

          <a
            href={curriculoImg}
            download="Curriculo-Angelo-Perini.jpeg"
            className="primary-button inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <Download className="h-4 w-4" />
            {t('common.actions.downloadResume')}
          </a>
        </div>
      </section>

      <AnimatedSection className="section-shell pb-14 sm:pb-20">
        <div className="glass-panel rounded-[32px] p-4 sm:p-6 lg:p-8">
          <div className="mb-5 flex flex-col gap-2 sm:mb-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{t('curriculum.cardTitle')}</div>
            <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">{t('curriculum.cardCopy')}</p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[var(--surface-strong)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-3">
            <img
              src={curriculoImg}
              alt="Curriculo profissional Angelo Perini"
              className="mx-auto h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
