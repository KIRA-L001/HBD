// hooks
/**
 * Birthday celebration hooks: spawn floating balloons and trigger
 * a confetti burst. Pure DOM helpers, no framework required.
 */

function spawnBalloon(container, label) {
  const el = document.createElement('div');
  el.className = 'balloon';
  el.textContent = label || '🎈';
  el.style.left = Math.random() * 90 + 'vw';
  el.style.animationDuration = (4 + Math.random() * 4) + 's';
  container.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function celebrate(container, count) {
  count = count || 12;
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnBalloon(container, '🎉'), i * 120);
  }
}

window.celebrate = celebrate;
