// crusor.js
// Custom cursor functionality for your site

export function enableCustomCursor(cursorColor = '#4fd1ff') {
  // Remove any existing cursor
  const oldCursor = document.getElementById('custom-cursor');
  if (oldCursor) oldCursor.remove();

  // Create cursor element
  const cursor = document.createElement('div');
  cursor.style.position = 'fixed';
  cursor.style.pointerEvents = 'none';
  cursor.style.width = '18px';
  cursor.style.height = '18px';
  cursor.style.borderRadius = '50%';
  cursor.style.background = 'rgba(79,209,255,0.12)'; // transparent fill
  cursor.style.border = `2px solid ${cursorColor}`;
  cursor.style.boxShadow = `0 0 16px 2px ${cursorColor}, 0 0 32px 8px rgba(79,209,255,0.10)`;
  cursor.style.zIndex = '9999';
  cursor.style.transform = 'translate(-50%, -50%)';
  cursor.style.transition = 'background 0.2s, box-shadow 0.2s, width 0.2s, height 0.2s';
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  // Animate cursor with lag
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor on hover over links/buttons
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.background = 'rgba(9,179,250,0.18)';
      cursor.style.boxShadow = '0 0 32px 8px #09b3fa, 0 0 48px 16px rgba(9,179,250,0.18)';
      cursor.style.width = '28px';
      cursor.style.height = '28px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.background = 'rgba(79,209,255,0.12)';
      cursor.style.boxShadow = `0 0 16px 2px ${cursorColor}, 0 0 32px 8px rgba(79,209,255,0.10)`;
      cursor.style.width = '18px';
      cursor.style.height = '18px';
    });
  });

  // Hide cursor on mobile/touch devices
  function hideCursor() {
    cursor.style.display = 'none';
  }
  function showCursor() {
    cursor.style.display = 'block';
  }
  window.addEventListener('touchstart', hideCursor);
  window.addEventListener('touchend', showCursor);
}

// Usage: import { enableCustomCursor } from './crusor.js';
// Then call enableCustomCursor() in your main JS file or useEffect in React.
