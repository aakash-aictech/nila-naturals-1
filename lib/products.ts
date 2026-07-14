export type Product = {
  id: string;
  name: string;
  tamilNote?: string;
  price: number;
  size: string;
  category: "Skincare" | "Body Care" | "Food";
  description: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "nalangu-powder",
    name: "Nalangu Herbal Bath Powder",
    tamilNote: "Nalangu Maavu",
    price: 109,
    size: "100g",
    category: "Skincare",
    description:
      "A traditional wedding-ritual bath powder blended with turmeric, almonds and rose petals. Works as a natural deodorant and gentle exfoliant, suitable for women, kids and babies.",
    image: "/products/nalangu-powder-1.jpeg",
    imageAlt: "Nila Naturals Herbal Bath Powder (Nalangu Maavu) pouch resting on dried vetiver roots, rose petals and almonds",
  },
  {
    id: "skin-whitening-powder",
    name: "Skin Whitening Powder",
    price: 198,
    size: "100g",
    category: "Skincare",
    description:
      "A gentle brightening blend of traditional botanicals slow-dried and stone-ground, made to even tone and restore a natural glow.",
    image: "/products/skin-whitening-powder.jpeg",
    imageAlt: "Nila Naturals Skin Whitening Powder pouch surrounded by dried rose and marigold petals",
  },
  {
    id: "kadukkai-powder",
    name: "Kadukkai Powder",
    price: 80,
    size: "100g",
    category: "Skincare",
    description:
      "Sun-dried and finely milled kadukkai (black myrobalan), a staple of Tamil skincare tradition, cherished for its clarifying, anti-ageing properties.",
    image: "/products/kadukkai-powder.jpeg",
    imageAlt: "Nila Naturals Kadukkai Powder pouch on fresh green grass",
  },
  {
    id: "avarampoo-powder",
    name: "AvaramPoo Powder",
    tamilNote: "Aavarampoo",
    price: 140,
    size: "100g",
    category: "Skincare",
    description:
      "Golden avaram flowers, sun-dried and ground by hand — a beloved Tamil household remedy for soft, blemish-free skin.",
    image: "/products/avarampoo-powder.jpeg",
    imageAlt: "Nila Naturals AvaramPoo Powder pouch on a bed of dried avaram flowers",
  },
  {
    id: "rose-powder",
    name: "Rose Petal Powder",
    price: 79,
    size: "50g",
    category: "Skincare",
    description:
      "Fragrant rose petals, dried slowly and stone-ground into a silky powder that soothes, cools and naturally perfumes the skin.",
    image: "/products/rose-powder.jpeg",
    imageAlt: "Nila Naturals Rose Powder pouch resting on a bed of dried rose petals",
  },
  {
    id: "skin-glow-oil",
    name: "Skin Glow Oil",
    price: 249,
    size: "30ml",
    category: "Skincare",
    description:
      "A cold-pressed botanical oil blend for brightness and glow — reduces the look of wrinkles, pimples and tan. Suitable for all skin types, for both men and women.",
    image: "/products/skin-glow-oil-1.jpeg",
    imageAlt: "Amber glass dropper bottle of Nila Naturals Skin Glow Oil resting on green grass",
  },
  {
    id: "handmade-soap",
    name: "Handmade Organic Soap",
    price: 80,
    size: "~100g bar",
    category: "Body Care",
    description:
      "Cold-processed the traditional way with natural herbs and oils, cured slowly for a mild, skin-loving everyday bar.",
    image: "/products/handmade-soap-1.jpeg",
    imageAlt: "Two bars of Nila Naturals handmade organic soap wrapped and labelled",
  },
  {
    id: "idli-powder",
    name: "Murungai Karuveppilai Idly Powder",
    price: 155,
    size: "250g",
    category: "Food",
    description:
      "A nourishing everyday podi made from moringa leaves and curry leaves, stone-ground for a wholesome, healthy breakfast staple.",
    image: "/products/moringa-idli-powder.jpeg",
    imageAlt: "Nila Naturals Murungai Karuveppilai Idli Powder pouch framed by fresh moringa and curry leaves",
  },
  {
    id: "kulambu-milagai-powder",
    name: "Kulambu Milagai Powder",
    price: 57,
    size: "100g",
    category: "Food",
    description:
      "A robust roasted spice blend for everyday kulambu, ground fresh in small batches the way our grandmothers did.",
    image: "",
    imageAlt: "",
  },
];

