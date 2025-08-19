function navanimation(){
  let navbar = document.querySelector("nav");
navbar.addEventListener("mouseenter", () => {
  let tl = gsap.timeline();
  tl.to(".nav-bottom", {
    height: "21vh",
    // duration: 0.4,
  });
  tl.to(".menu h5", {
    display: "block",
  });
  tl.to(".menu h5 span", {
    y: 0,
    stagger: 0.1,
  });
});

navbar.addEventListener("mouseleave", () => {
  let tl = gsap.timeline();
  tl.to(".menu h5 span", {
    y: 25,
    stagger: {
      amount: 0.2,
    },
  });
  tl.to(".nav-bottom", {
    height: "0vh",
  });
  tl.to(".menu h5", {
    display: "none",
    duration: 0.1,
  });
});
}
navanimation();