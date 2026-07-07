'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: string) {
    const rest = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${next}${rest}`);
  }

  const links = [
    { href: '#services', label: t('services') },
    { href: '#methodology', label: t('methodology') },
    { href: '#case-studies', label: t('caseStudies') },
    { href: '#resources', label: t('resources') }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-display text-lg text-navy">CMD Eje</span>

        <nav className="hidden gap-6 text-sm text-graphite md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-navy">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full bg-gray-100 p-1 text-xs">
            <button
              onClick={() => switchLocale('es')}
              className={`rounded-full px-3 py-1 ${locale === 'es' ? 'bg-navy text-white' : 'text-graphite'}`}
            >
              ES
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`rounded-full px-3 py-1 ${locale === 'en' ? 'bg-navy text-white' : 'text-graphite'}`}
            >
              EN
            </button>
          </div>
          <a
            href="#cta-final"
            className="rounded-md bg-sky px-4 py-2 text-sm font-medium text-navy"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
