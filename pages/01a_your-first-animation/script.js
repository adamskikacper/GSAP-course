import gsap from "gsap";

gsap.to(".card", {
 scale: 0.5,

 ease: "power1.inOut",

 onComplete: () => {
  gsap.to(".card", {
   y: -50,
   repeat: -1,
   yoyo: true,
   duration: 5,
   ease: "power1.inOut",
  });

  gsap.to(".card", {
   duration: 1,
   ease: "power1.inOut",
   boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
   repeat: -1,
   duration: 5,
   yoyo: true,
  });
 },
});
