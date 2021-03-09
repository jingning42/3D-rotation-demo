import { GUI } from 'https://unpkg.com/dat.gui@0.7.6/build/dat.gui.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createGUI(camera, object) {
    
    var options = {
      Reset: function() {
        object.rotation.x = 0;
        object.rotation.y = 0;
        object.rotation.z = 0;
        camera.position.set(-1.5, 1.5, 6.5);
      },
        Views: 'default'
    };
    
   
    const rotate = {
        step: 30,
        roll: function () {
            object.rotateOnAxis(new Vector3(1,0,0), this.step/180 * Math.PI);
        },
        yaw: function () {
            object.rotateOnAxis(new Vector3(0,1,0), this.step/180 * Math.PI);
        },
        pitch: function () {
            object.rotateOnAxis(new Vector3(0,0,1), this.step/180 * Math.PI);
        },
    };
    
    var gui = new GUI();

    gui.add(options, 'Views', ['default', 'x_axis', 'y_axis', 'z_axis']).onChange(function(value) {
        switch (value) {
            case 'default':
                camera.position.set(-1.5, 1.5, 6.5);
                break;
            case 'x_axis':
                camera.position.set(6.5, 0, 0);
                break;
            case 'y_axis':
                camera.position.set(0, 6.5, 0);
                break;
            case 'z_axis':
                camera.position.set(0, 0, 6.5);
                break;
        };
    }); 
   
    var box = gui.addFolder('Rotation');
    box.add(rotate, 'step', -90, 90).step(5).name('step (degree)').listen(); 
    box.add(rotate, 'roll');
    box.add(rotate, 'yaw');
    box.add(rotate, 'pitch');
    //box.add(object.rotation, 'x', 0, Math.PI).name('x angle').listen();
    box.open();
    
    gui.add(options, 'Reset');
}

export { createGUI };
