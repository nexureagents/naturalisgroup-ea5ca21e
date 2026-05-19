import water250 from "@/assets/water-250.webp";
import water500 from "@/assets/water-500.webp";
import water1L from "@/assets/water-1l.webp";
import water2L from "@/assets/water-2l.webp";

export type ProductCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
};

export const CATEGORIES: ProductCategory[] = [
  { slug: "water-beverages", title: "Water & Beverages", tagline: "Purelyf hydration", description: "Multi-stage purified packaged drinking water in 250 ml to 20 L formats." },
  { slug: "alkaline-water",  title: "Alkaline Water",   tagline: "Balanced pH 8+",   description: "Mineral-enhanced alkaline water for premium daily hydration." },
  { slug: "sodas-soft-drinks", title: "Sodas & Soft Drinks", tagline: "Crafted fizz", description: "Bubblz sodas in classic, jeera masala and orange." },
  { slug: "ketchup-sauces",  title: "Ketchup & Sauces", tagline: "Kitchen essentials", description: "Tomato ketchup, chilli, soya and vinegar — made the natural way." },
  { slug: "fresh-vegetables", title: "Fresh Vegetables", tagline: "Farm to crate", description: "Graded, washed, cold-chain produce sourced from Northeast India." },
  { slug: "fresh-fruits",    title: "Fresh Fruits",     tagline: "Tropical premium", description: "Hand-picked seasonal fruits including papaya and more." },
  { slug: "jams-juices",     title: "Jams & Juices",    tagline: "Real fruit, real taste", description: "Pineapple jam, schezwan chutney and juice refreshments." },
  { slug: "ready-to-eat",    title: "Ready-to-Eat",     tagline: "Modern convenience", description: "Pre-cut, washed, microwaveable vegetable trays and more." },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  image?: string;
  size?: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  { slug: "purelyf-250ml", name: "Purelyf Water 250 ml", category: "water-beverages", image: water250, size: "250 ml", description: "Pocket-format premium drinking water." },
  { slug: "purelyf-500ml", name: "Purelyf Water 500 ml", category: "water-beverages", image: water500, size: "500 ml", description: "On-the-go hydration essential." },
  { slug: "purelyf-1l",    name: "Purelyf Water 1 L",    category: "water-beverages", image: water1L,  size: "1 L",   description: "Family-format pure drinking water." },
  { slug: "purelyf-2l",    name: "Purelyf Water 2 L",    category: "water-beverages", image: water2L,  size: "2 L",   description: "Value-pack 2 L premium water." },
  { slug: "purelyf-alkaline", name: "Purelyf Alkaline Water", category: "alkaline-water", size: "1 L", description: "pH 8+ mineral-enhanced alkaline water." },
  { slug: "purelyf-can",   name: "Purelyf Water Can",    category: "water-beverages", size: "20 L", description: "Office & home bulk water can." },
  { slug: "bubblz-soda",   name: "Bubblz Soda",          category: "sodas-soft-drinks", description: "Classic crafted soda." },
  { slug: "jeera-masala-soda", name: "Jeera Masala Soda", category: "sodas-soft-drinks", description: "Aromatic jeera masala fizz." },
  { slug: "orange-soda",   name: "Orange Soda",          category: "sodas-soft-drinks", description: "Refreshing orange soda." },
  { slug: "tomato-ketchup", name: "Tomato Ketchup", category: "ketchup-sauces", description: "Rich, slow-cooked tomato ketchup." },
  { slug: "green-chilli-sauce", name: "Green Chilli Sauce", category: "ketchup-sauces", description: "Bright, tangy green chilli sauce." },
  { slug: "red-chilli-sauce", name: "Red Chilli Sauce", category: "ketchup-sauces", description: "Bold red chilli heat." },
  { slug: "soya-sauce", name: "Soya Sauce", category: "ketchup-sauces", description: "Naturally brewed soya sauce." },
  { slug: "synthetic-vinegar", name: "Synthetic Vinegar", category: "ketchup-sauces", description: "Crisp culinary vinegar." },
  { slug: "natural-vinegar", name: "Natural Vinegar", category: "ketchup-sauces", description: "Naturally fermented vinegar." },
  { slug: "pineapple-jam", name: "Pineapple Jam", category: "jams-juices", description: "Tropical pineapple preserve." },
  { slug: "schezwan-chutney", name: "Schezwan Chutney", category: "jams-juices", description: "Signature Indo-Schezwan chutney." },
  { slug: "papaya", name: "Papaya", category: "fresh-fruits", description: "Hand-picked tropical papaya." },
];

export const VEGETABLES = [
  "Potato","Onion","Tomato","Garlic","Ginger","Bitter Gourd","Pointed Gourd","String Beans",
  "Hyacinth Beans","Cabbage","Broccoli","Cauliflower","Coriander Leaves","Spinach","Radish",
  "Carrot","Beetroot","Pumpkin","Peas","Lady Finger","Drum Stick","Cucumber","Chilly","Capsicum",
];
