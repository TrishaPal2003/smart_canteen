import Image from "next/image";
import Link from "next/link";
import { foods } from "@/data/foods";

export default function MenuPage() {
  return (
    <main className="pt-24 pb-24 md:pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

      {/* LEFT SIDE */}
      <section className="flex-1">

        <h1 className="text-4xl font-extrabold mb-2">Daily Specials</h1>
        <p className="text-gray-500 mb-10">Curated vitality for your work day.</p>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {foods.map((food) => (
            <Link key={food.id} href={`/menu/${food.id}`}>
              <div className="bg-white p-5 rounded-3xl shadow hover:shadow-lg transition cursor-pointer">

                <div className="flex gap-6">

                  <div className="w-1/3">
                    <Image
                      src={food.image}
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
                        ${food.price}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}