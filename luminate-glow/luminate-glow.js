const text = document.querySelector(".text-wrapper");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  text.style.setProperty("--x", `${x}%`);
  text.style.setProperty("--y", `${y}%`);
});
