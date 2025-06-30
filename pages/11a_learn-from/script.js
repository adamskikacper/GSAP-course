import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
 y: 60,
 opacity: 0,
 stagger: 0.2,
});

repeat.addEventListener("click", () => {
 animation.restart();
});
