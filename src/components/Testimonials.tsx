import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section id="case-studies" className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-2xl text-navy">{t('title')}</h2>
        <p className="mt-4 text-sm text-graphite">
          {/* Placeholder: reemplazar con testimonios reales del cliente */}
        </p>
      </div>
    </section>
  );
}
