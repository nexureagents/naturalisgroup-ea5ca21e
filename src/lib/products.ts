import water250 from "@/assets/water-250.webp";
import water500 from "@/assets/water-500.webp";
import water1L from "@/assets/water-1l.webp";
import water2L from "@/assets/water-2l.webp";
import waterCan from "@/assets/purelyf-can-20l.webp";
import alkaline from "@/assets/purelyf-alkaline.webp";
import bubblz from "@/assets/product-bubblz-soda.jpg";
import jeera from "@/assets/product-jeera-soda.jpg";
import orange from "@/assets/product-orange-soda.jpg";
import ketchup100 from "@/assets/products/tomato-ketchup-100ml.webp";
import ketchup200 from "@/assets/products/tomato-ketchup-200ml.webp";
import ketchup1L from "@/assets/products/tomato-ketchup-1l.webp";
import greenChilli100 from "@/assets/products/green-chilli-100ml.webp";
import greenChilli200 from "@/assets/products/green-chilli-200ml.webp";
import greenChilli1L from "@/assets/products/green-chilli-1l.webp";
import soya100 from "@/assets/products/soya-sauce-100ml.webp";
import soya200 from "@/assets/products/soya-sauce-200ml.webp";
import vinegar100 from "@/assets/products/vinegar-100ml.webp";
import vinegar200 from "@/assets/products/vinegar-200ml.webp";
import pineappleJam from "@/assets/product-pineapple-jam.jpg";
import schezwan from "@/assets/product-schezwan.jpg";
import papaya from "@/assets/product-papaya.jpg";
import readyToEat from "@/assets/product-ready-to-eat.jpg";

export type ProductCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
};

export const CATEGORIES: ProductCategory[] = [
  { slug: "water-beverages", title: "Water & Beverages", tagline: "Purelyf hydration", description: "Multi-stage purified packaged drinking water in 250 ml to 20 L formats." },
  { slug: "alkaline-water",  title: "Alkaline Water",   tagline: "Balanced pH 8.5",   description: "Mineral-enhanced Purelyf+ alkaline water for premium daily hydration." },
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
  gallery?: string[];
  size?: string;
  price?: number;
  description: string;
  features?: string[];
};

const waterFeatures = [
  "Multi-stage purification: DMF · RO · GAC · EMF · Ozonation · UV",
  "Lab-verified for TDS, mineral balance and microbial safety",
  "Food-grade BPA-free packaging",
  "Tamper-proof seal · batch-coded",
];

