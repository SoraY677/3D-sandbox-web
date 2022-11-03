import { WebGLRenderer,PerspectiveCamera, Scene } from 'three';
import { SIZE_WH_TYPE } from './types';

export class Renderer {
	private renderer: WebGLRenderer
	/**
	 * @param size 
	 * 	- width
	 *  - height
	 */
	constructor(
		size: SIZE_WH_TYPE = {
			w : window.innerWidth,
			h : window.innerHeight
		}
	) {
		this.renderer = new WebGLRenderer()
		this.renderer.setSize( size.w, size.h )

		const appElement = document.getElementById('app') as HTMLDivElement
		while(appElement.lastChild) {
			appElement.removeChild(appElement.lastChild)
		}
		appElement.appendChild( this.renderer.domElement )
	}
	/**
	 * @param stage 
	 * @param camera 
	 */
	render(stage: Scene, camera: PerspectiveCamera) {
		this.renderer.render(stage, camera)
	}
}