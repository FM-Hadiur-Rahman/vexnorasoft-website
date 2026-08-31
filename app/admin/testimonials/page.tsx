"use client";

export default function AdminTestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Social proof management
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Testimonials
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/60">
          Manage client testimonials, ratings, company names, and review
          content.
        </p>
      </div>

      <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/55">
        Testimonials CRUD page will be connected after backend routes are ready.
      </div>
    </div>
  );
}
