import Image from "next/image";
import Link from "next/link";
import { foods } from "@/data/foods";

export default async function FoodDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const food = foods.find((f) => f.id === id);

  if (!food) {
    return (
      <div className="pt-24 text-center text-red-500 font-bold">
        Food not found
      </div>
    );
  }

  return (
    <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">

      <Link href="/menu" className="text-gray-500 mb-6 block">
        ← Back to Menu
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <Image
          src={food.image}
          alt={food.name}
          width={800}
          height={600}
          className="rounded-3xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
          <p className="text-gray-500 mb-6">{food.description}</p>
          <p className="text-2xl font-bold mb-6">${food.price}</p>

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
            Add to Cart
          </button>
        </div>

      </div>
    </main>
  );
}