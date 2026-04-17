import Footer from "@/components/footer/Footer";

export default function CustomerTrackingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">

      {/* SIDEBAR */}
      <div className="flex flex-1">
      <aside className="
        hidden lg:flex
        h-screen w-64 left-0 top-0 z-40
        bg-emerald-50 dark:bg-slate-950
        border-r border-emerald-100 dark:border-emerald-900/30
        flex-col py-4 font-medium text-sm
      ">

        {/* HEADER */}
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">restaurant</span>
            </div>

            <div>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                Terminal 4 Main
              </p>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">

          {[
            ["pending_actions", "Live Orders"],
            ["restaurant_menu", "Menu Editor"],
            ["inventory_2", "Inventory"],
            ["badge", "Staff Schedule"],
            ["query_stats", "Analytics"],
          ].map(([icon, label]) => (
            <a
              key={label}
              className="text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-lg mx-2 flex items-center gap-3 px-4 py-3 transition"
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="px-4 mt-auto flex flex-col gap-2">

          <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">emergency</span>
            Emergency Stop
          </button>

          <a className="px-4 py-3 text-emerald-700">Support</a>
          <a className="px-4 py-3 text-emerald-700">Log Out</a>
        </div>
      </aside>

      {/* MAIN */}
      <main className="
        flex-1
        lg:ml-64
        w-full
        min-h-screen
        p-4 sm:p-6 lg:p-8
      ">

        {/* METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border-l-4 border-primary">
            <p className="text-xs uppercase text-gray-500">Orders Today</p>
            <h3 className="text-3xl sm:text-4xl font-black">142</h3>
            <span className="text-green-600 text-sm">+12%</span>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border-l-4 border-blue-400">
            <p className="text-xs uppercase text-gray-500">Avg Prep Time</p>
            <h3 className="text-3xl sm:text-4xl font-black">8.4 min</h3>
            <span className="text-green-600 text-sm">-1.2m</span>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border-l-4 border-pink-500">
            <p className="text-xs uppercase text-gray-500">Active Staff</p>
            <h3 className="text-3xl sm:text-4xl font-black">18</h3>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

          {/* LEFT */}
          <div className="xl:col-span-2">
            <h2 className="text-xl sm:text-2xl font-black mb-4 lg:mb-6">
              Live Queue
            </h2>

            <div className="space-y-4">

              {[
                ["#4208", "Marcus Thorne", "Preparing", "blue"],
                ["#4209", "Elara Vance", "Pending", "gray"],
                ["#4205", "Julianne Moore", "Ready", "emerald"],
              ].map(([id, name, status, color]) => (
                <div
                  key={id}
                  className={`bg-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-l-8`}
                >
                  <div className="min-w-[80px] text-left sm:text-center">
                    <p className="text-xs text-gray-500">Order</p>
                    <p className="font-black">{id}</p>
                  </div>

                  <div className="flex-1">
                    <p className="font-bold">{name}</p>
                    <p className="text-xs text-gray-500">
                      12:42 PM • Est time
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold w-fit">
                    {status}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-emerald-600 text-white p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-black">
                Julianne Moore
              </h3>
              <p className="text-sm opacity-80">Biomedical Sciences</p>
            </div>

            <div className="p-5 sm:p-6 space-y-6">

              <div>
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Items
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Superfood Bowl</span>
                    <span>$12.50</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Orange Juice</span>
                    <span>$4.50</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-3 rounded-xl">
                <p className="text-xs font-bold text-red-600">Allergies</p>
                <p className="text-sm">Peanuts, Shellfish</p>
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-bold">
                Mark as Ready
              </button>

            </div>
          </div>

        </div>
      </main>
      </div>

      {/* FAB */}
      <button className="
        fixed bottom-6 right-6
        w-14 h-14 sm:w-16 sm:h-16
        bg-pink-500 text-white rounded-full shadow-xl
        text-2xl sm:text-3xl
      ">
        +
      </button>
      {/* <Footer /> */}
    </div>
    
  );
}