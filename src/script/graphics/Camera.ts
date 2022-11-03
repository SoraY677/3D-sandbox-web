import { PerspectiveCamera } from 'three';
import { INVALID_NUMBER } from './constraint';
import { POSITION_TYPE } from "./types"

export class Camera {
	private camera: PerspectiveCamera
	/**
	 * @param param 
	 * 	- fov 視野角
	 * 	- ascpet アスペクト比
	 *  - near 撮影範囲の手前の距離
	 *  - far 撮影範囲の最大距離
	 */
	constructor(
		fov: number = 75,
		aspect: number = window.innerWidth / window.innerHeight,
		near: number = 0.1,
		far: number = 1000,
		position: POSITION_TYPE = {
			x: 0,
			y: 0,
			z: 5
		}
	) {
		this.camera = new PerspectiveCamera( 
			fov, 
			aspect,
			near, 
			far 
		)
		this.setCameraPosition(position)
	}
	/**
	 * setter
	 */
	setCameraPosition(
		position: POSITION_TYPE = {
			x: INVALID_NUMBER,
			y: INVALID_NUMBER,
			z: INVALID_NUMBER
		}
	) {
		this.camera.position.x = (position.x != INVALID_NUMBER) ?
			position.x : this.camera.position.x
		this.camera.position.y = (position.y != INVALID_NUMBER) ?
			position.y : this.camera.position.y
		this.camera.position.z = (position.z != INVALID_NUMBER) ?
			position.z : this.camera.position.z
	}
	/**
	 * getter
	 */
	getCamera():PerspectiveCamera { return this.camera }
}