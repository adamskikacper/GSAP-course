import gsap from "gsap";

const tl = gsap.timeline();

tl
 .fromTo(
  ".card[data-id='1']",
  { y: -100, opacity: 0 },
  {
   y: 0,
   duration: 1,
   opacity: 1,
  }
 )
 .fromTo(
  ".card[data-id='2']",
  {
   y: -100,
   opacity: 0,
  },
  {
   y: 0,
   duration: 1,
   opacity: 1,
  }
 );
