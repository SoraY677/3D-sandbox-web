import Example0 from "./examples/0"

// サンプル一覧
const ExampleList = [
	Example0
]

export default {
	run() {
		try {
			const hash = (location.hash as string).replace('#', '')
			const number = parseInt(hash)

			const Example = ExampleList[number]
			if(!Example) throw new Error("hash number wrong! not exist Example...");
			
			const example = new Example()
			example.run()
			
		}catch(e) {
			console.error(e)
		}
	}
}