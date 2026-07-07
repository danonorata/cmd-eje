import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as { name: string; description: string }[];

  return (
    <section id="services" className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-2xl text-navy">{t('title')}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="font-medium text-navy">{item.name}</h3>
              <p className="mt-2 text-sm text-graphite">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
