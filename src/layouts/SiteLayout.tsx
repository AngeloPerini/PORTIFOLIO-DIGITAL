import { AnimatePresence, motion } from 'framer-motion';
import { Camera, Globe2, Mail, Menu, MessageCircle, MoonStar, SunMedium, ChevronUp, X } from 'lucide-react';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';
import { SUPPORTED_LOCALES, type SupportedLocale } from '../types/portfolio';
import { cn } from '../utils/cn';
import { getLocalizedText } from '../utils/localize';

type SiteLayoutProps = {
  children: ReactNode;
};

const localeFlags: Record<SupportedLocale, string> = {
  pt: 'BR',
  en: 'US',
  es: 'ES',
  it: 'IT',
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const navItems = useMemo(
    () => [
      { to: '/', label: t('common.nav.home') },
      { to: '/projects', label: t('common.nav.projects') },
      { to: '/ideas', label: t('common.nav.ideas') },
      { to: '/about', label: t('common.nav.about') },
      { to: '/curriculo', label: t('common.nav.curriculum') },
      { to: '/contact', label: t('common.nav.contact') },
    ],
    [t],
  );

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowTopButton(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition duration-300',
          scrolled ? 'border-b border-white/8 bg-[var(--surface-strong)] backdrop-blur-xl' : 'bg-transparent',
        )}
      >
        <div className="section-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.25em] text-[var(--text-primary)]">
              AP
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-primary)]">{portfolio.profile.name}</div>
              <div className="text-xs text-[var(--text-muted)]">{getLocalizedText(portfolio.profile.microTitle, i18n.language)}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm text-[var(--text-muted)] transition hover:text-[var(--text-primary)]',
                    isActive && 'bg-white/10 text-[var(--text-primary)]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
              <Globe2 className="mx-2 h-4 w-4 text-[var(--text-muted)]" />
              {SUPPORTED_LOCALES.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => i18n.changeLanguage(locale)}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-xs font-medium transition',
                    i18n.resolvedLanguage?.startsWith(locale)
                      ? 'bg-white/12 text-[var(--text-primary)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
                  )}
                  aria-label={t(`common.language.${locale}`)}
                >
                  {localeFlags[locale]}
                </button>
              ))}
            </div>

            <button type="button" onClick={toggleTheme} className="icon-button" aria-label={theme === 'dark' ? t('common.theme.light') : t('common.theme.dark')}>
              {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>

            <a
              href={portfolio.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button inline-flex items-center gap-2"
            >
              {t('common.actions.contact')}
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <button type="button" className="icon-button lg:hidden" onClick={() => setMobileOpen((state) => !state)} aria-label="Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="section-shell pb-4 lg:hidden"
            >
              <div className="glass-panel rounded-[28px] p-4">
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'rounded-2xl px-4 py-3 text-sm transition',
                          isActive ? 'bg-white/10 text-[var(--text-primary)]' : 'text-[var(--text-muted)]',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {SUPPORTED_LOCALES.map((locale) => (
                    <button
                      key={locale}
                      type="button"
                      onClick={() => i18n.changeLanguage(locale)}
                      className={cn(
                        'rounded-full border border-white/10 px-4 py-2 text-sm transition',
                        i18n.resolvedLanguage?.startsWith(locale)
                          ? 'bg-white/12 text-[var(--text-primary)]'
                          : 'text-[var(--text-muted)]',
                      )}
                    >
                      {localeFlags[locale]} · {t(`common.language.${locale}`)}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button type="button" onClick={toggleTheme} className="secondary-button inline-flex items-center gap-2">
                    {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                    {theme === 'dark' ? t('common.theme.light') : t('common.theme.dark')}
                  </button>
                  <a
                    href={portfolio.contacts.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button inline-flex items-center gap-2"
                  >
                    {t('common.actions.contact')}
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-24 sm:pt-28">{children}</main>

      <footer className="section-shell pb-10 pt-8 text-sm text-[var(--text-muted)] sm:pb-14">
        <div className="glass-panel flex flex-col gap-6 rounded-[30px] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{portfolio.profile.name}</div>
            <p className="max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
              {getLocalizedText(portfolio.profile.longBio, i18n.language)}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)] lg:justify-end">
            <div>{getLocalizedText(portfolio.profile.location, i18n.language)}</div>
            <a
              href={portfolio.contacts.email}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]"
            >
              <Mail className="h-4 w-4" />
              {portfolio.contacts.emailAddress}
            </a>
            <a
              href={portfolio.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]"
            >
              <Camera className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTopButton ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="icon-button fixed bottom-5 right-5 z-50"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
