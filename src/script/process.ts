import * as THREE from 'three';
import { Stage } from './graphics/Stage';
import { Renderer } from './graphics/Renderer';
import { Camera } from './graphics/Camera';

export default {
	run() {

		const stage = new Stage()
		const camera = new Camera()		
		const renderer = new Renderer()

		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new THREE.Mesh( geometry, material );
		stage.addObject(cube)

		function animate() {
			requestAnimationFrame( animate );

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render( stage.getStage(), camera.getCamera() );
		};
		animate();

	}
}