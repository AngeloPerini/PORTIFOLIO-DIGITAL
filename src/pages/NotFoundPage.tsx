import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('notFound.title')} description={t('notFound.description')} />

      <section className="section-shell flex min-h-[70vh] items-center py-20">
        <div className="glass-panel rounded-[34px] p-8 sm:p-10">
          <span className="section-label">404</span>
          <h1 className="section-title max-w-4xl">{t('notFound.title')}</h1>
          <p className="section-copy mt-6 max-w-2xl">{t('notFound.description')}</p>
          <Link to="/" className="primary-button mt-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('common.actions.backHome')}
          </Link>
        </div>
      </section>
    </>
  );
}
