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
  .fromTo(
    h1,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1 },
    "<10%"
  )
  .fromTo(heart, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "<15%")
  .fromTo(
    heart,
    { x: -15 },
    {
      x: 0,
      filter:
        "invert(14%) sepia(38%) saturate(3251%) hue-rotate(194deg) brightness(81%) contrast(105%)",
      ease: "bounce.in",
      repeat: 2,
      repeatDelay: 0.5,
      duration: 0.4,
    }
  )
  .to(heart, { filter: "none" }, "<80%");

const videoPlayer = document.querySelector(".video-container");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");

const buttonTl = gsap
  .timeline({
    defaults: { duration: 1, ease: "power2.out" },
  })
  .pause()

  .fromTo(
    playButton,
    { outlineOffset: "2rem", outline: "3px solid var(--accent-color)" },
    { outlineOffset: "0", boxShadow: "0 0 0 30px rgba(204, 12, 47,0.6)" }
  )
  .fromTo(playButton, { scale: 1, opacity: 1 }, { scale: 0.5, opacity: 0 });

playButton.addEventListener("click", (e) => {
  console.log("click");
  if (video.paused) {
    video.play();
    e.target.textContent = "⏸️";
    buttonTl.play();
  } else {
    video.pause();
    e.target.textContent = "▶";
    buttonTl.reverse();
  }
});
