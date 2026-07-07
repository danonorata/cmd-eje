import { useTranslations } from 'next-intl';

export default function Resources() {
  const t = useTranslations('resources');

  return (
    <section id="resources" className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="font-display text-2xl text-navy">{t('title')}</h2>
      <p className="mt-4 text-sm text-graphite">
        {/* Placeholder: blog corto o lead magnet descargable */}
      </p>
    </section>
  );
}
