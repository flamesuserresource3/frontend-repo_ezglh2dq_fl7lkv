import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-content-center rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 text-white shadow-lg shadow-indigo-500/30">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-lg tracking-tight">disawer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how" className="text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#cta" className="text-gray-600 hover:text-gray-900">Get Started</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900">Log in</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">Sign up</a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-black/5">
            <div className="flex flex-col gap-3">
              <a href="#features" className="px-2 py-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>Features</a>
              <a href="#how" className="px-2 py-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>How it works</a>
              <a href="#pricing" className="px-2 py-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>Pricing</a>
              <a href="#cta" className="px-2 py-2 rounded-lg bg-gray-900 text-white text-center" onClick={() => setOpen(false)}>Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
