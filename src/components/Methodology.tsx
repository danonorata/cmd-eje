import { useTranslations } from 'next-intl';

export default function Methodology() {
  const t = useTranslations('methodology');
  const steps = t.raw('steps') as string[];

  return (
    <section id="methodology" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center font-display text-2xl text-navy">{t('title')}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-graphite">{t('body')}</p>

      <ol className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step} className="rounded-xl border border-black/5 p-5 text-center">
            <span className="text-xs font-medium text-sky">0{i + 1}</span>
            <p className="mt-2 text-sm text-navy">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
