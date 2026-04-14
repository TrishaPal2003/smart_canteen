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
    name: "Alchemist Green Bowl",
    price: 14.5,
    description: "Quinoa, charred kale, smoked salmon, and citrus glaze.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCuBZAHa8omIZBqymNwco6AzRGK3GfxS2IIg3IV2iPyMcGM-97qrQdzKRnfWSvYjc6b6xdyLF4wzWKTXbzBK1Vu5Bce3wbwktDjGq0vD7VQS1YYTIV85PK9oT_eC_HzDq72Yvcnp-4Ef8Wy2C7kOBqYchMSG3_9oQUdc9t27SX9UuyyN2RnFUqf3IJxj5d7CIquYwCEnlO9yf9MHtaH5CPmnZ60mA8HWItNwiflj89kU3rPDAHEVfijZYmAIKIEbzHWEoS6i6E6PDp",
    calories: 480,
    protein: 18,
    carbs: 52,
    fats: 22,
  },
  {
    id: "2",
    name: "Truffle Zest Pasta",
    price: 18.0,
    description: "Handmade fettuccine with seasonal black truffle shavings.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1M2baBUYrfztpJ3Ny05KXQjnqSi9yG8IM7IIwSclcX5SdP5-AqWftRzkATILFtrJI0TIlE1xMuTOTZBGjAu3ZHGHcbxbLmcTp1knU1bWsZWARnJVBH9Exb5o4d30QiXxHMKXR0SMdiANxPJsqPwhYm37a3-aLJYur76E20byyj4OU3BBR6qeN3UfwDoUxatAdkMfoGOVH5Tp7rNabzbfT6Bb7Nvf5Uiq04jo3dEe8Jb4N2imvBboyLW2XcRUwxvVWKqBhptNMf7RW",
    calories: 580,
    protein: 22,
    carbs: 65,
    fats: 20,
  },
  {
    id: "3",
    name: "Mediterranean Sun Bowl",
    price: 12.25,
    description: "Hummus, chickpeas, cucumber, feta, olive oil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXexXDuK9OCRv-cUcNvvRYBH1mzHY-GLG804VR_CqLog4e1kRR09UQ048znp7krRROEw3R16K7x99XrCppfBFgoaJPuUUlfaS_TFPItbXRYRw7ln3LQkxkXpPBiBnKo7-4Llmu_vs5d1z0r_b7qGvsJz4EPskd-KR6FtnRXiwMOqODNtl651oeq-lwbrboJG9JqB7FIAFqimJtLwDj-EJbB5QeLxMZ0Kl5hvoxqvPen6oqcylcZ9Ic8JO6lfIcpveiMzzNxV1-o3VW",
    calories: 310,
    protein: 14,
    carbs: 40,
    fats: 12,
  },
  {
    id: "4",
    name: "Margherita Classico",
    price: 11.5,
    description: "Sourdough base, buffalo mozzarella, fresh basil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs2NWUAazvf3nAKz7o_dhiQwqfTDAzi5jrOM_p-e4yD_pDi5sWZSI29LGCgLukwFTGXvmVPh8AQPSbn86kXt1z9kGVuf5fIs2_-tArSVA2l-gAyjpEXFrO7fhVQMG_X3CLTO8kofo8H9ueRMCn-8Fyq6HELyUBn-UR_zU6VsgTml0GOb-mTacEfi0esZG67hNsG5AVwvnbCYUfCFdtetT0o0Z3nv1J-PRMoCk1d0FritZ8-689VEYeke0JH7l9W9JS0MfDtdqpK1j8",
    calories: 640,
    protein: 20,
    carbs: 78,
    fats: 24,
  },
];