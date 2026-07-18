function Contact() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Contact</p>
          <h1 className="text-3xl font-semibold text-slate-900">Get in touch with Click and Collect</h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">Questions about products, availability, or new arrivals? Drop a message and get help finding the perfect items for your collection.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Reach out</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">Email: amaan.ahme3@gmail.com</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">Phone: 9875578184</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Contact form</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea className="mt-2 h-28 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100" placeholder="Write us a message" />
            </div>
            <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
