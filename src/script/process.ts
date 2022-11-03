import Example0 from "./examples/0"

const ExampleList = [
	Example0,
]

export default {
	pageIndex: 0,
	run() {
		this.createIndexHTML()
		this.changeExample(0)
	},
	createIndexHTML() {
		const ul = document.getElementById('index_list')
		for(const index in ExampleList) {
			const li = document.createElement('li')
			const button = document.createElement('button')
			button.onclick = () => {
				this.changeExample(parseInt(index))
			}
			button.innerText = `Example${index}`
			li.appendChild(button) 
			ul?.appendChild(li)
		}

		const openButton = document.getElementById('index_list-wrapper') as HTMLButtonElement
		openButton.onclick = () => {
			if(openButton.classList.contains('active')){
				openButton.classList.remove('active')
			}
			else {
				openButton.classList.add('active')
			}
		}
	},
	changeExample(newPageIndex:number) {
		const Example = ExampleList[newPageIndex]
		if(!Example) return;
		
		const example = new Example()
		example.run()

		const exampleInfo = example.getInfo()

		document.getElementById('example_title')!.innerText = exampleInfo.title

		this.pageIndex = newPageIndex
	}
}