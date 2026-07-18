function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-600">About</p>
            <h1 className="text-3xl font-semibold text-slate-900">Crafting exceptional menswear with timeless polish.</h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">Mens Fashion delivers premium wardrobe essentials, tailored staples, and modern outerwear for the refined man.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-50/80 p-8 text-slate-900 shadow-sm">
            <h2 className="text-xl font-semibold">Built with</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>• React.js for fast page navigation</li>
              <li>• Tailwind CSS for a modern shop aesthetic</li>
              <li>• React Router DOM for smooth browsing</li>
              <li>• Component-driven structure for easy expansion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-[2rem] border border-sky-100 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">Offer a men’s fashion destination with premium styling, elevated visuals, and a streamlined shopping experience.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What you can do</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">Browse curated menswear collections, shop premium essentials, and build looks that feel polished and modern.</p>
        </div>
      </section>
    </div>
  );
}

export default About;
