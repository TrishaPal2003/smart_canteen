import Image from "next/image";
import Link from "next/link";
import { foods } from "@/data/foods";
import Footer from "@/components/footer/Footer";

export default function MenuPage() {
  return (
    <main className="pt-24 pb-24 md:pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

      {/* LEFT SIDE */}
      <section className="flex-1">

        {/* HEADER */}
        <h1 className="text-4xl font-extrabold mb-2">
          Daily Specials
        </h1>
        <p className="text-gray-500 mb-6">
          Curated vitality for your work day.
        </p>

        {/* FILTERS (INSERTED HERE) */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium shadow-lg whitespace-nowrap">
            All Items
          </button>

          <button className="bg-surface-container-highest text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap">
            Breakfast
          </button>

          <button className="bg-surface-container-highest text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap">
            Lunch
          </button>

          <button className="bg-surface-container-highest text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap">
            Snacks
          </button>

          <button className="bg-surface-container-highest text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap">
            Drinks
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {foods.map((food) => (
            <Link key={food.id} href={`/menu/${food.id}`}>
              <div className="bg-white p-5 rounded-3xl shadow hover:shadow-lg transition cursor-pointer">

                <div className="flex gap-6">

                  <div className="w-1/3">
                    <Image
                      src={food.image} unoptimized
                      alt={food.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-2xl"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{food.name}</h3>
                      <p className="text-sm text-gray-500">
                        {food.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold">
                        {food.price} TK
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>
          {/* <Footer /> */}
    </main>
  );
}