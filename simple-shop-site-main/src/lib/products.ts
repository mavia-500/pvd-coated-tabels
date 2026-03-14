import { off } from "process";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  off?: number;
  dimensions?: {
    small: string;
    medium: string;
    large: string;
  };
  // salePrice?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Seaford Nesting Table-Set of 3pcs",
    price: 12999,
    off: 20,
    // salePrice: price * 0.2,
    category: "Furniture",
    image: "WhatsApp Image 2026-02-09 at 2.10.51 AM (1).jpeg",
    images: [
      "WhatsApp Image 2026-02-09 at 2.10.51 AM.webp",
      "WhatsApp Image 2026-02-09 at 2.10.52 AM.webp",
    ],
    description: `Base Material: iron and PVD Coated Top Material: black wooden sheet 
    Large Table 
    Dimension: 18"X18" Large 
    Table Height: 18"
     Medium Table Dimension: 16"X16"
     Medium Table Height: 16"
     Small Table 
     Dimension: 14"X14"
     Small Table Height: 14"
Versatile Nesting: Our Seaford Nesting Table Set of 3pcs offers versatile solutions for space-saving and functional decor.
Stylish Design: These tables combine practicality with modern design, enhancing your room aesthetics.
Customizable Arrangement: Arrange them separately or stack for a unique layout, adapting to your changing needs and preferences.
Enhance your space with the Seaford Nesting Table Set – experience versatility, style, and adaptability in one elegant ensemble.`,
  },
  // {
  //   id: 1,
  //   off: 20,
  //   name: "Ceramic Bowl Set",
  //   price: 48,
  //   category: "Home",
  //   image:
  //     "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1603199506016-5d54290b5807?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop",
  //   ],
  //   description: "Hand-crafted ceramic bowls in warm earthy tones.",
  // },
  {
    id: 2,
    name: "Z Style Nesting Table Set of 3pcs",
    price: 16500,
    off: 30,
    category: "Table",
    image: "WhatsApp Image 2026-02-09 at 2.08.46 AM.webp",
    images: [
      "WhatsApp Image 2026-02-09 at 2.08.45 AM.webp",
      "WhatsApp Image 2026-02-09 at 2.08.45 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 2.08.45 AM (2).webp",
      "WhatsApp Image 2026-02-09 at 2.08.44 AM.webp",
      "WhatsApp Image 2026-02-09 at 2.08.44 AM (1).webp",
    ],
    description: `Base Material: iron and Golden PVD Coated Top: Black wooden sheet ( Can be customized with different colour sheet of your choice from our stock) Space-Saving Elegance: Maximize your living space with the Z-Style Nesting Table Set. The unique Z-shaped design not only adds a touch of contemporary elegance but also offers a space-saving solution, allowing the tables to nest together when not in use. Versatile Arrangement: Crafted for versatility, this set of three nesting tables provides flexible placement options. Arrange them individually as side tables or group them together to create a dynamic and functional coffee table arrangement, adapting to your changing needs. Sturdy and Stylish: Built with durability in mind, these tables feature a sturdy construction while maintaining a sleek and modern aesthetic. The Z-style legs not only contribute to stability but also serve as a distinctive design element, making this set a stylish addition to any room.`,
    dimensions: { small: "13x13", medium: "15x15", large: "17x17" },
  },
  {
    id: 3,
    name: "X style Nesting Table Set of 3pcs",
    price: 14500,
    off: 25,
    category: "Kitchen",
    image: "WhatsApp Image 2026-02-09 at 2.06.47 AM.webp",
    images: [
      "WhatsApp Image 2026-02-09 at 2.06.47 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 2.06.47 AM (2).webp",
      "WhatsApp Image 2026-02-09 at 2.06.48 AM.webp",
      "WhatsApp Image 2026-02-09 at 2.06.48 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 2.06.48 AM (2).webp ",
    ],
    description: `Space-Efficient Nesting: This Nesting Table Set of 3pcs offers a space-saving solution with its nested design, giving flexibility in arrangement and serving various purposes within your living space.Versatile & Stylish: Designed with an "X" style, these tables are not just practical but also add a touch of contemporary flair to any room. Use them as side tables, coffee tables, or as decorative pieces individually or together.Durable & Functional: Crafted with sturdy materials, these tables boast durability while maintaining a sleek look, making them an ideal addition to modern interiors.  Base Material: Stainless Steel Golden PVD Coated Top Material wooden sheet ( Can be customized)`,
    dimensions: {
      small: `14" X 14", Height: 14.5"`,
      medium: `16" X 16", Height: 18.5"`,
      large: `18" X 18", Height: 20.5"`,
    },
  },
  {
    id: 4,
    name: "Soy Wax Candle",
    price: 28,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1602607700009-f6109b498506?w=600&h=600&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&h=600&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1595408076683-5d0c2c6b tried?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595408076683-5d0c2c6b tried?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop",
    ],
    description: "Hand-woven basket ideal for storage and décor.",
  },
];
