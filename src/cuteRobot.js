// cuteRobot.js
// Adds a cute robot with two eyes to the bottom right corner that looks at the mouse

export function enableCuteRobot({
  size = 80,
  right = 32,
  bottom = 32
} = {}) {
  const robotId = 'cute-robot';
  if (document.getElementById(robotId)) return;

  // Create robot container
  const robot = document.createElement('div');
  robot.id = robotId;
  robot.style.position = 'fixed';
  robot.style.right = right + 'px';
  robot.style.bottom = bottom + 'px';
  robot.style.width = size + 'px';
  robot.style.height = size + 'px';
  robot.style.zIndex = '10001';
  robot.style.display = 'flex';
  robot.style.alignItems = 'center';
  robot.style.justifyContent = 'center';
  robot.style.background = 'linear-gradient(135deg, #e0e7ef 60%, #b2eaff 100%)';
  robot.style.borderRadius = '50%';
  robot.style.boxShadow = '0 4px 24px 0 rgba(79,209,255,0.15)';
  robot.style.transition = 'box-shadow 0.3s';

  // Robot face
  const face = document.createElement('div');
  face.style.width = '60px';
  face.style.height = '60px';
  face.style.background = '#fff';
  face.style.borderRadius = '50%';
  face.style.position = 'relative';
  face.style.display = 'flex';
  face.style.alignItems = 'center';
  face.style.justifyContent = 'center';
  face.style.boxShadow = '0 2px 8px 0 rgba(79,209,255,0.10)';


  // Eyes
  function createEye(left) {
    const eye = document.createElement('div');
    eye.className = 'robot-eye';
    eye.style.position = 'absolute';
    eye.style.top = '22px';
    eye.style.left = left + 'px';
    eye.style.width = '12px';
    eye.style.height = '12px';
    eye.style.background = '#4fd1ff';
    eye.style.borderRadius = '50%';
    eye.style.boxShadow = '0 0 8px #4fd1ff';
    eye.style.transition = 'transform 0.2s';
    return eye;
  }
  const leftEye = createEye(12);
  const rightEye = createEye(36);
  face.appendChild(leftEye);
  face.appendChild(rightEye);

  // Smile
  const smile = document.createElement('div');
  smile.style.position = 'absolute';
  smile.style.bottom = '10px';
  smile.style.left = '18px';
  smile.style.width = '24px';
  smile.style.height = '12px';
  smile.style.borderBottom = '3px solid #4fd1ff';
  smile.style.borderRadius = '0 0 12px 12px';
  face.appendChild(smile);

  // Cheeks
  function createCheek(left) {
    const cheek = document.createElement('div');
    cheek.style.position = 'absolute';
    cheek.style.top = '34px';
    cheek.style.left = left + 'px';
    cheek.style.width = '8px';
    cheek.style.height = '8px';
    cheek.style.background = '#ffb6b6';
    cheek.style.borderRadius = '50%';
    return cheek;
  }
  face.appendChild(createCheek(6));
  face.appendChild(createCheek(46));

  // Antenna
  const antenna = document.createElement('div');
  antenna.style.position = 'absolute';
  antenna.style.top = '-14px';
  antenna.style.left = '28px';
  antenna.style.width = '4px';
  antenna.style.height = '16px';
  antenna.style.background = '#4fd1ff';
  antenna.style.borderRadius = '2px';
  face.appendChild(antenna);
  const antennaTip = document.createElement('div');
  antennaTip.style.position = 'absolute';
  antennaTip.style.top = '-18px';
  antennaTip.style.left = '26px';
  antennaTip.style.width = '8px';
  antennaTip.style.height = '8px';
  antennaTip.style.background = '#ffb6b6';
  antennaTip.style.borderRadius = '50%';
  face.appendChild(antennaTip);

  robot.appendChild(face);
  document.body.appendChild(robot);

  // Eye movement
  document.addEventListener('mousemove', (e) => {
    const rect = robot.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(8, Math.hypot(dx, dy) / 20);
    const offsetX = Math.cos(angle) * dist;
    const offsetY = Math.sin(angle) * dist;
    leftEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    rightEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}

// Usage: import { enableCuteRobot } from './cuteRobot.js';
// Then call enableCuteRobot() in your main JS file or useEffect in React.
