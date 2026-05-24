import water250 from "@/assets/water-250.webp";
import water500 from "@/assets/water-500.webp";
import water1L from "@/assets/water-1l.webp";
import water2L from "@/assets/water-2l.webp";
import waterCan from "@/assets/purelyf-can-20l.webp";
import alkaline from "@/assets/purelyf-alkaline.webp";
import bubblz from "@/assets/products/bubblz-club-soda.webp";
import jeera from "@/assets/products/jeera-masala-soda.webp";
import orange from "@/assets/products/orange-soda.webp";
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
import pineappleJam from "@/assets/products/pineapple-jam.webp";
import schezwan from "@/assets/products/schezwan-chutney.webp";
import redChilli100 from "@/assets/products/red-chilli-100ml.png";
import redChilli200 from "@/assets/products/red-chilli-200ml.png";
import redChilli1L from "@/assets/products/red-chilli-1l.png";
import sachet10g from "@/assets/products/sachet-pouch-10g.png";
import glass750 from "@/assets/products/purelyf-glass-750.png";
import limbuPani from "@/assets/products/limbu-pani-300.png";
import lichiSoda from "@/assets/products/lichi-soda-300.png";
import plainSoda750 from "@/assets/products/plain-soda-750.png";
import plainSoda650 from "@/assets/products/plain-soda-650.png";
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
  sku?: string;
  price?: number;          // MRP (kept for backwards compat with existing pages)
  mrp?: number;
  retailerPrice?: number;
  retailerNote?: string;   // e.g. "per carton"
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
  // ===== Purelyf packaged water =====
  { slug: "purelyf-250ml", name: "Purelyf Water 250 ml", category: "water-beverages", image: water250, gallery: [water250, water500, water1L], size: "250 ml", sku: "NTR-PLF-250", price: 8,  mrp: 8,  retailerPrice: 240, retailerNote: "per carton", description: "Pocket-format premium drinking water for retail, events and HoReCa.", features: waterFeatures },
  { slug: "purelyf-500ml", name: "Purelyf Water 500 ml", category: "water-beverages", image: water500, gallery: [water500, water250, water1L], size: "500 ml", sku: "NTR-PLF-500", price: 15, mrp: 15, retailerPrice: 185, retailerNote: "per carton", description: "On-the-go hydration essential — the most loved Purelyf format.", features: waterFeatures },
  { slug: "purelyf-1l",    name: "Purelyf Water 1 L",    category: "water-beverages", image: water1L,  gallery: [water1L, water500, water2L], size: "1 L",    sku: "NTR-PLF-1L",  price: 25, mrp: 25, retailerPrice: 145, retailerNote: "per carton", description: "Family-format pure drinking water with premium label finish.", features: waterFeatures },
  { slug: "purelyf-2l",    name: "Purelyf Water 2 L",    category: "water-beverages", image: water2L,  gallery: [water2L, water1L, water500], size: "2 L",    sku: "NTR-PLF-2L",  price: 35, mrp: 35, retailerPrice: 145, retailerNote: "per carton", description: "Value-pack 2 L premium water for daily household use.", features: waterFeatures },
  { slug: "purelyf-can",   name: "Purelyf Water Can",    category: "water-beverages", image: waterCan, gallery: [waterCan], size: "20 L", sku: "NTR-PLF-20L", price: 80, mrp: 80, description: "Office & home bulk water can with reinforced PET body and sealed cap.", features: waterFeatures },

  // ===== Purelite economy water =====

  // ===== Glass bottle premium water =====
  { slug: "purelyf-glass-750", name: "Purelyf Glass Bottle 750 ml", category: "water-beverages", image: glass750, gallery: [glass750], size: "750 ml", sku: "NTR-PLF-G750", price: 225, mrp: 225, retailerPrice: 175, retailerNote: "per bottle", description: "Premium glass-bottle drinking water — for fine dining, HoReCa and gifting." },

  // ===== Alkaline =====
  { slug: "purelyf-alkaline-500", name: "Purelyf Alkaline Water 500 ml", category: "alkaline-water", image: alkaline, gallery: [alkaline], size: "500 ml", sku: "NTR-ALK-500", price: 40, mrp: 40, retailerPrice: 457, retailerNote: "per carton", description: "Mineral-enhanced Purelyf+ 8.5 alkaline water in the on-the-go 500 ml format.", features: ["pH 8.5 mineral-enhanced", "Enhanced with electrolytes", "Multi-stage purified base water"] },

  // ===== Sodas & soft drinks =====
  { slug: "bubblz-soda",        name: "Bubblz Club Soda",      category: "sodas-soft-drinks", image: bubblz, gallery: [bubblz], size: "250 ml", sku: "NTR-BUB-250", price: 25, mrp: 25, description: "Classic crafted soda — clean, crisp and instantly refreshing.", features: ["Naturally carbonated", "Crystal-clear formulation", "No artificial preservatives"] },
  { slug: "plain-soda-650",     name: "Plain Soda 650 ml",     category: "sodas-soft-drinks", size: "650 ml", sku: "NTR-SOD-650", price: 25, mrp: 25, retailerPrice: 20, retailerNote: "per bottle", description: "Bright, crisp plain soda — the perfect everyday mixer." },
  { slug: "plain-soda-750",     name: "Plain Soda 750 ml",     category: "sodas-soft-drinks", size: "750 ml", sku: "NTR-SOD-750", price: 30, mrp: 30, retailerPrice: 25, retailerNote: "per bottle", description: "Value-format plain soda for bars, restaurants and family use." },
  { slug: "jeera-masala-soda",  name: "Jeera Masala Soda",     category: "sodas-soft-drinks", image: jeera, gallery: [jeera], size: "300 ml", sku: "NTR-JEE-300", price: 20, mrp: 20, retailerPrice: 15, retailerNote: "per bottle", description: "Aromatic jeera masala fizz with the warmth of Indian spices.", features: ["Real jeera extract", "Crafted spice blend", "Naturally carbonated"] },
  { slug: "orange-soda",        name: "Orange Soda",           category: "sodas-soft-drinks", image: orange, gallery: [orange], size: "300 ml", sku: "NTR-ORG-300", price: 20, mrp: 20, retailerPrice: 15, retailerNote: "per bottle", description: "Bright, juicy orange soda — sunshine in a bottle.", features: ["Real orange concentrate", "Vivid citrus character", "Naturally carbonated"] },
  { slug: "limbu-pani-300",     name: "Limbu Pani",            category: "sodas-soft-drinks", size: "300 ml", sku: "NTR-LIM-300", price: 20, mrp: 20, retailerPrice: 15, retailerNote: "per bottle", description: "Refreshing limbu pani — zesty Indian lemonade with a cool fizz." },
  { slug: "lichi-soda-300",     name: "Lichi Soda",            category: "sodas-soft-drinks", size: "300 ml", sku: "NTR-LIC-300", price: 20, mrp: 20, retailerPrice: 15, retailerNote: "per bottle", description: "Aromatic lichi soda — sweet, floral and irresistibly refreshing." },

  // ===== TK Classic Tomato Ketchup =====
  { slug: "tomato-ketchup-100ml", name: "TK Classic Tomato Ketchup 100 g", category: "ketchup-sauces", image: ketchup100, gallery: [ketchup100, ketchup200, ketchup1L], size: "100 g", sku: "NTR-TKC-100", price: 40,  mrp: 40,  retailerPrice: 33, retailerNote: "per unit", description: "Travel-format classic tomato ketchup — slow-cooked, rich, balanced sweet-tangy.", features: ["Sun-ripened tomatoes", "100% natural product", "No artificial colour"] },
  { slug: "tomato-ketchup-200ml", name: "TK Classic Tomato Ketchup 200 g", category: "ketchup-sauces", image: ketchup200, gallery: [ketchup200, ketchup100, ketchup1L], size: "200 g", sku: "NTR-TKC-200", price: 80,  mrp: 80,  retailerPrice: 70, retailerNote: "per unit", description: "Everyday squeeze-bottle ketchup with bright tomato character.", features: ["Sun-ripened tomatoes", "100% natural product", "Squeeze PET bottle"] },
  { slug: "tomato-ketchup-1l",    name: "TK Classic Tomato Ketchup 1 L",   category: "ketchup-sauces", image: ketchup1L,  gallery: [ketchup1L, ketchup200, ketchup100], size: "1 L",   sku: "NTR-TKC-1L",  price: 130, mrp: 130, retailerPrice: 90, retailerNote: "per unit", description: "HoReCa & family-pack tomato ketchup — slow-cooked, rich, balanced.", features: ["Sun-ripened tomatoes", "100% natural product", "Bulk HoReCa format"] },
  { slug: "tk-regular-hd-1l",     name: "TK Regular HD 1 L",               category: "ketchup-sauces", image: ketchup1L, gallery: [ketchup1L], size: "1 L", sku: "NTR-TKR-1L", price: 110, mrp: 110, retailerPrice: 85, retailerNote: "per unit", description: "TK Regular HD tomato ketchup in HoReCa-friendly 1 L format." },

  // ===== Red Chilli Sauce =====
  { slug: "red-chilli-sauce-100ml", name: "Red Chilli Sauce 100 g", category: "ketchup-sauces", image: redChilli100, gallery: [redChilli100, redChilli200, redChilli1L], size: "100 g", sku: "NTR-RCS-100", price: 40,  mrp: 40,  retailerPrice: 33, retailerNote: "per unit", description: "Fiery red chilli sauce with deep colour and balanced heat." },
  { slug: "red-chilli-sauce-200ml", name: "Red Chilli Sauce 200 g", category: "ketchup-sauces", image: redChilli200, gallery: [redChilli200, redChilli100, redChilli1L], size: "200 g", sku: "NTR-RCS-200", price: 70,  mrp: 70,  retailerPrice: 60, retailerNote: "per unit", description: "Everyday red chilli sauce — bold heat and clean flavour." },
  { slug: "red-chilli-sauce-1l",    name: "Red Chilli Sauce 1 L",   category: "ketchup-sauces", image: redChilli1L,  gallery: [redChilli1L, redChilli200, redChilli100], size: "1 L",   sku: "NTR-RCS-1L",  price: 110, mrp: 110, retailerPrice: 85, retailerNote: "per unit", description: "HoReCa format red chilli sauce for restaurants and cloud kitchens." },

  // ===== Green Chilli Sauce =====
  { slug: "green-chilli-sauce-100ml", name: "Green Chilli Sauce 100 g", category: "ketchup-sauces", image: greenChilli100, gallery: [greenChilli100, greenChilli200, greenChilli1L], size: "100 g", sku: "NTR-GCS-100", price: 40,  mrp: 40,  retailerPrice: 33, retailerNote: "per unit", description: "Bright, tangy green chilli sauce — sharp heat, clean finish.", features: ["Hand-selected green chillies", "100% natural product", "Vegan & gluten-free"] },
  { slug: "green-chilli-sauce-200ml", name: "Green Chilli Sauce 200 g", category: "ketchup-sauces", image: greenChilli200, gallery: [greenChilli200, greenChilli100, greenChilli1L], size: "200 g", sku: "NTR-GCS-200", price: 70,  mrp: 70,  retailerPrice: 60, retailerNote: "per unit", description: "Everyday squeeze-bottle green chilli sauce with bold flavour.", features: ["Hand-selected green chillies", "100% natural product", "Squeeze PET bottle"] },
  { slug: "green-chilli-sauce-1l",    name: "Green Chilli Sauce 1 L",   category: "ketchup-sauces", image: greenChilli1L,  gallery: [greenChilli1L, greenChilli200, greenChilli100], size: "1 L",   sku: "NTR-GCS-1L",  price: 110, mrp: 110, retailerPrice: 85, retailerNote: "per unit", description: "HoReCa-format green chilli sauce for restaurants and cloud kitchens.", features: ["Hand-selected green chillies", "100% natural product", "Bulk HoReCa format"] },

  // ===== Soya Sauce =====
  { slug: "soya-sauce-100ml", name: "Soya Sauce 100 g", category: "ketchup-sauces", image: soya100, gallery: [soya100, soya200], size: "100 g", sku: "NTR-SOY-100", price: 40, mrp: 40, description: "Naturally brewed soya sauce with deep umami complexity.", features: ["Naturally brewed", "100% natural product"] },
  { slug: "soya-sauce-200ml", name: "Soya Sauce 200 g", category: "ketchup-sauces", image: soya200, gallery: [soya200, soya100], size: "200 g", sku: "NTR-SOY-200", price: 70, mrp: 70, retailerPrice: 60, retailerNote: "per unit", description: "Everyday soya sauce — rich umami, balanced salinity.", features: ["Naturally brewed", "100% natural product", "Squeeze PET bottle"] },

  // ===== Vinegar =====
  { slug: "vinegar-100ml", name: "White Vinegar 100 g", category: "ketchup-sauces", image: vinegar100, gallery: [vinegar100, vinegar200], size: "100 g", sku: "NTR-VIN-100", price: 30, mrp: 30, description: "Crisp culinary vinegar — clean acidity for Indian and continental cooking.", features: ["100% natural product", "Crystal clarity"] },
  { slug: "vinegar-200ml", name: "White Vinegar 200 g", category: "ketchup-sauces", image: vinegar200, gallery: [vinegar200, vinegar100], size: "200 g", sku: "NTR-VIN-200", price: 60, mrp: 60, retailerPrice: 50, retailerNote: "per unit", description: "Everyday white vinegar with a soft, rounded acidity.", features: ["100% natural product", "Crystal clarity", "Squeeze PET bottle"] },

  // ===== Sachet =====
  { slug: "sachet-pouch-10g", name: "Sauce Sachet Pouch 10 g", category: "ketchup-sauces", image: sachet10g, gallery: [sachet10g], size: "10 g", sku: "NTR-SCH-10", price: 2, mrp: 2, retailerPrice: 2, retailerNote: "per sachet", description: "Single-serve sauce sachet — HoReCa, takeaway and delivery friendly." },

  // ===== Jams, juices, chutneys =====
  { slug: "pineapple-jam",   name: "Pineapple Jam",      category: "jams-juices", image: pineappleJam, gallery: [pineappleJam], size: "400 g", sku: "NTR-PJM-400", price: 99,  mrp: 99,  retailerPrice: 75, retailerNote: "per jar", description: "Tropical pineapple preserve, slow-cooked with real fruit chunks.", features: ["Real pineapple chunks", "No artificial colour", "Premium glass jar"] },
  { slug: "schezwan-chutney",name: "Schezwan Chatni",    category: "jams-juices", image: schezwan,     gallery: [schezwan],     size: "300 g", sku: "NTR-SZC-300", price: 110, mrp: 110, description: "Signature Indo-Schezwan chutney — fiery, garlicky, addictive.", features: ["Bold Schezwan flavour", "Premium dry red chillies", "Vegan & gluten-free"] },
  
  { slug: "pineapple-juice-200ml", name: "Pineapple Juice 200 ml", category: "jams-juices", size: "200 ml", sku: "NTR-PJU-200", description: "Refreshing tropical pineapple juice in the convenient 200 ml format." },

  // ===== Fresh produce & RTE =====
  { slug: "papaya", name: "Premium Papaya", category: "fresh-fruits", image: papaya, gallery: [papaya], size: "Per kg", sku: "NTR-PAP-KG", price: 60, mrp: 60, description: "Hand-picked tropical papaya, graded and washed for retail and HoReCa.", features: ["Hand-graded", "Cold-chain logistics", "Available in bulk crates"] },
  { slug: "ready-to-eat-tray", name: "Ready-to-Eat Vegetable Tray", category: "ready-to-eat", image: readyToEat, gallery: [readyToEat], size: "300 g", sku: "NTR-RTE-300", price: 99, mrp: 99, description: "Pre-cut, washed and tray-packed fresh vegetables — kitchen-ready.", features: ["Triple-washed", "Microwaveable tray", "Cold-chain delivered"] },
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
