// Optional: Random glitch burst effect
const glitch = document.querySelector(".glitch");

function triggerGlitch() {
  glitch.classList.add("active");
  setTimeout(() => glitch.classList.remove("active"), 150);
}

setInterval(() => {
  if (Math.random() > 0.8) triggerGlitch();
}, 350);
