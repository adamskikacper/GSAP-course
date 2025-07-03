import gsap from "gsap";

gsap.set(".gsap-box", {
 y: 100,
 opacity: 0,
});

gsap.to(".gsap-box", {
 y: 0,
 opacity: 1,
 duration: 1,
 ease: "power1.inOut",
});
