const ghosts = [
  document.getElementById("ghost1"),
  document.getElementById("ghost2"),
  document.getElementById("ghost3"),
  document.getElementById("ghost4"),
  document.getElementById("ghost5"),
  document.getElementById("ghost6"),
  document.getElementById("ghost7"),
  document.getElementById("ghost8"),
  document.getElementById("ghost9"),
  document.getElementById("ghost10"),
];

// Function to create a random animation for each ghost
function randomizeGhost(ghost) {
  const startX = Math.random() * (window.innerWidth - 100); // Random X position
  const startY = Math.random() * (window.innerHeight - 100); // Random Y position
  const randomDuration = Math.random() * 10 + 10; // Random duration between 10s and 20s for movement
  const randomScale = Math.random() * 0.2 + 0.8; // Random scale between 0.8 and 1.0

  // Set random initial position
  ghost.style.left = `${startX}px`;
  ghost.style.top = `${startY}px`;

  // Random animation: opacity, position, and scale transitions
  ghost.animate(
    [
      { opacity: 0, transform: `translate(0, 0) scale(${randomScale})` },
      {
        opacity: 0.3,
        transform: `translate(30px, -30px) scale(${randomScale + 0.1})`,
      },
      {
        opacity: 0.6,
        transform: `translate(-50px, -60px) scale(${randomScale + 0.2})`,
      },
      {
        opacity: 0.3,
        transform: `translate(30px, 20px) scale(${randomScale + 0.1})`,
      },
      { opacity: 0, transform: `translate(0, 0) scale(${randomScale})` },
    ],
    {
      duration: randomDuration * 1000,
      easing: "ease-in-out",
      iterations: 1,
    }
  );

  // Move ghost to a new random position periodically
  setInterval(() => {
    const newX = Math.random() * (window.innerWidth - 100); // Random new X position
    const newY = Math.random() * (window.innerHeight - 100); // Random new Y position
    ghost.style.left = `${newX}px`;
    ghost.style.top = `${newY}px`;

    // Add a new random animation every time it moves
    const newDuration = Math.random() * 10 + 10; // New random duration for smooth transition
    ghost.animate(
      [
        { opacity: 0, transform: `translate(0, 0) scale(${randomScale})` },
        {
          opacity: 0.3,
          transform: `translate(30px, -30px) scale(${randomScale + 0.1})`,
        },
        {
          opacity: 0.6,
          transform: `translate(-50px, -60px) scale(${randomScale + 0.2})`,
        },
        {
          opacity: 0.3,
          transform: `translate(30px, 20px) scale(${randomScale + 0.1})`,
        },
        { opacity: 0, transform: `translate(0, 0) scale(${randomScale})` },
      ],
      {
        duration: newDuration * 1000,
        easing: "ease-in-out",
        iterations: 1,
      }
    );
  }, Math.random() * 10000 + 5000); // Move every 5 to 15 seconds
}

// Initialize random movements for all ghosts
function animateGhosts() {
  ghosts.forEach(randomizeGhost);
}

animateGhosts();
