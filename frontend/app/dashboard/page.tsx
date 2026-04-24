import Footer from "@/components/footer/Footer";

export default function CustomerDashboardPage() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto bg-background text-on-surface">

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 ">

        {/* LEFT: PROFILE */}
        <div className="lg:col-span-8 bg-white rounded-[2rem] p-8 shadow relative overflow-hidden ">

          <h1 className="text-4xl font-extrabold mb-2">
            Welcome back, X
          </h1>

          <p className="text-on-surface-variant mb-8 max-w-md">
            Your culinary vitality is flourishing today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Wallet */}
            <div className="bg-emerald-200 rounded-3xl p-6">
              <p className="text-xs uppercase text-on-surface-variant mb-2">
                Wallet Balance
              </p>
              <h3 className="text-4xl font-black text-primary">100 TK</h3>
              <button className="mt-4 text-sm font-bold text-primary">
                Top Up →
              </button>
            </div>

            {/* Points */}
            <div className="bg-emerald-200 rounded-3xl p-6">
              <p className="text-xs uppercase text-on-surface-variant mb-2">
                Vitality Points
              </p>
              <h3 className="text-4xl font-black text-secondary text-red-700">2,840</h3>
              <span className="mt-2 inline-block px-2 py-1 bg-red-200 text-xs font-bold rounded-lg text-red-700">
                ELITE STATUS
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT: PROGRESS */}
        <div className="lg:col-span-4 bg-primary text-on-primary rounded-[2rem] p-8 flex flex-col justify-between bg-emerald-700">

          <div>
            <h3 className="text-2xl font-bold mb-2 text-green-200">
              Free Meal Journey
            </h3>

            <p className="text-sm mb-6 opacity-80 text-green-100">
              Earn 160 more points
            </p>

            {/* Progress */}
            <div className="w-full bg-white/20 h-3 rounded-full">
              <div className="bg-green-200 h-3 rounded-full w-[84%]"></div>
            </div>

            <p className="text-xs mt-2">840 / 1000</p>
          </div>

          <button className="mt-6 bg-white text-primary font-bold py-3 rounded-xl text-green-700">
            Rewards
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
                src="https://i.ytimg.com/vi/El1TeIgHVzw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgYs8VYOYpjxKjS2bRxIgCtC1o0w"
                className="w-28 h-28 rounded-xl object-cover"
              />

              <div className="flex-1">
                <span className="text-xs bg-green-100 px-2 py-1 rounded font-bold">
                  READY
                </span>
                <h4 className="font-bold text-lg mt-1">
                  Dim Chop
                </h4>
                <p className="text-sm text-gray-500">
                  Order #8821 • Today
                </p>
              </div>

              <div className="text-right">
                <p className="font-black text-primary">20 TK</p>
                <button className="bg-primary text-white px-4 py-2 rounded">
                  Collect
                </button>
              </div>
            </div>

            {/* PREPARING */}
            <div className="bg-white rounded-2xl p-4 flex gap-6 items-center shadow opacity-90">
              <img
                src="https://twoplaidaprons.com/wp-content/uploads/2022/08/Vietnamese-egg-rolls-on-plate-stacked-thumbnail.jpg"
                className="w-28 h-28 rounded-xl object-cover"
              />

              <div className="flex-1">
                <span className="text-xs bg-blue-100 px-2 py-1 rounded font-bold">
                  PREPARING
                </span>
                <h4 className="font-bold text-lg mt-1">
                  Dim Porota
                </h4>
                <p className="text-sm text-gray-500">
                  Order #8819 • Today
                </p>
              </div>

              <div className="text-right">
                <p className="font-black text-primary">20 TK</p>
              </div>
            </div>

            {/* HISTORY */}
            <div className="bg-emerald-200 rounded-2xl p-4 flex gap-6 items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENE15-RpIz1PL7ER6mayC-5tjtb84NCbKfg&s"
                className="w-28 h-28 rounded-xl object-cover grayscale"
              />

              <div className="flex-1">
                <span className="text-xs bg-gray-300 px-2 py-1 rounded font-bold">
                  PICKED UP
                </span>
                <h4 className="font-bold text-lg mt-1">
                  Coffee
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
          <div className="bg-emerald-200 rounded-2xl p-6">
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
          {/* <div className="bg-secondary-container/30 rounded-2xl p-6">
            <h3 className="font-bold mb-3 text-secondary">
              Alchemist Tip
            </h3>

            <p className="text-sm">
              Swap white rice for black rice to gain more points.
            </p>
          </div> */}

        </div>

      </div>
      {/* <Footer /> */}
    </main>
  );
}