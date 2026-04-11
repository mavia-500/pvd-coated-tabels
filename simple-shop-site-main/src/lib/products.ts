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
    name: "Nordic Round Center Table",
    price: 19999,
    off: 10,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 4.32.09 PM.webp",
    images: [
      "WhatsApp Image 2026-04-11 at 4.32.09 PM.webp",
      "WhatsApp Image 2026-04-11 at 4.32.10 PM.webp",
      "WhatsApp Image 2026-04-11 at 4.32.10 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 4.32.10 PM.webp",
      // "WhatsApp Image 2026-02-09 at 1.54.57 AM.jpeg",
    ],
    description: `Dimensions: Diameter: 30", Height: 23" Base Material: Iron and Golden PVD Coated Top: Magma Black Marble ( Can be customized with different Marble, Glass or MDF Sheet of your choice from our stock) Price may vary after customization.Delivery time is 3-4 weeks.Sleek and Modern Design: The Nordic Round Center Table features a sleek and modern design that complements various decor styles, adding a touch of elegance to your living space.Versatile Usage: This table is perfect for serving as a focal point in your living room or as a functional surface for displaying decor items, books, or drinks.Sturdy Construction: Crafted from high-quality materials, this center table is built to withstand daily use and provide long-lasting durability, making it a practical and stylish addition to your home.`,
  },

  {
    id: 12,
    name: "Nordic Center Table",
    price: 19999,
    off: 6,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 4.28.13 PM (1).webp",
    images: [
      "WhatsApp Image 2026-04-11 at 4.28.13 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 4.28.13 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 4.28.13 PM.webp",
      "WhatsApp Image 2026-04-11 at 4.28.14 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 4.28.14 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 4.28.14 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 4.28.14 PM.webp",
    ],
    description: ` FBase Material Iron and Golden PVD Coated
Top: Black Glass ( Can be customized with different Marble, Glass or MDF Sheet of your choice from our stock)
Price may vary after customization.Delivery time is 3-4 weeks.Nordic center table with a minimalist and stylish design, perfect for modern living spaces.Provides a versatile surface for drinks, books, or decor items, enhancing functionality in your room.Crafted with quality materials and a Nordic-inspired aesthetic, adding a touch of Modern charm to your home decor.`,
  },

  {
    id: 13,
    name: "Nordi",
    price: 22999,
    off: 8,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 4.56.37 PM (1).webp",
    images: [
      "WhatsApp Image 2026-04-11 at 4.56.37 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 4.56.37 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 4.56.37 PM.webp",
      "WhatsApp Image 2026-04-11 at 4.56.38 PM.webp",
    ],
    description: ` FBase Material Iron and Golden PVD Coated
Top: Black Glass ( Can be customized with different Marble, Glass or MDF Sheet of your choice from our stock)
Price may vary after customization.Delivery time is 3-4 weeks.Nordic center table with a minimalist and stylish design, perfect for modern living spaces.Provides a versatile surface for drinks, books, or decor items, enhancing functionality in your room.Crafted with quality materials and a Nordic-inspired aesthetic, adding a touch of Modern charm to your home decor.`,
  },

  {
    id: 14,
    name: "Safari Gold Center Table",
    price: 25999,
    off: 10,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 5.00.42 PM.webp",
    images: [
      "WhatsApp Image 2026-04-11 at 5.00.45 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.00.44 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.00.44 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 5.00.44 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 5.00.43 PM.webp",
    ],
    description: ` Dimensions: Height: 18", Length: 4ft, Width: 2ft Frame Material: Iron and  Golden PVD Coated Top: HD Versace Printed Black Glass ( Can be customized with different Marble, Glass or MDF Sheet of your choice from our stock) Price may vary after customization.Delivery time is 3-4 weeks.Exotic Elegance: The Safari Gold Center Table exudes exotic allure with its safari-themed design and golden accents, serving as a captivating centerpiece that adds opulence and sophistication to your living space.Functional Design: With its spacious tabletop and sturdy construction, this center table provides a practical surface for displaying decor, serving snacks, or organizing essentials, blending utility with an eye-catching design.Statement Piece: This table not only offers functionality but also stands out as a statement furniture piece, combining unique aesthetics with functionality, making it a striking addition to your home decor collection.`,
  },

  {
    id: 15,
    name: "X Duo Center Table",
    price: 19999,
    off: 6,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 5.03.07 PM.webp",
    images: [
      "WhatsApp Image 2026-04-11 at 5.03.07 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 5.00.44 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.03.06 PM.webp",
    ],
    description: `Dimensions: Length: 4ft, Width: 2.5ft Base Material: Iron and Golden PVD Coated
Top: White Marble ( Can be customized with different Marble, Glass or MDF Sheet of your choice from our stock)Price may vary after customization. Delivery time is 3-4 weeks.Modern Dual-Design: Featuring a unique "X" frame and dual structure, this center table blends style with functionality for contemporary interiors.Premium Craftsmanship: Built with durable materials, ensuring lasting strength and elegance for your living space.
Versatile Functionality: The spacious top provide ample room for decor, books, or everyday essentials.Space-Saving Elegance: Perfectly sized to complement sofas and seating areas, enhancing your room’s aesthetic`,
  },

  {
    id: 16,
    name: "Omega Office TableRegular",
    price: 29999,
    off: 8,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 5.06.16 PM (2).webp",
    images: [
      "WhatsApp Image 2026-04-11 at 5.06.16 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.06.16 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 5.06.15 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.06.15 PM (3).webp",
      "WhatsApp Image 2026-04-11 at 5.06.15 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 5.06.15 PM (1).webp",
    ],
    description: `Dimensions of Table: L X W: 5ft x 2ft ( Can be customized)
Base Material: Iron and  Golden PVD Coated Top: Corian Marble & Wooden Drawers ( Can be customized with different Marble, Glass or MDF Sheet of your choice from our stock) Dimensions of Chair: 18" X 18" Height: 36" Base Material: Stainless Steel Golden PVD Coated Poshish Fabric: White Imported Velvet ( Can be customized) Price may vary after customization. Delivery time is 3-4 weeks.Sleek & Professional Design: The Omega Office Table features a modern design with clean lines, perfect for adding a touch of sophistication to any office space. Spacious Work Surface: Provides ample room for your computer, documents, and office essentials, helping to boost productivity and organization.Durable & Sturdy: Built with high-quality materials to ensure long-lasting performance, making it ideal for daily use in both home and professional offices.Versatile Functionality: Suitable for a variety of settings—use it as a desk, workstation, or executive table to complement your office décor.`,
  },

  {
    id: 17,
    name: "Omega Office TableRegular",
    price: 49999,
    off: 10,
    category: "Table",
    image: "WhatsApp Image 2026-04-11 at 5.11.22 PM.webp",
    images: [
      "WhatsApp Image 2026-04-11 at 5.11.21 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.11.21 PM (3).webp",
      "WhatsApp Image 2026-04-11 at 5.11.21 PM (2).webp",
      // "WhatsApp Image 2026-04-11 at 5.06.15 PM (3).webp",
      "WhatsApp Image 2026-04-11 at 5.11.21 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 5.11.20 PM.webp",
    ],
    description: `Dimensions of Dining Table:
Diameter: 42", Height: 31.5" Dining Table Base Material: Stainless Steel Golden PVD Coated Top: Black Marble (Can be customized with different MDF Sheet, Glass or Marble of your choice from our stock)
Chair Base Material: iron and Golden PVD Coated or MS Golden Powder Coated Poshish Fabric: Turkish Velvet ( Can be customized) Price may vary after customization. Delivery time is 3-4 weeks.Contemporary Dining Elegance: Elevate your dining experience with the Cage Dining Table Set. Its contemporary design featuring cage-like details adds a touch of modern elegance to your dining area, creating a stylish and inviting atmosphere.Space-Saving Design: Crafted with functionality in mind, this dining table set boasts a space-saving design. The solstice chairs seamlessly tuck under the table, optimizing your dining space and providing a neat and organized look when not in use.Sturdy and Stylish Construction: Beyond its chic appearance, the Cage Dining Table Set is built with a focus on both style and durability. The sturdy construction ensures longevity, making it a practical and enduring addition to your home, perfect for both daily meals and special occasions.`,
  },

  {
    id: 18,
    name: "Modern Book rack",
    price: 30000,
    off: 12,
    category: "Book Rack",
    image: "WhatsApp Image 2026-04-11 at 5.20.26 PM.webp",
    images: ["WhatsApp Image 2026-04-11 at 5.20.26 PM (1).webp"],
    description: `This modern book rack offers substantial storage space and a chic, contemporary aesthetic. It is made from durable materials and is designed to hold books safely and securely. The simple and elegant styling ensures it can fit into any space in your home or office.Give your home a modern look with our Ms modern powder coated book shelf. Material Ms high quality Powder coat Mdf sheet`,
  },

  {
    id: 19,
    name: "Modern Corner Decor Stand",
    price: 24999,
    off: 12,
    category: "Corner Decor Stand",
    image: "WhatsApp Image 2026-04-11 at 5.22.47 PM.webp",
    images: [
      "WhatsApp Image 2026-04-11 at 5.22.46 PM.webp",
      "WhatsApp Image 2026-04-11 at 5.22.46 PM (3).webp",
      "WhatsApp Image 2026-04-11 at 5.22.46 PM (2).webp",
      "WhatsApp Image 2026-04-11 at 5.22.46 PM (1).webp",
      "WhatsApp Image 2026-04-11 at 5.22.45 PM.webp",
    ],
    description: `Dimensions: Height 81", Diameter 18", 4 shelves Stand Material: Iron and Golden PVD Coated
Shelves: Black Glass( Can be customized with different Glass of your choice from our stock)Price may vary after customization.Delivery time is 3-4 weeks.Space-Optimizing Design: This Modern Corner Decor Stand is crafted to optimize space, ideal for displaying plants, sculptures, or decor, adding an aesthetic touch to any corner of your home.Sturdy & Stylish Construction: Crafted with durable materials, it offers a sturdy foundation for your decorative pieces, combining functionality with a modern, sleek design.Versatile Home Accent: Perfect for both contemporary and classic interiors, this stand effortlessly complements various decor styles, making it a versatile addition to your living space.`,
  },
];
