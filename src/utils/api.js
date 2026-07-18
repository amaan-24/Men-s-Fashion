export async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=20');
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  let prods = data.products.map((p) => ({
    name: p.title,
    category: p.category || 'Uncategorized',
    price: `$${p.price}`,
    tag: p.stock && p.stock < 10 ? 'Limited' : 'Popular',
    image: Array.isArray(p.images) && p.images.length ? p.images[0] : '',
    description: p.description || '',
  }));

  // Remove any beef products (case-insensitive)
  prods = prods.filter((p) => !/beef/i.test(p.name));

  // Ensure Mutton Steak is present
  if (!prods.some((p) => /mutton/i.test(p.name))) {
    prods.unshift({
      name: 'Mutton Steak',
      category: 'Food',
      price: '$12',
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1604908177522-1f8a5e6d0b2b?auto=format&fit=crop&w=900&q=80',
      description: 'Succulent mutton steak seasoned and grilled to perfection.',
    });
  }

  return prods;
}
