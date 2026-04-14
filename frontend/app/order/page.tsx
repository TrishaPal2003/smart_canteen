export default function OrderPage() {
// import Footer from '../../components/footer/Footer';
  return (
    <main className="flex-grow  pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT COLUMN */}
        <section className="lg:col-span-8 space-y-8">

          {/* HEADER */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-[#003629]">
              Today's <span className="text-[#006944] italic">Alchemical</span> Selection
            </h1>
            <p className="text-[#306554]">
              Craft your perfect vitality meal from our chef-curated daily menu.
            </p>
          </div>

          {/* MENU GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ITEM 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">

              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWuY3fWzExUqyCjned4M4KaGBqUfehso1DQTYS3i3HGRlQyfG_5ycJJ0QvzRl5ZPx4SKSp__iMlMbEprsCKnzvThmxsojllzOifS7r4Y30im3JXf8W_cJvzbMKzDMxWy2Tb6IpCAfQL03IGuDWWE56KFVJprXTyqund2JYZETid8bMNiTwJ9q_cuRY-v3_Rjtob-lIPXCyMcexiKduqHoJz9QAIIiJAvwOVBUfVReCzPpVeGVP6dg6zyyvL-nP7gjnzvQ7WMq5kZ8"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-[#006944] px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">$12.50</span>
                </div>
              </div>

              <div className="p-6">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Chlorophyll Harvest Bowl</h3>

                  <div className="text-xs bg-[#ffc4b3]/30 px-2 py-1 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span>
                    420 Cal
                  </div>
                </div>

                <p className="text-sm text-[#306554] mb-4">
                  Lush kale, quinoa, roasted sweet potatoes, citrus-tahini dressing.
                </p>

                <button className="w-full py-3 rounded-full bg-[#a9f1d6] hover:bg-[#006944] hover:text-white font-bold transition-all flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined">add</span>
                  Add to Order
                </button>

              </div>
            </div>

            {/* ITEM 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">

              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdoI3Y26MrfzzV80in2DL-BsN-cHoG8XgvGjXPPQypd8XKnIfqW4nexjziB7TnG-NvLTkSJNNLmEw_3kUbh_tJde8C2lY7d3qofBWmoLp6AJ3ivNYTHa4ILFHUUGS1sSLgduFr2CW9VDBbmgBxw_P6PY1k5Y414FLF3XmIcuMcu1eZTwfk55oJbih8ssWW3IQHX3KoM45anMyiMtNbnGNKOV0M5hkHpOL3YFNS5vCPB6U5CpcVjo4pg7yiQoJ2lnwutAME4qS3hPYI"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-[#006944] px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">$15.00</span>
                </div>
              </div>

              <div className="p-6">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Omega Vitality Salmon</h3>

                  <div className="text-xs bg-[#ffc4b3]/30 px-2 py-1 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span>
                    580 Cal
                  </div>
                </div>

                <p className="text-sm text-[#306554] mb-4">
                  Pan-seared salmon with spinach and cherry tomatoes.
                </p>

                <button className="w-full py-3 rounded-full bg-[#a9f1d6] hover:bg-[#006944] hover:text-white font-bold transition-all flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined">add</span>
                  Add to Order
                </button>

              </div>
            </div>

          </div>

        </section>

        {/* RIGHT COLUMN - ORDER FORM */}
        <aside className="lg:col-span-4 space-y-6">

          <div className="bg-[#b3f6dc] p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
              {/* <span className="material-symbols-outlined text-[#006944]">
                shopping_basket
              </span> */}
              Order Details
            </h2>

            <form className="space-y-6">

              {/* ID */}
              <div>
                <label className="text-sm font-bold">Student / Teacher ID</label>
                <input
                  type="text"
                  placeholder="STU-98234"
                  className="w-full mt-2 p-3 border rounded-xl"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-bold">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+880..."
                  className="w-full mt-2 p-3 border rounded-xl"
                  required
                />
              </div>

              {/* PAYMENT */}
              <div>
                <label className="text-sm font-bold">Payment Method</label>

                <div className="grid grid-cols-3 gap-2 mt-3">

                  {["wallet", "cash", "online"].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="payment" className="hidden peer" />
                      <div className="p-3 text-center border bg-white rounded-xl peer-checked:border-[#006944] peer-checked:bg-[#a9f1d6]">
                        <span className="text-xs font-bold uppercase">{type}</span>
                      </div>
                    </label>
                  ))}

                </div>
              </div>

              {/* SUMMARY */}
              <div className="border-t pt-4 space-y-2">

                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>$21.50</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>VAT (5%)</span>
                  <span>$1.08</span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-[#006944]">$22.58</span>
                </div>

              </div>

              {/* BUTTON */}
              <button className="w-full py-4 bg-gradient-to-r from-[#006944] to-[#00A86B] text-white rounded-full font-bold">
              Place Order
            </button>

            </form>
          </div>

          {/* INFO CARD */}
          <div className="bg-[#70b5ff]/20 p-6 rounded-2xl">
            <h4 className="font-bold text-[#005e9f]">Freshness Guarantee</h4>
            <p className="text-sm text-[#306554]">
              Orders are prepared 5 minutes before pickup time.
            </p>
          </div>

        </aside>

      </div>
      {/* </Footer> */}
    </main>
  );
}