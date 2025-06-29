import gsap from "gsap";
gsap.from(".box", {
 boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
 duration: 3,
 scale: 0.25,
 rotate: 360,
 opacity: 0.5,
 repeat: -1,
 y: -200,
 stagger: 0.2,
 ease: "bounce",
});
