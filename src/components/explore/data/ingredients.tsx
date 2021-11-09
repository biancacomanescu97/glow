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
  imgUrl: "/assets/img/explore/aha.png",
  imgAlt: "Alpha Hydroxy Acid (AHA)",
  description: ["fruit and plant extracts derived chemical exfoliants", 
  "water-soluble, which means that they work on the surface layer of the skin", 
  "helpful in sweeping away flaky patches"]
};

const BHA: Ingredient = {
  name: "Beta Hydroxy Acid (BHA)",
  href: "bha",
  imgUrl: "/assets/img/explore/bha.png",
  imgAlt: "Beta Hydroxy Acid (BHA)",
  description: ["oil-soluble acids that can reach into the oiliest part of our skin, like our hair follicles and pores",
  "soak up the excess buildup of sebum and oils from within the pore (that would otherwise clog up and become a pimple)",
  "calm down inflammation",
  "minimize the appearance of enlarged pores"]
};

const PHA: Ingredient = {
  name: "Polyhydroxy Acid (PHA)",
  href: "pha",
  imgUrl: "/assets/img/explore/pha.png",
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
  imgUrl: "/assets/img/explore/GreenTea.png",
  imgAlt: "Green Tea",
  description: ["great source of antioxidants for your body and skin",
  "rich in flavonoids, including a unique compound known as EGCG (epigallocatechin-3 gallate)",
  "calming inflammation and regulating sebum production",
  "contains tannins, which can act like astringents to reduce the appearance of large pores",
  "wonderful beverage that helps combat stress, strengthens mental focus, and boosst the immune system."]
};

const Mugwort: Ingredient = {
  name: "Mugwort",
  href: "mugwort",
  imgUrl: "/assets/img/explore/Mugwort.png",
  imgAlt: "Mugwort",
  description: ["potent ingredient that calms inflamed skin and repairs the skin barrier",
  "antibacterial, antifungal, and anti-inflammatory properties",
  "antioxidants that can prevent signs of premature aging from UV damage",
  "can be consumed as a tea to ease menstrual cramps, stimulate appetite, or relieve stomach discomfort",
  "is a member of the ragweed family which can potentially cause allergies for some",
  "for pregnant women, mugwort is definitely not recommended"]
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
  description: ["very high levels of vitamins, minerals, and antioxidants, as well as anti-aging properties",
  "bioactive compounds: saponins, pantothenic acid, polysaccharides, and vitamins B1, B2, and B12",
  "saponins help prevent UV-caused hyperpigmentation and wrinkles",
  "pantothenic acid helps retain skin’s moisture and calm inflammation"]
};

const Propolis: Ingredient = {
  name: "Propolis",
  href: "propolis",
  imgUrl: "/assets/img/explore/Propolis.png",
  imgAlt: "Propolis",
  description: ["is a natural resinous mixture that honeybees produce to construct and repair their hives",
  "help soothe, moisturize, and soften dry and chapped skin",
  "has antimicrobial, antiviral, antifungal, and anti-inflammatory properties",
  "rich source of antioxidants and great for healing wounds",
  "can help kill off acne-causing bacteria, repair the skin barrier, fight free radical damage, and even regulate sebum production"]
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
  imgUrl: "/assets/img/explore/B(1).png",
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