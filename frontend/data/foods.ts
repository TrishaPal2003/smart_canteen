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
  category: "breakfast" | "lunch" | "snacks" | "drinks";
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
    category: "snacks",
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
    category: "lunch",
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
    category: "breakfast",
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
    category: "breakfast",
  },
  {
    id: "5",
    name: "Halim",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "/images/halim.webp",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "snacks",
  },
  {
    id: "6",
    name: "Khichori",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "/images/khichuri.webp",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "lunch",
  },
  {
    id: "7",
    name: "dim chop",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://i.ytimg.com/vi/El1TeIgHVzw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgYs8VYOYpjxKjS2bRxIgCtC1o0w",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "snacks",
  },
  {
    id: "8",
    name: "Chomocha",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://www.bdgift.com/pp/iftar/somucha_s.jpg",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "snacks",
  },
  {
    id: "9",
    name: "Egg Roll",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://twoplaidaprons.com/wp-content/uploads/2022/08/Vietnamese-egg-rolls-on-plate-stacked-thumbnail.jpg",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "snacks",
  },
  {
    id: "10",
    name: "Sandwich",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "snacks",
  },
  {
    id: "11",
    name: "Coffee",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENE15-RpIz1PL7ER6mayC-5tjtb84NCbKfg&s",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "drinks",
  },
  {
    id: "12",
    name: "rice & chiken",
    price: 30,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuRMzQzD8JFBJl2CMrVQY6PrqHE-DwI13Vw&s",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
    category: "lunch",
  },
];