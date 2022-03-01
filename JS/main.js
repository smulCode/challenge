const textContent = document.querySelector(".text-content");
const whiteBlock = document.querySelector(".white-block");
const heroImg = document.querySelector(".hero-img");
const overLay = document.querySelector(".overlay");
const heart = document.querySelector(".heart");
const h1 = document.querySelectorAll("h1");

const masterTl = gsap
  .timeline({
    defaults: { duration: 1, ease: "power2.out" },
  })

  .fromTo(textContent, { opacity: 0 }, { opacity: 1 })
  .fromTo(heroImg, { opacity: 0, width: "80%" }, { opacity: 1, width: "100%" })
  .fromTo(whiteBlock, { x: "50%" }, { x: "90%" }, "<")
  .fromTo(overLay, { opacity: 0 }, { opacity: 1 }, "<80%")
  .fromTo(h1, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "<50%")
  .fromTo(heart, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<")
  .fromTo(
    heart,
    { x: -10 },
    {
      x: 0,
      filter:
        "invert(14%) sepia(38%) saturate(3251%) hue-rotate(194deg) brightness(81%) contrast(105%)",
      ease: "elastic.out(2.5, 0.2)",
      repeat: 2,
    }
  )
  .to(heart, { filter: "none" }, "<80%");
