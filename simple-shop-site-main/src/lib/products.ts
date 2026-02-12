export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ceramic Bowl Set",
    price: 48,
    category: "Home",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603199506016-5d54290b5807?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop",
    ],
    description: "Hand-crafted ceramic bowls in warm earthy tones.",
  },
  {
    id: 2,
    name: "Linen Throw Pillow",
    price: 36,
    category: "Home",
    image: "https://images.unsplash.com/photo-1629949009765-0e2bffc6b2a8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629949009765-0e2bffc6b2a8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    ],
    description: "Soft linen pillow with a natural textured finish.",
  },
  {
    id: 3,
    name: "Oak Serving Board",
    price: 62,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&h=600&fit=crop",
    ],
    description: "Solid oak board, perfect for entertaining.",
  },
  {
    id: 4,
    name: "Soy Wax Candle",
    price: 28,
    category: "Home",
    image: "https://images.unsplash.com/photo-1602607700009-f6109b498506?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602607700009-f6109b498506?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608181831718-2501a740f3a3?w=600&h=600&fit=crop",
    ],
    description: "Clean-burning soy candle with warm amber notes.",
  },
  {
    id: 5,
    name: "Cotton Tote Bag",
    price: 24,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1597633125184-9000aa0e10ce?w=600&h=600&fit=crop",
    ],
    description: "Durable organic cotton tote for everyday use.",
  },
  {
    id: 6,
    name: "Stoneware Mug",
    price: 22,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517256064527-9d71c2f0e6e4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&h=600&fit=crop",
    ],
    description: "Handmade stoneware mug with a matte glaze.",
  },
  {
    id: 7,
    name: "Wooden Picture Frame",
    price: 34,
    category: "Home",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
    ],
    description: "Minimalist wooden frame crafted from reclaimed wood.",
  },
  {
    id: 8,
    name: "Woven Basket",
    price: 45,
    category: "Home",
    image: "https://images.unsplash.com/photo-1595408076683-5d0c2c6b tried?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595408076683-5d0c2c6b tried?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop",
    ],
    description: "Hand-woven basket ideal for storage and décor.",
  },
];
