// Pause ambient animations when tab is not visible (saves battery, feels pro)
document.addEventListener("visibilitychange", () => {
  const paused = document.hidden;
  document.documentElement.style.setProperty(
    "--anim-play",
    paused ? "paused" : "running"
  );
});
