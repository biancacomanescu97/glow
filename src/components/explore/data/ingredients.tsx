type Ingredient = {
  name: string;
  href: string;
  imgUrl: string;
  imgAlt: string;
  description: string[];
};

const AHA: Ingredient = {
  name: "Alpha Hydroxy Acid (AHA)",
  href: "aha",
  imgUrl: "/assets/img/explore/AHA.png",
  imgAlt: "Alpha Hydroxy Acid (AHA)",
  description: ["fruit and plant extracts derived chemical exfoliants", 
  "water-soluble, which means that they work on the surface layer of the skin", 
  "helpful in sweeping away flaky patches"]
};

const BHA: Ingredient = {
  name: "Beta Hydroxy Acid (BHA)",
  href: "bha",
  imgUrl: "/assets/img/explore/BHA.png",
  imgAlt: "Beta Hydroxy Acid (BHA)",
  description: ["oil-soluble acids that can reach into the oiliest part of our skin, like our hair follicles and pores",
  "soak up the excess buildup of sebum and oils from within the pore (that would otherwise clog up and become a pimple)",
  "calm down inflammation",
  "minimize the appearance of enlarged pores"]
};

const PHA: Ingredient = {
  name: "Polyhydroxy Acid (PHA)",
  href: "pha",
  imgUrl: "/assets/img/explore/PHA.png",
  imgAlt: "Polyhydroxy Acid (PHA)",
  description: ["unlike AHAs, PHAs have larger molecular sizes, which makes them gentle and wonderful alternatives",
  "are considered as the next generation of AHAs",
  "work on exfoliating the uppermost layers of skin to smooth out skin texture"]
};

const exfoliants: Ingredient[] = [AHA, BHA, PHA];


const BT: Ingredient = {
  name: "Black Tea",
  href: "blacktea",
  imgUrl: "/assets/img/explore/Black Tea.png",
  imgAlt: "Black Tea",
  description: ["To be added"]
};

const GT: Ingredient = {
  name: "Green Tea",
  href: "greentea",
  imgUrl: "/assets/img/explore/Green Tea.png",
  imgAlt: "Green Tea",
  description: ["To be added"]
};

const Mugwort: Ingredient = {
  name: "Mugwort",
  href: "mugwort",
  imgUrl: "/assets/img/explore/Mugwort.png",
  imgAlt: "Mugwort",
  description: ["To be added"]
};

const teas: Ingredient[] = [BT, Mugwort, GT];

const CICA: Ingredient = {
  name: "Centella asiatica",
  href: "centellaasiatica",
  imgUrl: "/assets/img/explore/Cica.png",
  imgAlt: "Centella asiatica (CICA)",
  description: ["To be added"]
};

const Ginseng: Ingredient = {
  name: "Ginseng",
  href: "ginseng",
  imgUrl: "/assets/img/explore/Ginseng.png",
  imgAlt: "Ginseng",
  description: ["To be added"]
};

const Propolis: Ingredient = {
  name: "Propolis",
  href: "propolis",
  imgUrl: "/assets/img/explore/Propolis.png",
  imgAlt: "Propolis",
  description: ["To be added"]
};

const power: Ingredient[] = [CICA, Ginseng, Propolis];


const A: Ingredient = {
  name: "Retinoids/Retinol (Vitamin A)",
  href: "vitamina",
  imgUrl: "/assets/img/explore/A.png",
  imgAlt: "Retinoids/Retinol (Vitamin A)",
  description: ["To be added"]
};

const B: Ingredient = {
  name: "Niacinamide (Vitamin B)",
  href: "vitaminb",
  imgUrl: "/assets/img/explore/B.png",
  imgAlt: "Niacinamide (Vitamin B)",
  description: ["To be added"]
};

const C: Ingredient = {
  name: "Ascorbic acid (Vitamin C)",
  href: "vitaminc",
  imgUrl: "/assets/img/explore/C.png",
  imgAlt: "Ascorbic acid (Vitamin C)",
  description: ["To be added"]
};

const abc: Ingredient[] = [A, B, C];

export {abc, exfoliants, power, teas};