// 1. The TypeScript blueprint for every product
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  accent: string;
  description: string;
  specs: string[];
}

// 2. Typed array of 8 products across all 4 categories
export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    accent: "#6c8cff",
    description:
      "A lightweight daily trainer with a springy foam midsole and a breathable knit upper.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
  },
  {
    id: "trail-blazer",
    name: "Trail Blazer",
    tagline: "Grippy off-road shoes for rough terrain.",
    price: 149,
    category: "Sneakers",
    emoji: "🥾",
    accent: "#4cc38a",
    description:
      "Built for mud, gravel, and steep climbs with deep rubber lugs and a reinforced toe cap.",
    specs: ["Vibram outsole", "Water-repellent mesh", "4mm lugs", "Rock plate"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    description:
      "Compact earbuds with active noise cancellation and an eight-hour battery.",
    specs: ["Active noise cancel", "8h battery", "USB-C case", "IPX4 sweatproof"],
  },
  {
    id: "echo-speaker",
    name: "Echo Speaker",
    tagline: "A pocket speaker that fills a room.",
    price: 59,
    category: "Audio",
    emoji: "🔊",
    accent: "#ff7b72",
    description:
      "360-degree sound in an anodized aluminum body that clips onto any backpack.",
    specs: ["360° audio", "12h playtime", "IP67 waterproof", "USB-C fast charge"],
  },
  {
    id: "time-keeper",
    name: "Time Keeper",
    tagline: "A smartwatch that tracks everything.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    accent: "#38bdf8",
    description:
      "Always-on OLED display with multi-band GPS, heart-rate zones, and a seven-day battery.",
    specs: ["Always-on OLED", "Multi-band GPS", "7-day battery", "5ATM water resistance"],
  },
  {
    id: "focus-band",
    name: "Focus Band",
    tagline: "A minimalist fitness tracker.",
    price: 69,
    category: "Wearables",
    emoji: "📿",
    accent: "#f59e0b",
    description:
      "Screen-free recovery, sleep, and step tracking in a woven strap you forget you are wearing.",
    specs: ["Screen-free design", "14-day battery", "Sleep & HRV tracking", "18g weight"],
  },
  {
    id: "power-brick",
    name: "Power Brick",
    tagline: "A fast charger for every device.",
    price: 49,
    category: "Gadgets",
    emoji: "🔋",
    accent: "#10b981",
    description:
      "100W GaN wall charger with dual USB-C ports capable of charging a laptop and phone at once.",
    specs: ["100W GaN output", "2x USB-C + 1x USB-A", "Foldable prongs", "Thermal protection"],
  },
  {
    id: "clip-cam",
    name: "Clip Cam",
    tagline: "A tiny action camera for any adventure.",
    price: 119,
    category: "Gadgets",
    emoji: "📷",
    accent: "#ec4899",
    description:
      "Thumb-sized 4K stabilized camera with a magnetic mount that sticks to shirts, helmets, or bikes.",
    specs: ["4K 60fps video", "Magnetic mount", "Horizon stabilization", "Waterproof to 10m"],
  },
];

// 3. Helper function to look up a single product by its URL slug/id
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}