import gsap from "gsap";

const tl = gsap.timeline();

tl.to(".card[data-id='1']", {
 y: 100,
 duration: 2,
 opacity: 1,
 ease: "power1.out",
});

tl.to(".card[data-id='2']", {
 y: 100,
 duration: 1,
 opacity: 1,
 ease: "power1.out",
});
