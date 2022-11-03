import Example0 from "./examples/0"

const ExampleList = [
	Example0
]

const ROOT_PATH = '/3D-sandbox-web/examples/'

export default {
	run() {
		const number = this.route()
		if(number == -1) return
		
		const Example = ExampleList[number]
		
		const example = new Example()
		example.run()
			
	},
	route() {
		const path =  (location.pathname as string).replace(ROOT_PATH,'')
		if(!path) {
			this.transIndexPage()
			return -1 
		}
		
		try {
			if(!new RegExp(/^[0-9]+$/).test(path)) throw new Error

			if(!ExampleList[parseInt(path)]) throw new Error

		} catch(e) {
			location.href = ROOT_PATH
		}

		return parseInt(path)
	},
	transIndexPage() {
		try {
			const app = document.getElementById('app')
			const ul = document.createElement('ul')
			for(const index in ExampleList) {
				const li = document.createElement('li')
				const anchor = document.createElement('a')
				anchor.href = `${ROOT_PATH}${index}`
				anchor.innerText = `${index}`
				li.appendChild(anchor) 
				ul.appendChild(li)
			}
			app?.appendChild(ul)

		} catch(e) {
			console.error(e)
		}
	}
}