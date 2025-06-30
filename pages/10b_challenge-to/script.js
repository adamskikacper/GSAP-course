import { gsap } from "gsap";

const toastOne = document.querySelector(".toast.one");
const toastTwo = document.querySelector(".toast.two");

const tl = gsap.timeline();

gsap.set([toastOne, toastTwo], { y: 100, opacity: 0 }); // Start them below and invisible

tl
 .to(toastOne, {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "back.out(1.7)",
 })
 .to(toastOne, {
  opacity: 0,
  y: -50,
  duration: 0.5,
  ease: "power1.in",
  delay: 1,
 })

 .to(
  toastTwo,
  {
   y: 0,
   opacity: 1,
   duration: 0.5,
   ease: "back.out(1.7)",
  },
  "-=0.2"
 )
 .to(toastTwo, {
  opacity: 0,
  y: -50,
  duration: 0.5,
  ease: "power1.in",
  delay: 1,
 });
