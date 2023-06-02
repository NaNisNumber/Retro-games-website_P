import React from "react";

const navLinkData = () => {
  const linkData = [
    {
      destination: "/Retro-games-website_P",
      iconName: "home",
      active: "gaming__navbar-link-active",
      text: "Home",
    },
    {
      destination: "/Retro-games-website_P/shop",
      iconName: "game-controller",
      active: "gaming__navbar-link-active",
      text: "Games",
    },
    {
      destination: "/Retro-games-website_P/wishlist",
      iconName: "heart",
      active: "gaming__navbar-link-active",
      text: "Wish List",
    },

    {
      destination: "/Retro-games-website_P/contact",
      iconName: "call",
      active: "gaming__navbar-link-active",
      text: "Contact",
    },
  ];

  return linkData;
};

export default navLinkData;
