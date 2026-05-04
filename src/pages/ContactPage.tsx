import { Camera, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { portfolio } from '../data/portfolio';
import { getLocalizedText } from '../utils/localize';

export default function ContactPage() {
  const { t, i18n } = useTranslation();

  const channels = [
    {
      href: portfolio.contacts.whatsapp,
      icon: MessageCircle,
      title: 'WhatsApp',
      description: t('contact.whatsappHint'),
    },
    {
      href: portfolio.contacts.email,
      icon: Mail,
      title: 'Email',
      description: t('contact.emailHint'),
    },
    {
      href: portfolio.contacts.instagram,
      icon: Camera,
      title: 'Instagram',
      description: t('contact.instagramHint'),
    },
  ];

  return (
    <>
      <Seo title={t('common.nav.contact')} description={t('contact.description')} />

      <section className="section-shell py-12 sm:py-16">
        <span className="section-label">{t('contact.eyebrow')}</span>
        <h1 className="section-title max-w-5xl">{t('contact.title')}</h1>
        <p className="section-copy mt-6 max-w-4xl">{t('contact.description')}</p>
      </section>

      <section className="section-shell pb-12">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[32px] p-6 sm:p-8">
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{t('contact.directTitle')}</div>
            </div>
            <div className="grid gap-4">
              {channels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[26px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="icon-button">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">{channel.title}</div>
                        <div className="text-sm text-[var(--text-muted)]">{channel.description}</div>
                        {channel.title === 'Email' ? (
                          <div className="mt-1 text-sm text-[var(--text-secondary)]">{portfolio.contacts.emailAddress}</div>
                        ) : null}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-panel rounded-[32px] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{t('contact.availabilityTitle')}</div>
              <div className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                {getLocalizedText(portfolio.profile.availability, i18n.language)}
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{t('contact.locationLabel')}</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {getLocalizedText(portfolio.profile.location, i18n.language)}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{t('contact.responseLabel')}</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {getLocalizedText(portfolio.profile.responseTime, i18n.language)}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{t('contact.processTitle')}</div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{t('contact.processCopy')}</p>
              <div className="mt-5 detail-list">
                {portfolio.profile.process.map((item) => (
                  <div key={item.step} className="detail-list-item">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{item.step}</div>
                    <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                      {getLocalizedText(item.title, i18n.language)}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      {getLocalizedText(item.description, i18n.language)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
