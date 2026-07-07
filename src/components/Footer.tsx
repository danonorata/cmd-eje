import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 px-6 py-8 text-center text-xs text-graphite">
      <p>
        © {year} CMD Eje. {t('rights')}
      </p>
      <a href="/privacy" className="mt-1 inline-block underline">
        {t('privacy')}
      </a>
    </footer>
  );
}
