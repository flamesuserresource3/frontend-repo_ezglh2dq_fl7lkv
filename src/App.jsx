import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Header />
      <Hero />
      <Features />
      <section id="pricing" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, creator‑friendly pricing</h2>
            <p className="mt-3 text-gray-600">Start free, upgrade when you want more customization and perks.</p>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-8 bg-white">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-gray-600">Everything to start accepting tips.</p>
              <p className="mt-6 text-3xl font-extrabold">Free</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>• Beautiful creator page</li>
                <li>• Real‑time alerts</li>
                <li>• Basic customization</li>
              </ul>
              <a href="#cta" className="mt-8 inline-block w-full text-center rounded-xl border px-4 py-2 hover:bg-gray-50">Get started</a>
            </div>
            <div className="rounded-2xl border p-8 bg-gray-900 text-white ring-2 ring-indigo-500">
              <div className="inline-block text-xs rounded-full bg-white/10 px-2 py-1 mb-2">Most popular</div>
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-white/80">Branding control and advanced tools.</p>
              <p className="mt-6 text-3xl font-extrabold">$9<span className="text-base font-medium">/mo</span></p>
              <ul className="mt-6 space-y-3 text-sm text-white/90">
                <li>• Custom domain</li>
                <li>• Priority overlays</li>
                <li>• Members & tiers</li>
                <li>• Analytics</li>
              </ul>
              <a href="#cta" className="mt-8 inline-block w-full text-center rounded-xl bg-white text-gray-900 px-4 py-2 hover:opacity-95">Upgrade</a>
            </div>
            <div className="rounded-2xl border p-8 bg-white">
              <h3 className="text-lg font-semibold">Teams</h3>
              <p className="mt-1 text-sm text-gray-600">For studios and group channels.</p>
              <p className="mt-6 text-3xl font-extrabold">$29<span className="text-base font-medium">/mo</span></p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>• Multiple admins</li>
                <li>• Revenue split</li>
                <li>• API access</li>
              </ul>
              <a href="#cta" className="mt-8 inline-block w-full text-center rounded-xl border px-4 py-2 hover:bg-gray-50">Contact sales</a>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Disawer. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
