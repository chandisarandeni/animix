const canvas = document.querySelector(".effects");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function initParticles() {
  particles.length = 0;
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: Math.random() * 6 + 3, // Bigger particles: size 3 to 9
      speed: Math.random() * 4 + 1,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 1)`,
      angle: Math.random() * Math.PI * 2,
    });
  }
}

function drawWormhole() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;

    p.angle += 0.02;

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = canvas.width / 2;
      p.y = canvas.height / 2;
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
