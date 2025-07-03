import gsap from "gsap";

const reactions = document.querySelectorAll("[data-emoji]");
gsap.set(reactions, {
 y: 150,
 scale: 0.5,
});

gsap.to(reactions, {
 y: 0,
 duration: 3,
 scale: 1,
 ease: "power1.inOut",
});

const randomRotation = () => {
 return Math.random() * 160 - 80;
};

reactions.forEach((reaction) => {
 reaction.addEventListener("click", () => {
  gsap.fromTo(
   reaction,
   {
    y: 0,
   },
   {
    y: -30,
    rotate: randomRotation,
    opacity: 0,
    duration: 0.5,
    ease: "power1.inOut",
    onComplete: () => {
     gsap.to(reaction, {
      y: 0,
      duration: 1,
      rotate: 0,
      opacity: 1,
      ease: "power1.out",
     });
    },
   }
  );
 });
});
