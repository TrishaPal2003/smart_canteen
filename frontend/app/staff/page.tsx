export default function CustomerTrackingPage() {
  return (
    <div className="flex">
      
      {/* SideNavBar */}
      <aside className="h-screen w-50 fixed left-0 top-0 z-40 bg-emerald-50 dark:bg-slate-950 border-r border-emerald-100 dark:border-emerald-900/30 flex flex-col py-4 font-medium text-sm">
        
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                restaurant
              </span>
            </div>

            <div>
              {/* <h2 className="font-extrabold text-emerald-900 dark:text-emerald-100">
                Vitality Kitchen
              </h2> */}
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                Terminal 4 Main
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-2">
          <a className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-lg mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">pending_actions</span>
            <span>Live Orders</span>
          </a>

          <a className="text-emerald-700 mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span>Menu Editor</span>
          </a>

          <a className="text-emerald-700 mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">inventory_2</span>
            <span>Inventory</span>
          </a>

          <a className="text-emerald-700 mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">badge</span>
            <span>Staff Schedule</span>
          </a>

          <a className="text-emerald-700 mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">query_stats</span>
            <span>Analytics</span>
          </a>
        </nav>

        <div className="px-4 mt-auto flex flex-col gap-1">
          <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined">emergency</span>
            Emergency Stop
          </button>

          <a className="text-emerald-700 mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">help</span>
            Support
          </a>

          <a className="text-emerald-700 mx-2 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined">logout</span>
            Log Out
          </a>
        </div>
      </aside>

      {/* MAIN */}
      <main className="ml-64 min-h-screen w-full bg-background text-on-surface">
        <div className="p-8">

          {/* METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
              <p className="text-xs uppercase text-gray-500">Orders Today</p>
              <h3 className="text-4xl font-black">142</h3>
              <span className="text-green-600 text-sm">+12%</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-400">
              <p className="text-xs uppercase text-gray-500">Avg Prep Time</p>
              <h3 className="text-4xl font-black">8.4 min</h3>
              <span className="text-green-600 text-sm">-1.2m</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-pink-500">
              <p className="text-xs uppercase text-gray-500">Active Staff</p>
              <h3 className="text-4xl font-black">18</h3>
            </div>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* LEFT */}
            <div className="xl:col-span-2">
              <h2 className="text-2xl font-black mb-6">Live Queue</h2>

              <div className="space-y-4">

                <div className="bg-white p-5 rounded-2xl flex items-center gap-6 border-l-8 border-blue-300">
                  <div className="min-w-[80px] text-center">
                    <p className="text-xs text-gray-500">Order ID</p>
                    <p className="font-black">#4208</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Marcus Thorne</p>
                    <p className="text-xs text-gray-500">12:42 PM • Est 12:55 PM</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-xs font-bold">
                    Preparing
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl flex items-center gap-6 border-l-8 border-gray-400">
                  <div className="min-w-[80px] text-center">
                    <p className="text-xs text-gray-500">Order ID</p>
                    <p className="font-black">#4209</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Elara Vance</p>
                    <p className="text-xs text-gray-500">12:45 PM • Est 1:00 PM</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold">
                    Pending
                  </span>
                </div>

                <div className="bg-emerald-50 p-5 rounded-2xl flex items-center gap-6 border-2 border-emerald-400">
                  <div className="min-w-[80px] text-center">
                    <p className="text-xs text-gray-500">Order ID</p>
                    <p className="font-black">#4205</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Julianne Moore</p>
                    <p className="text-xs text-gray-500">12:30 PM • Ready</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-200 text-xs font-bold">
                    Ready
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

              <div className="bg-emerald-600 text-white p-6">
                <h3 className="text-xl font-black">Julianne Moore</h3>
                <p className="text-sm opacity-80">Biomedical Sciences</p>
              </div>

              <div className="p-6 space-y-6">

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-2">Items</p>

                  <div className="space-y-3">
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
        </div>

        {/* FAB */}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-pink-500 text-white rounded-full shadow-xl text-3xl">
          +
        </button>

      </main>
    </div>
  );
}