export type Food = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
};

export const foods: Food[] = [
  {
    id: "1",
    name: "Chotpoti",
    price: 40,
    description: "Quinoa, charred kale, smoked salmon, and citrus glaze.",
    image:
      "https://i.ytimg.com/vi/RXbrouiyuxE/maxresdefault.jpg",
    calories: 480,
    protein: 18,
    carbs: 52,
    fats: 22,
  },
  {
    id: "2",
    name: "Burger",
    price: 30,
    description: "Handmade fettuccine with seasonal black truffle shavings.",
    image:
      "https://samwood-wp-assets.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2025/10/09143602/featured.jpg",
    calories: 580,
    protein: 22,
    carbs: 65,
    fats: 20,
  },
  {
    id: "3",
    name: "Portota with Daal",
    price: 20,
    description: "Hummus, chickpeas, cucumber, feta, olive oil.",
    image:
      "https://i.ytimg.com/vi/xAXqPlWXgA8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLByLzJplv7TYFGrqGh1fLasACEG4Q",
    calories: 310,
    protein: 14,
    carbs: 40,
    fats: 12,
  },
  {
    id: "4",
    name: "Noodles",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://3.imimg.com/data3/UP/YK/MY-17273090/hakka-noddles.jpg",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
  },
];