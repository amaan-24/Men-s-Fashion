function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-600">About</p>
            <h1 className="text-3xl font-semibold text-slate-900">Welcome to Click and Collect Store.</h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Click and Collect Store brings you premium products with timeless style, modern essentials, and a smooth shopping experience.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-50/80 p-8 text-slate-900 shadow-sm">
            <h2 className="text-xl font-semibold">Why shop with us</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>• Curated products for every occasion</li>
              <li>• Premium quality and polished designs</li>
              <li>• Simple browsing and easy online shopping</li>
              <li>• A trusted Click and Collect Store experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-[2rem] border border-sky-100 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            To become the go-to Click and Collect Store for men who want stylish, high-quality fashion with confidence and ease.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What you can do</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Explore curated collections, discover premium essentials, and shop with confidence at Click and Collect Store.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
