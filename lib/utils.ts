export const categoryMenuList = [
  {
    id: 1,
    title: "Indian Long Skirts",
    src: "/Indian Long Skirts.png",
    href: "/shop/indian-long-skirts"
  },
  {
    id: 2,
    title: "Salwar Kameez",
    src: "/Salwar Kameez.png",
    href: "/shop/Salwar Kameez"
  },
  {
    id: 3,
    title: "Lehenga Choli",
    src: "/Lehenga Choli.png",
    href: "/shop/Lehenga Choli"
  },
  {
    id: 4,
    title: "Layered Jackets with Long Skirts",
    src: "/Layered Jackets with Long Skirts.png",
    href: "/shop/Layered Jackets with Long Skirts"
  },
  {
    id: 5,
    title: "Kurta with Palazzo",
    src: "/Kurta with Palazzo.png",
    href: "/shop/Kurta with Palazzo"
  },
  {
    id: 6,
    title: "Indo-Western Clothing",
    src: "/Indo-Western Clothing.png",
    href: "/shop/Indo-Western Clothing"
  },
  {
    id: 7,
    title: "Indian Gown",
    src: "/Indian Gown.png",
    href: "/shop/Indian Gown"
  },
  {
    id: 8,
    title: "Banarasi Kurta",
    src: "/Banarasi Kurta.png",
    href: "/shop/Banarasi Kurta.png"
  },
 
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About RyuuCollections", href: "#" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "RyuuCollections Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at Ryuucollections", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