export const PRODUCTS: Product[] = [
  { slug: "purelyf-250ml", name: "Purelyf Water 250 ml", category: "water-beverages", image: water250, gallery: [water250, water500, water1L], size: "250 ml", price: 10, description: "Pocket-format premium drinking water for retail, events and HoReCa.", features: waterFeatures },
  { slug: "purelyf-500ml", name: "Purelyf Water 500 ml", category: "water-beverages", image: water500, gallery: [water500, water250, water1L], size: "500 ml", price: 20, description: "On-the-go hydration essential — the most loved Purelyf format.", features: waterFeatures },
  { slug: "purelyf-1l",    name: "Purelyf Water 1 L",    category: "water-beverages", image: water1L,  gallery: [water1L, water500, water2L], size: "1 L",   price: 30, description: "Family-format pure drinking water with premium label finish.", features: waterFeatures },
  { slug: "purelyf-2l",    name: "Purelyf Water 2 L",    category: "water-beverages", image: water2L,  gallery: [water2L, water1L, water500], size: "2 L",   price: 55, description: "Value-pack 2 L premium water for daily household use.", features: waterFeatures },
  { slug: "purelyf-can",   name: "Purelyf Water Can",    category: "water-beverages", image: waterCan, gallery: [waterCan], size: "20 L", price: 80, description: "Office & home bulk water can with reinforced PET body and sealed cap.", features: waterFeatures },
  { slug: "purelyf-alkaline", name: "Purelyf Alkaline Water", category: "alkaline-water", image: alkaline, gallery: [alkaline], size: "1 L", price: 60, description: "Purelyf+ 8.5 alkaline water enhanced with electrolytes for balanced daily hydration.", features: ["pH 8.5 mineral-enhanced", "Enhanced with electrolytes", "Multi-stage purified base water", "Premium 1 L PET bottle"] },
  { slug: "bubblz-soda",   name: "Bubblz Soda",          category: "sodas-soft-drinks", image: bubblz, gallery: [bubblz], size: "250 ml", price: 25, description: "Classic crafted soda — clean, crisp and instantly refreshing.", features: ["Naturally carbonated", "Crystal-clear formulation", "No artificial preservatives"] },
  { slug: "jeera-masala-soda", name: "Jeera Masala Soda", category: "sodas-soft-drinks", image: jeera, gallery: [jeera], size: "250 ml", price: 28, description: "Aromatic jeera masala fizz with the warmth of Indian spices.", features: ["Real jeera extract", "Crafted spice blend", "Naturally carbonated"] },
  { slug: "orange-soda",   name: "Orange Soda",          category: "sodas-soft-drinks", image: orange, gallery: [orange], size: "250 ml", price: 28, description: "Bright, juicy orange soda — sunshine in a bottle.", features: ["Real orange concentrate", "Vivid citrus character", "Naturally carbonated"] },
  { slug: "tomato-ketchup", name: "Tomato Ketchup", category: "ketchup-sauces", image: ketchup, gallery: [ketchup], size: "500 g", price: 95, description: "Rich, slow-cooked tomato ketchup with a balanced sweet-tangy character.", features: ["Made from sun-ripened tomatoes", "No artificial colour", "Premium glass bottle"] },
  { slug: "green-chilli-sauce", name: "Green Chilli Sauce", category: "ketchup-sauces", image: chilliPair, gallery: [chilliPair], size: "200 ml", price: 75, description: "Bright, tangy green chilli sauce — sharp heat, clean finish.", features: ["Hand-selected green chillies", "Cold-blended for freshness", "Vegan & gluten-free"] },
  { slug: "red-chilli-sauce", name: "Red Chilli Sauce", category: "ketchup-sauces", image: chilliPair, gallery: [chilliPair], size: "200 ml", price: 75, description: "Bold red chilli heat with a rich, deep finish.", features: ["Premium red chilli varieties", "Slow-cooked for depth", "Vegan & gluten-free"] },
  { slug: "soya-sauce", name: "Soya Sauce", category: "ketchup-sauces", image: soya, gallery: [soya], size: "200 ml", price: 80, description: "Naturally brewed soya sauce with deep umami complexity.", features: ["Naturally brewed", "Rich umami profile", "Premium glass bottle"] },
  { slug: "synthetic-vinegar", name: "Synthetic Vinegar", category: "ketchup-sauces", image: vinegar, gallery: [vinegar], size: "500 ml", price: 45, description: "Crisp culinary vinegar for everyday Indian and continental cooking.", features: ["Lab-tested acidity levels", "Crystal clarity", "Premium PET bottle"] },
  { slug: "natural-vinegar", name: "Natural Vinegar", category: "ketchup-sauces", image: vinegar, gallery: [vinegar], size: "500 ml", price: 65, description: "Naturally fermented vinegar with a soft, rounded acidity.", features: ["Naturally fermented", "No synthetic acetic acid", "Premium PET bottle"] },
  { slug: "pineapple-jam", name: "Pineapple Jam", category: "jams-juices", image: pineappleJam, gallery: [pineappleJam], size: "350 g", price: 145, description: "Tropical pineapple preserve, slow-cooked with real fruit chunks.", features: ["Real pineapple chunks", "No artificial colour", "Premium glass jar"] },
  { slug: "schezwan-chutney", name: "Schezwan Chutney", category: "jams-juices", image: schezwan, gallery: [schezwan], size: "200 g", price: 110, description: "Signature Indo-Schezwan chutney — fiery, garlicky, addictive.", features: ["Bold Schezwan flavour", "Premium dry red chillies", "Vegan & gluten-free"] },
  { slug: "papaya", name: "Premium Papaya", category: "fresh-fruits", image: papaya, gallery: [papaya], size: "Per kg", price: 60, description: "Hand-picked tropical papaya, graded and washed for retail and HoReCa.", features: ["Hand-graded", "Cold-chain logistics", "Available in bulk crates"] },
  { slug: "ready-to-eat-tray", name: "Ready-to-Eat Vegetable Tray", category: "ready-to-eat", image: readyToEat, gallery: [readyToEat], size: "300 g", price: 99, description: "Pre-cut, washed and tray-packed fresh vegetables — kitchen-ready.", features: ["Triple-washed", "Microwaveable tray", "Cold-chain delivered"] },
];

export const VEGETABLES = [
  "Potato","Onion","Tomato","Garlic","Ginger","Bitter Gourd","Pointed Gourd","String Beans",
  "Hyacinth Beans","Cabbage","Broccoli","Cauliflower","Coriander Leaves","Spinach","Radish",
  "Carrot","Beetroot","Pumpkin","Peas","Lady Finger","Drum Stick","Cucumber","Chilly","Capsicum",
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getRelated(slug: string, limit = 3): Product[] {
  const p = getProduct(slug);
  if (!p) return [];
  return PRODUCTS.filter((x) => x.category === p.category && x.slug !== slug).slice(0, limit);
}
