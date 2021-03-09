import { AxesHelper, GridHelper } from 'https://unpkg.com/three@0.117.0/build/three.module.js';
;

function createAxesHelper() {
  const helper = new AxesHelper(2);
  helper.position.set(-2.5, 0, -2.5);
  return helper;
}

function createGridHelper() {
  const helper = new GridHelper(4);
  return helper;
}

export { createAxesHelper, createGridHelper };
