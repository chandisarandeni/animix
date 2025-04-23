const canvas = document.querySelector(".effects");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function initParticles() {
  particles.length = 0;
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1, // Smaller particles
      speed: Math.random() * 1.5 + 0.5,
      color: `hsla(${Math.random() * 360}, 100%, 70%, 0.8)`,
      angle: Math.random() * Math.PI * 2,
    });
  }
}

function drawWormhole() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 20;
    ctx.fill();

    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;

    p.angle += 0.005;

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
    }
  }

  requestAnimationFrame(drawWormhole);
}

initParticles();
drawWormhole();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
