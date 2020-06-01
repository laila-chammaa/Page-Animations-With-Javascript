const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const burger = document.querySelector(".burger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();
tl.fromTo(hero, 0.8, { height: "0%" }, { height: "90%" })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "86%", ease: Power2.easeInOut }
  )

  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(burger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");
