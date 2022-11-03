import Example0 from "./examples/0"

// サンプル一覧
const ExampleList = [
	Example0
]

export default {
	run() {
		const number = this.route()
		if(number == -1) return
		
		const Example = ExampleList[number]
		
		const example = new Example()
		example.run()
			
	},
	route() {
		const path =  (location.pathname as string).replace('/','')
		if(!path) {
			this.transIndexPage()
			return -1 // empty string = index page
		}
		
		try {
			if(!new RegExp(/^[0-9]+$/).test(path)) throw new Error

			if(!ExampleList[parseInt(path)]) throw new Error

		} catch(e) {
			location.href = '/'
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
				anchor.href = `./${index}`
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