import { Scene } from 'three';

export class Stage {
	private stage: Scene

	constructor() {
		this.stage = new Scene()
	}
	/**
	 * @param object 
	 */
	addObject(object: any) {
		this.stage.add(object)
	}
	/**
	 * getter
	 */
	getStage():Scene { return this.stage }
}