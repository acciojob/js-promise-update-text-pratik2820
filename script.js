//your JS code here. If required.
function test(){
	// let prom = new Promise((resolve)=>{
	// 	setTimeout(()=>{
	// 		resolve(`Hello, world!`)
	// 	},1000)
	// })
	// prom.then((data)=>{
	// 	let text = document.getElementById("output");
	// 	text.innerText = data;
	// 	document.body.append(text)
	// })
	// let prom1 = new Promise((resolve)=>{
	// 	setTimeout(()=>{
	// 		let data = 'Hello, world!'
	// 		resolve(data);
	// 	},1000)
	// })

	// const output = document.getElementById("output");
	// prom1.then((data)=>{
	// 	output.innerText = data;
	// })

	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}

	test().then((data)=>{
		const element = getElementById("output");
		element.innerText = data;
	})

	
