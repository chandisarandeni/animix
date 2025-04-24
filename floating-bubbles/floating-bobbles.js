document.querySelectorAll(".box div").forEach((bubble) => {
  const startY = Math.random();
  bubble.style.setProperty("--startY", startY);
});
