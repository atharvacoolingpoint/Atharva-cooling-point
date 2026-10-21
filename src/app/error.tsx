'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-slate-50">
      <div className="glass-panel p-8 rounded-3xl border border-white/90 shadow-2xl max-w-md space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">Something went wrong</h2>
        <p className="text-xs text-slate-600">
          An error occurred while loading this page. Click below to try again or return home.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-2xl glass-pill font-bold text-slate-800 text-xs hover:bg-white transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
