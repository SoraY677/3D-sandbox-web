export interface TEMPLATE_IF {
	run(): void,
	getInfo(): EXAMPLE_INFO
}

type EXAMPLE_INFO = {
	title: string
}