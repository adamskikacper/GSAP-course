import gsap from "gsap";
const toast = document.querySelector(".toast");
const showToastLoop = () => {
 gsap.to(toast, {
  y: -120,
  opacity: 1,
  ease: "expo",
  duration: 2,

  onComplete: function dupa() {
   gsap.to(toast, {
    delay: 2,
    y: 100,
    ease: "power1.in",

    onComplete: function dupa() {
     showToastLoop();
    },
   });
  },
 });

 gsap.fromTo(
  ".bell",
  { rotate: 20, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" },
  { rotate: -20, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" }
 );
};

showToastLoop();

toast.addEventListener("mouseenter", () => {
 gsap.to(toast, {
  scale: 1.05,
 });
});

toast.addEventListener("mouseleave", () => {
 gsap.to(toast, {
  scale: 1,
 });
});
