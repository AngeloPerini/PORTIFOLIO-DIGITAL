import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import IdeaCard from '../components/IdeaCard';
import Seo from '../components/Seo';
import { portfolio } from '../data/portfolio';
import { sortIdeasByRelevance } from '../utils/portfolio';

export default function IdeasPage() {
  const { t } = useTranslation();
  const ideas = useMemo(() => sortIdeasByRelevance(portfolio.ideas), []);

  return (
    <>
      <Seo title={t('common.nav.ideas')} description={t('ideas.description')} />

      <section className="section-shell py-12 sm:py-16">
        <span className="section-label">{t('ideas.eyebrow')}</span>
        <h1 className="section-title max-w-5xl">{t('ideas.title')}</h1>
        <p className="section-copy mt-6 max-w-4xl">{t('ideas.description')}</p>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </section>
    </>
  );
}
