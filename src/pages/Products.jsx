import { useMemo, useState } from 'react';
import products from '../data/products';

function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((product) => product.category)))],
    []
  );
  const filteredProducts = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory);

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Products</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Menswear collection</h1>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">Discover premium jackets, tailored essentials, footwear, and everyday accessories for men.</p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-200/40'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-300 hover:text-sky-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <article key={product.name} className="group overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50/90 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-sky-600">
                <span>{product.category}</span>
                <span>{product.price}</span>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{product.name}</h2>
              <p className="text-sm leading-6 text-slate-600">{product.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-700">
                <span className="rounded-full bg-white/80 px-4 py-2">{product.tag}</span>
                <button className="rounded-full bg-sky-600 px-4 py-2 text-white transition group-hover:bg-sky-700">Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;
