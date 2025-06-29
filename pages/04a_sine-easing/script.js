import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");
let isFloating = false;

window.addEventListener("scroll", () => {
 if (window.scrollY > 500) {
  button.classList.add("show");
  if (!isFloating) {
   gsap.to(button, {
    y: -20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
   });
  }

  isFloating = true;
 } else {
  button.classList.remove("show");
 }
});

button.addEventListener("click", () => {
 window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
 });
});

button.addEventListener("mouseenter", () => {
 gsap.to(button, {
  scale: 1.2,
 });
});

button.addEventListener("mouseleave", () => {
 gsap.to(button, {
  scale: 1,
 });
});
