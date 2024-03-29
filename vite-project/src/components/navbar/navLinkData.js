import React from "react";

const navLinkData = () => {
  const linkData = [
    {
      destination: "/",
      iconName: "home",
      active: "gaming__navbar-link-active",
      text: "Home",
    },
    {
      destination: "/shop",
      iconName: "game-controller",
      active: "gaming__navbar-link-active",
      text: "Games",
    },
    {
      destination: "/wishlist",
      iconName: "heart",
      active: "gaming__navbar-link-active",
      text: "Wish List",
    },

    {
      destination: "/contact",
      iconName: "call",
      active: "gaming__navbar-link-active",
      text: "Contact",
    },
  ];

  return linkData;
};

export default navLinkData;
