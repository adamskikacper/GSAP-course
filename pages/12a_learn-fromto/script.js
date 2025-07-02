import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
 gsap.fromTo(
  bar,
  {
   scaleY: 0.4,
   scaleX: 0.9,
  },
  {
   scaleY: 1,
   scaleX: 1,
   repeat: -1,
   yoyo: true,
   ease: "expo.s",
   delay: index * -1 * 0.1,
  }
 );
});
