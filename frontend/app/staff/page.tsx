
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation, faHeadset, faRightFromBracket,faUtensils, faListCheck, faBoxesStacked } from "@fortawesome/free-solid-svg-icons"


export default function CustomerTrackingPage() {

  const navItems = [
  { label: "Live Orders", icon: faListCheck },
  { label: "Menu Editor", icon: faUtensils },
  { label: "Inventory", icon: faBoxesStacked },
  
];
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
              <FontAwesomeIcon icon={faUtensils} className="text-[#006944]" />
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

        {navItems.map(({ icon, label }) => (
          <a
            key={label}
            className="text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-lg mx-2 flex items-center gap-3 px-4 py-3 transition"
          >
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
          </a>
        ))}

      </nav>

        {/* FOOTER */}
        <div className="px-4 mt-auto flex flex-col gap-2">
{/* 
        <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          Emergency Stop
        </button> */}

        <button className="w-full bg-green-800 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faHeadset} />
          Support
        </button>

        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
        
          <FontAwesomeIcon icon={faRightFromBracket} />
          Log Out
        
        </button> 

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
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-black text-on-surface">Live Queue</h2>

    <div className="flex gap-2">
      <button className="bg-slate-400 px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-variant transition-colors">
        All
      </button>

      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold text-on-surface shadow-sm border border-emerald-50">
        Preparing (8)
      </button>

      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold text-on-surface shadow-sm border border-emerald-50">
        Ready (3)
      </button>
    </div>
  </div>

  <div className="bg-surface-container-low rounded-3xl p-4 overflow-hidden">
    <div className="space-y-4">

      {/* Order Card 1 */}
      <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-6 border-l-8 border-tertiary-container border-blue-400">
        <div className="text-center min-w-[80px]">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase">Order ID</p>
          <p className="text-lg font-black text-primary">#4208</p>
        </div>

        <div className="flex-1 ">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-on-surface">Chotpoti</h4>
            <span className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">
              Staff
            </span>
          </div>

          <div className="flex gap-4 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">schedule</span>
              12:42 PM
            </span>

            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">timer</span>
              Est: 12:55 PM
            </span>
          </div>
        </div>

        <span className="flex items-center gap-2 px-3 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold animate-pulse">
          <span className="w-2 h-2 bg-on-tertiary-container rounded-full"></span>
          Preparing
        </span>

        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined">check</span>
          </button>

          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>

      {/* Order Card 2 */}
      <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-6 border-l-8 border-blue-400">
        <div className="text-center min-w-[80px]">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase">Order ID</p>
          <p className="text-lg font-black text-primary">#4209</p>
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-on-surface">porota</h4>
          <div className="flex gap-4 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">schedule</span>
              12:45 PM
            </span>
          </div>
        </div>

        <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-bold">
          Pending
        </span>

        <button className="px-4 py-2 bg-primary text-on-primary rounded-full text-xs font-bold">
          Mark as Preparing
        </button>
      </div>

      {/* Order Card 3 */}
      <div className="bg-emerald-50 p-5 rounded-2xl shadow-md flex items-center gap-6 border-2 border-primary ring-4 ring-primary/10">
        <div className="text-center min-w-[80px]">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase">Order ID</p>
          <p className="text-lg font-black text-primary">#4205</p>
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-on-surface">Khichuri</h4>
        </div>

        <span className="px-3 py-1.5 bg-primary-container rounded-full text-xs font-bold">
          Ready
        </span>

        <button className="px-4 py-2 bg-secondary text-white rounded-full text-xs font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-xs">sms</span>
          Notify
        </button>
      </div>

    </div>
  </div>
</div>
          {/* RIGHT PANEL */}
          {/* <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

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
          </div> */}

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