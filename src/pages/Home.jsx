import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import { formatToINR } from '../utils/price';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then((res) => {
        if (mounted) setProducts(res);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError(err.message || 'Failed to load products');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.18)]">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Welcome to Click and Collect Store</span>
          <h1 className="text-3xl font-semibold text-slate-900">Our Products</h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">Explore the latest products available at Click and Collect Store. Browse our collection and discover what suits your style best.</p>
        </div>
      </section>

      {loading && <p className="text-sm text-slate-600">Loading products...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.name} className="group overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50/90 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/900x560?text=No+Image';
              }}
            />
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-sky-600">
                <span>{p.category}</span>
                <span>{formatToINR(p.price)}</span>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{p.name}</h2>
              <p className="text-sm leading-6 text-slate-600">{p.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-700">
                <span className="rounded-full bg-white/80 px-4 py-2">{p.tag}</span>
                <Link to="/products" className="rounded-full bg-sky-600 px-4 py-2 text-white transition group-hover:bg-sky-700">View</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;
