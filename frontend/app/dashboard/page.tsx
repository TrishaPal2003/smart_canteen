export default function CustomerDashboardPage() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto bg-background text-on-surface">

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

        {/* LEFT: PROFILE */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 shadow relative overflow-hidden">

          <h1 className="text-4xl font-extrabold mb-2">
            Welcome back, Julian
          </h1>

          <p className="text-on-surface-variant mb-8 max-w-md">
            Your culinary vitality is flourishing today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Wallet */}
            <div className="bg-surface-container-low rounded-3xl p-6">
              <p className="text-xs uppercase text-on-surface-variant mb-2">
                Wallet Balance
              </p>
              <h3 className="text-4xl font-black text-primary">$142.50</h3>
              <button className="mt-4 text-sm font-bold text-primary">
                Top Up →
              </button>
            </div>

            {/* Points */}
            <div className="bg-surface-container-low rounded-3xl p-6">
              <p className="text-xs uppercase text-on-surface-variant mb-2">
                Vitality Points
              </p>
              <h3 className="text-4xl font-black text-secondary">2,840</h3>
              <span className="mt-2 inline-block px-2 py-1 bg-secondary-container text-xs font-bold rounded">
                ELITE STATUS
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT: PROGRESS */}
        <div className="lg:col-span-4 bg-primary text-on-primary rounded-[2rem] p-8 flex flex-col justify-between">

          <div>
            <h3 className="text-2xl font-bold mb-2">
              Free Meal Journey
            </h3>

            <p className="text-sm mb-6 opacity-80">
              Earn 160 more points
            </p>

            {/* Progress */}
            <div className="w-full bg-white/20 h-3 rounded-full">
              <div className="bg-primary-container h-3 rounded-full w-[84%]"></div>
            </div>

            <p className="text-xs mt-2">840 / 1000</p>
          </div>

          <button className="mt-6 bg-white text-primary font-bold py-3 rounded-xl">
            Redeem Rewards
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT: ORDERS */}
        <div className="lg:col-span-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Culinary Journeys
          </h2>

          <div className="space-y-6">

            {/* READY */}
            <div className="bg-white rounded-2xl p-4 flex gap-6 items-center shadow">
              <img
                src="https://via.placeholder.com/120"
                className="w-28 h-28 rounded-xl object-cover"
              />

              <div className="flex-1">
                <span className="text-xs bg-green-100 px-2 py-1 rounded font-bold">
                  READY
                </span>
                <h4 className="font-bold text-lg mt-1">
                  Zenith Forest Bowl
                </h4>
                <p className="text-sm text-gray-500">
                  Order #8821 • Today
                </p>
              </div>

              <div className="text-right">
                <p className="font-black text-primary">$14.50</p>
                <button className="bg-primary text-white px-4 py-2 rounded">
                  Collect
                </button>
              </div>
            </div>

            {/* PREPARING */}
            <div className="bg-white rounded-2xl p-4 flex gap-6 items-center shadow opacity-90">
              <img
                src="https://via.placeholder.com/120"
                className="w-28 h-28 rounded-xl object-cover"
              />

              <div className="flex-1">
                <span className="text-xs bg-blue-100 px-2 py-1 rounded font-bold">
                  PREPARING
                </span>
                <h4 className="font-bold text-lg mt-1">
                  Obsidian Berry Tonic
                </h4>
                <p className="text-sm text-gray-500">
                  Order #8819 • Today
                </p>
              </div>

              <div className="text-right">
                <p className="font-black text-primary">$8.20</p>
              </div>
            </div>

            {/* HISTORY */}
            <div className="bg-gray-100 rounded-2xl p-4 flex gap-6 items-center">
              <img
                src="https://via.placeholder.com/120"
                className="w-28 h-28 rounded-xl object-cover grayscale"
              />

              <div className="flex-1">
                <span className="text-xs bg-gray-300 px-2 py-1 rounded font-bold">
                  PICKED UP
                </span>
                <h4 className="font-bold text-lg mt-1">
                  Neo Margarita
                </h4>
              </div>

              <button className="text-sm border-b">
                Rate
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT: ALERTS */}
        <div className="lg:col-span-4 space-y-6">

          {/* ALERTS */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold mb-4">Smart Alerts</h3>

            <div className="flex justify-between mb-4">
              <span>Order SMS</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between mb-4">
              <span>Milestones</span>
              <input type="checkbox" />
            </div>

            <div className="flex justify-between">
              <span>Daily Specials</span>
              <input type="checkbox" defaultChecked />
            </div>
          </div>

          {/* TIP */}
          <div className="bg-secondary-container/30 rounded-2xl p-6">
            <h3 className="font-bold mb-3 text-secondary">
              Alchemist Tip
            </h3>

            <p className="text-sm">
              Swap white rice for black rice to gain more points.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}