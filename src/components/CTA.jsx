import { ArrowRight, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 text-white">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 0, transparent 30%), radial-gradient(circle at 80% 30%, white 0, transparent 35%), radial-gradient(circle at 30% 80%, white 0, transparent 30%)'}} />
          <div className="relative p-10 sm:p-14 lg:p-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs">
                <Star size={14} /> Loved by streamers
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Start your Disawer page today</h3>
              <p className="mt-2 text-white/90">Free to try. No code. Set up in minutes. Bring your audience closer and turn good vibes into real support.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-6 py-3 shadow hover:opacity-95">
                  Create account <ArrowRight size={18} />
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-6 py-3 backdrop-blur border border-white/20 hover:bg-white/15">
                  View pricing
                </a>
              </div>
              <p className="mt-3 text-xs text-white/80">* Payment processing fees may apply depending on region.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
