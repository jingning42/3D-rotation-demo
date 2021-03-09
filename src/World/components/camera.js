import { PerspectiveCamera } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(-1.5, 1.5, 6.5);

  return camera;
}

export { createCamera };
