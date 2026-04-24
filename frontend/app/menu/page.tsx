"use client";
import Image from "next/image";
import Link from "next/link";
import { foods } from "@/data/foods";
import { useState } from "react";

export default function MenuPage() {

const [selectedCategory, setSelectedCategory] = useState("all");
const filteredFoods =
  selectedCategory === "all"
    ? foods
    : foods.filter((food) => food.category === selectedCategory);

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

        {/* FILTERS */}
<div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
  <button
    onClick={() => setSelectedCategory("all")}
    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
      selectedCategory === "all"
        ? "bg-[#74e2ba] text-green-900"
        : "bg-white border text-gray-600 hover:bg-gray-100"
    }`}
  >
    All Items
  </button>

  <button
    onClick={() => setSelectedCategory("breakfast")}
    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
      selectedCategory === "breakfast"
        ? "bg-[#74e2ba] text-green-900"
        : "bg-white border text-gray-600 hover:bg-gray-100"
    }`}
  >
    Breakfast
  </button>

  <button
    onClick={() => setSelectedCategory("lunch")}
    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
      selectedCategory === "lunch"
        ? "bg-[#74e2ba] text-green-900"
        : "bg-white border text-gray-600 hover:bg-gray-100"
    }`}
  >
    Lunch
  </button>

  <button
    onClick={() => setSelectedCategory("snacks")}
    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
      selectedCategory === "snacks"
        ? "bg-[#74e2ba] text-green-900"
        : "bg-white border text-gray-600 hover:bg-gray-100"
    }`}
  >
    Snacks
  </button>

  <button
    onClick={() => setSelectedCategory("drinks")}
    className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
      selectedCategory === "drinks"
        ? "bg-[#74e2ba] text-green-900"
        : "bg-white border text-gray-600 hover:bg-gray-100"
    }`}
  >
    Drinks
  </button>
</div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {filteredFoods.map((food) => (
            <Link key={food.id} href={`/menu/${food.id}`}>
              <div className="bg-white p-5 rounded-3xl shadow hover:shadow-lg transition cursor-pointer">

                <div className="flex gap-6">

                  <div className="w-1/3">
                    <Image
                      src={food.image} unoptimized
                      alt={food.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-2xl "
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