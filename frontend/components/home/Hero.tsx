export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#b3f6dc] px-4 py-2 rounded-full">
          <span className="material-symbols-outlined text-[#006944]">
            restaurant
          </span>
          <span className="text-sm font-semibold">
            Elevating Your Daily Fuel
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-headline">
          Where <span className="text-gradient">Culinary Art</span> Meets Smart Living.
        </h1>

        <p className="text-lg text-[#306554] max-w-lg">
          Skip the queue, savor the flavor. Fresh ingredients, lightning-fast pick-up.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#006944] text-white px-8 py-4 rounded-full font-bold">
            Order Now
          </button>
          <button className="bg-[#a9f1d6] px-8 py-4 rounded-full font-bold">
            View Menu
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative">
        <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
          <img
            src="/images/hero6.webp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}