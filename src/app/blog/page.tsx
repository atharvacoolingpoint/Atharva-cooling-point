import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';

export const metadata = {
  title: 'Home Appliance Repair Guides & Tips | Atharva Cooling Point Blog',
  description: 'Expert troubleshooting guides for washing machines, ACs, microwaves, refrigerators, and maintenance tips for homeowners in Surat.',
};

export default function BlogIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold text-blue-600 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Repair Guides & Knowledge Base
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Surat Appliance Repair <span className="gradient-text">Blog & Guides</span>
            </h1>
            <p className="text-slate-600 text-base">
              Learn how to troubleshoot common TV and refrigerator issues and keep your appliances working efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.slug} className="glass-panel p-8 rounded-3xl border border-white/90 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full font-bold">{post.category}</span>
                    <span>{post.readTime} • {post.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blue-600" /> {post.author}
                  </span>

                  <Link href={`/blog/${post.slug}`} className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1 transition-all">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
