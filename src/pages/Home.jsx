import { Link } from 'react-router-dom';

const features = [
  { title: 'Tailored style', description: 'Refined menswear essentials with sharp fit and premium fabrics.' },
  { title: 'Everyday elegance', description: 'Polished pieces for work, weekend, and night out looks.' },
  { title: 'Modern minimalism', description: 'Clean silhouettes with bold details for the contemporary man.' },
];

function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.18)] sm:p-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Welcome to Mens Fashion</span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Modern men’s fashion with sharp polish and timeless detail.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">Explore premium menswear collections, elegant essentials, and bold wardrobe staples for the modern man.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300">Contact Us</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Featured</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Seasonal staples</h2>
                <p className="mt-3 text-sm text-slate-600">Elevated classics for the wardrobe foundation every man needs.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 text-slate-900 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-700">Style Tip</p>
                <h2 className="mt-4 text-xl font-semibold">Layer neutral pieces with contrast accents.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Tailored Fits',
            description: 'Sharp suiting and smart separates for professional style.',
          },
          {
            title: 'Modern Outerwear',
            description: 'Seasonal jackets and coats with a refined edge.',
          },
          {
            title: 'Night Out',
            description: 'Statement looks designed to make an impression after dark.',
          },
        ].map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

    </div>
  );
}

export default Home;
