import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';
import { generateBreadcrumbSchema, PHONE_NUMBER } from '@/lib/seo';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Atharva Cooling Point Repair Blog`,
    description: post.excerpt
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-28 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Repair Guides
          </Link>

          <article className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl space-y-6">
            
            <div className="space-y-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200/60 pb-4">
                <span className="flex items-center gap-1 font-semibold text-slate-700"><User className="w-3.5 h-3.5 text-blue-600" /> {post.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}</span>
              </div>
            </div>

            <div 
              className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t border-slate-200/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">Need immediate technician help in Surat?</span>
              <a href={`tel:${PHONE_NUMBER}`} className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-colors">
                Call Emergency Dispatch ({PHONE_NUMBER})
              </a>
            </div>

          </article>

        </div>
      </div>
    </>
  );
}
