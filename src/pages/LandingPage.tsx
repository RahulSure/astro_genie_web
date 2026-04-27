import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageCircle, HeartHandshake } from 'lucide-react';
import { FadeIn } from '@/shared/motion';

const features = [
  {
    icon: Sparkles,
    title: 'Interactive Kundli',
    body: 'Your natal chart as a living, tappable wheel — not a PDF from 2011.',
  },
  {
    icon: MessageCircle,
    title: 'Aura AI astrologer',
    body: 'Ask anything. Answers grounded in your exact birth chart, always labelled as AI.',
  },
  {
    icon: HeartHandshake,
    title: 'Visual Gun Milan',
    body: 'Compatibility at a glance, no dense tables or scary jargon.',
  },
];

export default function LandingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <section className="relative pb-20 pt-16 text-center sm:pt-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-starlight-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
          AI-first astrology
        </p>
        <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Your private astrologer,
          <br />
          <span className="text-gradient-gold">in your pocket.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-starlight-muted">
          Deep Vedic insight, modern design. No cluttered portals, no banner
          ads — just a calm, personal guide to your chart.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 rounded-full bg-gold-violet px-5 py-2.5 text-sm font-medium text-cosmic-950 shadow-glow-gold transition hover:scale-[1.02]"
          >
            Start your chart
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/app/home"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-starlight transition hover:bg-white/10"
          >
            Explore the app
          </Link>
        </div>
      </section>

      <section className="grid gap-4 pb-24 sm:grid-cols-3">
        {features.map(({ icon: Icon, title, body }, i) => (
          <FadeIn key={title} delay={i * 0.08}>
            <article className="glass group h-full rounded-3xl p-6 transition hover:-translate-y-0.5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Icon className="h-5 w-5 text-accent-gold-soft" aria-hidden />
              </div>
              <h3 className="font-serif text-xl text-starlight">{title}</h3>
              <p className="mt-2 text-sm text-starlight-muted">{body}</p>
            </article>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
