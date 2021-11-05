type Ingredient = {
  name: string;
  href: string;
  description: string[];
};

const AHA: Ingredient = {
  name: "Alpha Hydroxy Acid (AHA)",
  href: "AHA",
  description: ["fruit and plant extracts derived chemical exfoliants", 
  "water-soluble, which means that they work on the surface layer of the skin", 
  "helpful in sweeping away flaky patches"]
};

const BHA: Ingredient = {
  name: "Beta Hydroxy Acid (BHA)",
  href: "BHA",
  description: ["oil-soluble acids that can reach into the oiliest part of our skin, like our hair follicles and pores",
  "soak up the excess buildup of sebum and oils from within the pore (that would otherwise clog up and become a pimple)",
  "calm down inflammation",
  "minimize the appearance of enlarged pores"]
};

const PHA: Ingredient = {
  name: "Polyhydroxy Acid (PHA)",
  href: "PHA",
  description: ["unlike AHAs, PHAs have larger molecular sizes, which makes them gentle and wonderful alternatives",
  "are considered as the next generation of AHAs",
  "work on exfoliating the uppermost layers of skin to smooth out skin texture"]
};

const exfoliants: Ingredient[] = [AHA, BHA, PHA];


const BT: Ingredient = {
  name: "Black Tea",
  href: "BT",
  description: ["To be added"]
};

const CICA: Ingredient = {
  name: "Centella asiatica (CICA)",
  href: "CICA",
  description: ["To be added"]
};

const GINSENG: Ingredient = {
  name: "Ginseng",
  href: "GINSENG",
  description: ["very high levels of vitamins, minerals, and antioxidants, as well as anti-aging properties",
  "bioactive compounds: saponins, pantothenic acid, polysaccharides, and vitamins B1, B2, and B12",
  "saponins help prevent UV-caused hyperpigmentation and wrinkles",
  "pantothenic acid helps retain skin’s moisture and calm inflammation"]
};



const A: Ingredient = {
  name: "Retinoids/Retinol (Vitamin A)",
  href: "A",
  description: ["To be added"]
};

const B: Ingredient = {
  name: "Niacinamide (Vitamin B)",
  href: "B",
  description: ["To be added"]
};

const C: Ingredient = {
  name: "Vitamin C",
  href: "C",
  description: ["To be added"]
};

const abc: Ingredient[] = [A, B, C];


const ingredients: Ingredient[] = [AHA, BHA, PHA, A, B, C];

export default exfoliants;
