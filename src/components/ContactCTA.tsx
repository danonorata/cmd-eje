import { useTranslations } from 'next-intl';

export default function ContactCTA() {
  const t = useTranslations('ctaFinal');

  return (
    <section id="cta-final" className="bg-navy px-6 py-16 text-center">
      <h2 className="font-display text-2xl text-white">{t('title')}</h2>

      {/* Formulario servido por Netlify Forms / Formspree — ver .env.example */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="mx-auto mt-8 flex max-w-md flex-col gap-3"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="name"
          required
          placeholder="Nombre / Name"
          className="rounded-md px-4 py-3 text-sm"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-md px-4 py-3 text-sm"
        />
        <textarea
          name="message"
          rows={3}
          placeholder="Mensaje / Message"
          className="rounded-md px-4 py-3 text-sm"
        />
        <button
          type="submit"
          className="rounded-md bg-sky px-6 py-3 text-sm font-medium text-navy"
        >
          {t('cta')}
        </button>
      </form>
    </section>
  );
}
