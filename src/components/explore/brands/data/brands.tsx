type Brand = {
  name: string;
  href: string;
};

const BJ: Brand = {
  name: "Beauty of Joseon",
  href: "BJ"
};

const COSRX: Brand = {
  name: "COSRX",
  href: "COSRX"
};

const Fresh: Brand = {
  name: "Fresh",
  href: "Fresh"
};

const brands: Brand[] = [BJ, COSRX, Fresh];

export default brands;
