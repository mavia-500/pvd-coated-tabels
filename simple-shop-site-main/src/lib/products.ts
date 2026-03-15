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
      "WhatsApp Image 2026-02-09 at 2.06.48 AM (1).jpeg",
      "WhatsApp Image 2026-02-09 at 2.06.48 AM (2).jpeg",
      "WhatsApp Image 2026-02-09 at 2.06.48 AM.jpeg",
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
    name: "BUZUEY Gold Shoe Bench ",
    price: 8500,
    off: 10,
    category: "Shoe Rack",
    image: "WhatsApp Image 2026-02-09 at 2.03.26 AM.webp",
    images: ["WhatsApp Image 2026-02-09 at 2.03.26 AM.webp"],
    description:
      "This stylish 3-Tier Iron Shoe Rack Bench blends modern industrial design with everyday functionality. Featuring a luxurious gold-finished frame and a soft, padded seat, it serves as both a comfortable entryway bench and an efficient storage solution for your footwear collection. ( Can be customized)",
  },
  {
    id: 5,
    name: "Metal Shoe Rack with Seat ",
    price: 12600,
    off: 10,
    category: "shoes rack",
    image: "WhatsApp Image 2026-02-09 at 1.59.53 AM.webp",
    images: [
      "WhatsApp Image 2026-02-09 at 2.01.04 AM.webp",
      "WhatsApp Image 2026-02-09 at 2.01.04 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 2.01.04 AM (2).webp",
      "WhatsApp Image 2026-02-09 at 2.01.05 AM.webp",
    ],
    description:
      "Small Shoe Bench with Storage | Ideal Slim Entryway Shoe Organizer Cabinet - Practical Entrance Bench for Shoe Storage and Seating - Space-Saving Design for Small Spaces - Durable Metal Frame with Comfortable Seat - Stylish and Functional Addition to Your Home ( Can be customized)",
  },
  {
    id: 6,
    name: "Elanza Double Cushion  Shoe Rack",
    price: 9800,
    off: 15,
    category: "shoes rack",
    image: "WhatsApp Image 2026-02-09 at 1.59.53 AM (3).webp",
    images: [
      "WhatsApp Image 2026-02-09 at 1.59.53 AM (2).webp",
      "WhatsApp Image 2026-02-09 at 1.59.53 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 1.59.52 AM.webp",
    ],
    description: `Cushion – Velvet Cushion Color can be customized in Grey , Brown , Red , Pink , Sky blue , Green , Navy Blue , white !! Designed and crafted with Luxurious Golden Finish. Made up of premium quality and resilient metal. Sleek and Fresh design with Rust-free lacquer coating. Suitable for indoor use only, Avoid direct water contact. Convenient cleaning with dry/damp cloth Please contact us if you need a different Color finish/Size for this product. We would be glad to assist you!`,
  },
  {
    id: 7,
    name: "circle design corner shelf",
    price: 10500,
    off: 8,
    category: "Corner Shelf",
    image: "WhatsApp Image 2026-02-09 at 1.57.21 AM (1).webp",
    images: ["WhatsApp Image 2026-02-09 at 1.57.21 AM (1).webp"],
    description: `Wall Shelf Design for showcasing, in metal with high quality paint in glossy lacquer finish & high gloss finish marble textured MDF top. Fill your Corner Spaces beautifully with these Racks.
      Dimensions L: 4.3ft;  Diameter: 14"`,
  },
  {
    id: 8,
    name: "Square shape corner shelf ",
    price: 10800,
    off: 5,
    category: "Corner Shelf",
    image: "WhatsApp Image 2026-02-09 at 1.56.40 AM.webp",
    images: ["WhatsApp Image 2026-02-09 at 1.56.40 AM.webp"],
    description: `Corner Shelf for showcasing, in metal with high quality paint in glossy lacquer finish & high gloss finish marble textured MDF top. Fill your Corner Spaces beautifully with these Racks.Dimensions L: 4.3ft;  Diameter: 14”`,
  },

  {
    id: 9,
    name: "Corner Shelf Design",
    price: 10500,
    off: 8,
    category: "Corner Shelf",
    image: "WhatsApp Image 2026-02-09 at 1.55.55 AM.webp",
    images: ["WhatsApp Image 2026-02-09 at 1.55.55 AM.webp"],
    description: `orner stand for showcasing, in metal with high quality paint in glossy lacquer finish & high gloss finish marble textured MDF top. Fill your Corner Spaces beautifully with these Racks.
     Dimensions L: 4.3ft;  Diameter: 13”`,
  },

  {
    id: 10,
    name: "Cube Bookcase",
    price: 6999,
    off: 5,
    category: "Corner Shelf",
    image: "WhatsApp Image 2026-02-09 at 1.54.55 AM (1).webp",
    images: [
      "WhatsApp Image 2026-02-0 at 1.54.55 AM.webp",
      "WhatsApp Image 2026-02-09 at 1.54.56 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 1.54.56 AM (2).webp",
      "WhatsApp Image 2026-009 at 1.54.56 AM.webp",
      "WhatsApp Image 2026-02-09 at 1.54.57 AM.jpeg",
    ],
    description: `Bottom two shelves made of metal Brown shelves Made of MDF sheet 5 Full shelves
Dimensions: 57.25'' H x 12'' W x 12'' D
Shelf12'' H x 11.8'' W x 11.8'' D
Content + Care
MDF Sheet Ans Powder Coated Iron.
Wipe Clean

Frame finish in powder coating.

Color:
Frame in Black Color

Pictures are for illustration purposes. Decoration items are not included in this offer.`,
  },


   {
    id: 11,
    name: "Cube Bookcase",
    price: 6999,
    off: 5,
    category: "Corner Shelf",
    image: "WhatsApp Image 2026-02-09 at 1.54.55 AM (1).webp",
    images: [
      "WhatsApp Image 2026-02-0 at 1.54.55 AM.webp",
      "WhatsApp Image 2026-02-09 at 1.54.56 AM (1).webp",
      "WhatsApp Image 2026-02-09 at 1.54.56 AM (2).webp",
      "WhatsApp Image 2026-009 at 1.54.56 AM.webp",
      "WhatsApp Image 2026-02-09 at 1.54.57 AM.jpeg",
    ],
    description: `Bottom two shelves made of metal Brown shelves Made of MDF sheet 5 Full shelves
Dimensions: 57.25'' H x 12'' W x 12'' D
Shelf12'' H x 11.8'' W x 11.8'' D
Content + Care
MDF Sheet Ans Powder Coated Iron.
Wipe Clean

Frame finish in powder coating.

Color:
Frame in Black Color

Pictures are for illustration purposes. Decoration items are not included in this offer.`,
  },
];
