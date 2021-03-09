import { OBJLoader } from 'https://unpkg.com/three@0.117.0/examples/jsm/loaders/OBJLoader.js';
import { Box3, Vector3 } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

async function loadPlane() {
  const loader = new OBJLoader();

  const plane = await new Promise(function (resolve) {
    loader.load('/assets/models/plane.obj', function (data) {
      resolve(data);
    });
  });
  console.log('Squaaawk!', plane);
  // get object size for scaling
  var box = new Box3().setFromObject( plane );
  var size = new Vector3()
  console.log( box.getSize( size ) );

  // scale object size
  const scale_f = 3/(size.x + size.y + size.z)
  plane.scale.set(scale_f, scale_f, scale_f);
  plane.position.set(0, 0, 0);
  
  return {
    plane,
  };
};
export { loadPlane };
