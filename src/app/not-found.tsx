import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-slate-50">
      <div className="glass-panel p-8 rounded-3xl border border-white/90 shadow-2xl max-w-md space-y-4">
        <span className="text-4xl font-extrabold text-blue-600 block">404</span>
        <h2 className="text-2xl font-extrabold text-slate-900">Page Not Found</h2>
        <p className="text-xs text-slate-600">
          The page or area you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
