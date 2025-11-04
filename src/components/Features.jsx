import { DollarSign, Heart, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: 'Frictionless checkout',
    desc: 'Apple Pay, Google Pay, cards, and local methods — optimized for conversions globally.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Beautiful pages',
    desc: 'Customizable creator pages that match your brand with zero design hassle.'
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Real-time alerts',
    desc: 'On‑stream overlays for tips, memberships, and messages — no delays.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Trusted & secure',
    desc: 'Bank‑grade security, anti‑fraud protection, and privacy by default.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything creators need to get support</h2>
          <p className="mt-3 text-gray-600">Turn viewers into supporters with a streamlined flow that feels delightful on any device.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-content-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="how" className="mt-20 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <span className="text-xs font-medium text-indigo-600">Step 1</span>
            <h4 className="mt-2 font-semibold">Create your page</h4>
            <p className="mt-1 text-sm text-gray-600">Claim your handle, add your branding, and connect payment methods in minutes.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <span className="text-xs font-medium text-indigo-600">Step 2</span>
            <h4 className="mt-2 font-semibold">Share the link</h4>
            <p className="mt-1 text-sm text-gray-600">Drop it in your stream description, chat, or social bios. One link, all support.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <span className="text-xs font-medium text-indigo-600">Step 3</span>
            <h4 className="mt-2 font-semibold">Get paid instantly</h4>
            <p className="mt-1 text-sm text-gray-600">Donations and messages appear instantly on your overlay and dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
