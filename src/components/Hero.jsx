import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-700">
              <Zap size={14} /> Instant tips for creators
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">
              Fuel your stream with real‑time support
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Disawer makes it effortless for your audience to send donations and messages that pop up live on stream. Beautiful pages, instant alerts, and a checkout that converts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white px-6 py-3 shadow-lg shadow-gray-900/10 hover:bg-gray-800 transition">
                Start free <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-6 py-3 border hover:bg-gray-50">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield size={16} /> Secure payments</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> Live overlays</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> 0% platform fee*</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-xl p-4">
              <div className="rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 grid place-content-center">💜</div>
                    <div>
                      <p className="font-semibold">@yourstream</p>
                      <p className="text-xs text-white/60">Streaming now</p>
                    </div>
                  </div>
                  <div className="text-xs text-white/60">Disawer Alerts</div>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 grid place-content-center">💎</div>
                    <div>
                      <p className="text-sm"><span className="font-semibold">Nova</span> tipped <span className="font-semibold">$10</span></p>
                      <p className="text-xs text-white/60">“Love the content, keep it up!”</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="h-8 w-8 rounded-full bg-rose-500/20 grid place-content-center">🌟</div>
                    <div>
                      <p className="text-sm"><span className="font-semibold">Aiko</span> became a member</p>
                      <p className="text-xs text-white/60">Tier: Supporter</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-500/20 grid place-content-center">🎁</div>
                    <div>
                      <p className="text-sm"><span className="font-semibold">Raf</span> sent a message</p>
                      <p className="text-xs text-white/60">“First time here, love the vibes!”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="rounded-lg border p-3">
                  <p className="text-xs text-gray-500">Today</p>
                  <p className="text-lg font-semibold">$264</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs text-gray-500">Members</p>
                  <p className="text-lg font-semibold">128</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs text-gray-500">Messages</p>
                  <p className="text-lg font-semibold">54</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