export const categories = [
  {
    name: "Skincare",
    description: "Herbal powders and oils for face & body glow",
    image: "/products/skin-whitening-powder.jpeg",
  },
  {
    name: "Body Care",
    description: "Handmade soaps, cold-processed the traditional way",
    image: "/products/handmade-soap-2.jpeg",
  },
  {
    name: "Herbal Powders",
    description: "Kadukkai, Avarampoo, Rose & Nalangu blends",
    image: "/products/avarampoo-raw.jpeg",
  },
  {
    name: "Food Products",
    description: "Wholesome podis for the everyday Tamil kitchen",
    image: "/products/moringa-idli-powder.jpeg",
  },
];

export const ingredients = [
  { name: "Turmeric", tamil: "Manjal", note: "Antiseptic & brightening" },
  { name: "Rose", tamil: "Roja", note: "Soothing & fragrant" },
  { name: "Avarampoo", tamil: "Aavaram Poo", note: "Clarifies & softens" },
  { name: "Kadukkai", tamil: "Kadukkai", note: "Anti-ageing tonic" },
  { name: "Curry Leaves", tamil: "Karuveppilai", note: "Nourishing & mineral-rich" },
  { name: "Moringa", tamil: "Murungai", note: "Vitamin-packed superfood" },
];

export const testimonials = [
  {
    name: "Priya S.",
    location: "Coimbatore",
    quote:
      "The nalangu maavu smells exactly like the one my grandmother used to make. My skin feels so much softer within a week.",
    rating: 5,
  },
  {
    name: "Lakshmi R.",
    location: "Chennai",
    quote:
      "Skin glow oil has become part of my night routine. A little goes a long way and the glow is real, not just marketing.",
    rating: 5,
  },
  {
    name: "Meena K.",
    location: "Madurai",
    quote:
      "I buy the murungai idly podi every month now — my kids actually ask for it. Good to know exactly what's inside.",
    rating: 5,
  },
  {
    name: "Divya M.",
    location: "Salem",
    quote:
      "The avarampoo powder cleared up my skin more gently than anything store-bought I've tried. Ordering again for my mother.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Are Nila Naturals products 100% organic and chemical-free?",
    a: "Yes. Every product is handmade in small batches using traditional recipes, sun-dried herbs and stone-ground powders — with no synthetic fragrances, parabens or fillers.",
  },
  {
    q: "Are these products suitable for babies and sensitive skin?",
    a: "Our Nalangu Herbal Bath Powder is specially formulated to be gentle enough for women, kids and babies. If you have specific skin sensitivities, we recommend a small patch test first.",
  },
  {
    q: "How should I store the herbal powders?",
    a: "Keep pouches sealed in a cool, dry place away from direct sunlight. Since there are no artificial preservatives, use within the recommended period for best freshness.",
  },
  {
    q: "How can I place an order?",
    a: "Reach out to us directly on WhatsApp or Instagram — we'll help you choose the right products and share simple payment and delivery details.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes, we package every order carefully by hand and ship across India. Message us on WhatsApp for delivery timelines to your location.",
  },
];

export const whyChooseUs = [
  { title: "100% Natural", note: "Every ingredient traceable to the earth" },
  { title: "Chemical Free", note: "No parabens, sulphates or synthetic scent" },
  { title: "Handmade", note: "Small batches, crafted by hand at home" },
  { title: "Traditional Recipes", note: "Passed down, not invented in a lab" },
  { title: "Eco Friendly", note: "Minimal, thoughtful packaging" },
  { title: "Made in Tamil Nadu", note: "Rooted in local soil & tradition" },
];
