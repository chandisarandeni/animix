const magnets = document.querySelectorAll(".magnet");

document.addEventListener("mousemove", (e) => {
  magnets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) {
      const scale = 1 + (1 - dist / 120) * 1.5;
      el.style.transform = `scale(${scale})`;
      el.style.textShadow = `0 0 15px rgba(255,255,255,0.8)`;
    } else {
      el.style.transform = "scale(1)";
      el.style.textShadow = `0 0 10px rgba(255,255,255,0.2)`;
    }
  });
});
