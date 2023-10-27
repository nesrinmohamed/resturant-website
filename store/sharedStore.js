import { defineStore } from "pinia";
import RoutesManager from "~/core/RoutesManager";
import { ref } from "vue";
import AssetsManager from "~/core/AssetsManager";
export const useSharedStore = defineStore("shared", () => {
  // ======IMPORT  ==========
  // ======= STATE==========

  const navLinks = ref([
    { path: RoutesManager.home, name: "home", chaked: false },
    { path: RoutesManager.burger, name: "burger", chaked: false },
    { path: RoutesManager.others, name: "others", chaked: true },
    { path: RoutesManager.aboutUs, name: "about us", chaked: false },
    { path: RoutesManager.contactUs, name: "contact us", chaked: false },
  ]);

  const offers = ref([
    { img: AssetsManager.Offer_Img_1, title: "Burger 50% off" },
    { img: AssetsManager.Offer_Img_2, title: "Free Delivery" },
    { img: AssetsManager.Offer_Img_3, title: "Burger Free Fries" },
    { img: AssetsManager.Offer_Img_4, title: "Burger with free cold drink" },
  ]);

  const cards = ref({
    card_item_1: [
      {
        img_bg: AssetsManager.Card_1,
        title: "Humbarger",
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        img_bg: AssetsManager.Card_2,
        title: "Pizza",
        description: "Lorem ipsum dolor sit amet.",
      },
    ],

    card_item_2: [
      {
        img_bg: AssetsManager.Card_3,
        title: "Italian pizza",
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        img_bg: AssetsManager.Card_4,
        title: "Fried Chicken",
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        img_bg: AssetsManager.Card_5,
        title: "Chesse Burger",
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  });

  const BurgerList = ref([
    {
      id: 1,
      img: AssetsManager.burger_1,
      title: "tasty burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "10.50",
    },
    {
      id: 2,
      img: AssetsManager.burger_2,
      title: "onion burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "5.50",
    },
    {
      id: 3,
      img: AssetsManager.burger_3,
      title: "classic burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "3.60",
    },
    {
      id: 4,
      img: AssetsManager.burger_4,
      title: "best burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "6.50",
    },
    {
      id: 5,
      img: AssetsManager.burger_5,
      title: "chesse burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "10.50",
    },
    {
      id: 6,
      img: AssetsManager.burger_6,
      title: "tasty burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "2.50",
    },
    {
      id: 7,
      img: AssetsManager.burger_7,
      title: "chesse burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "30.50",
    },
    {
      id: 8,
      img: AssetsManager.burger_8,
      title: "delicious b",
      description: "Lorem ipsum dolor sit amet.",
      price: "10.50",
    },
  ]);

  const pizza = ref([
    AssetsManager.pizza_img_1,
    AssetsManager.pizza_img_2,
    AssetsManager.pizza_img_3,
  ]);
  const items = ref([
    { title: "Pizza" },
    { title: "Fries" },
    { title: "Fried Checken" },
  ]);

  // ======FOOTER LINKS =========
  const footerLinks = ref({
    usefulLinks: {
      name: "useful links",
      links: [
        { path: RoutesManager.home, name: "home" },
        { path: RoutesManager.aboutUs, name: "about" },
        { path: RoutesManager.contactUs, name: "contact" },
        { path: RoutesManager.services, name: "services" },
        { path: RoutesManager.privacyPolicy, name: "privacy policy" },
      ],
    },
    ourservices: {
      name: "our services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam. ",
      links: [
        { path: RoutesManager.burger, name: "pizza" },
        { path: RoutesManager.burger, name: "fries chicken" },
        { path: RoutesManager.burger, name: "fries" },
      ],
    },
  });

  const socialLinks = ref({
    name: "our social links",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam. ",
    links: [
      { icon: "mdi mdi-twitter", href: "https://twitter.com" },
      { icon: "mdi mdi-facebook", href: "https://facebook.com" },
      { icon: "mdi mdi-google-plus", href: "https://google.com" },
      { icon: "mdi mdi-instagram", href: "https://instgram.com" },
      { icon: "mdi mdi-linkedin", href: "https://linkedin.com" },
    ],
  });
  // ======= MUTATIONS======

  const pizzaCards = ref([
    {
      id: 1,
      img: AssetsManager.p1_1,
      title: "tasty burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "10.50",
    },
    {
      id: 2,
      img: AssetsManager.p2_2,
      title: "onion burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "5.50",
    },
    {
      id: 3,
      img: AssetsManager.p3_3,
      title: "classic burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "3.60",
    },
    {
      id: 4,
      img: AssetsManager.p4_4,
      title: "best burger",
      description: "Lorem ipsum dolor sit amet.",
      price: "6.50",
    },
  ]);
  //========ACTIONS========

  //   ====== RETURN ======
  return {
    navLinks,
    offers,
    cards,
    BurgerList,
    pizza,
    pizzaCards,
    items,
    footerLinks,
    socialLinks,
  };
});
