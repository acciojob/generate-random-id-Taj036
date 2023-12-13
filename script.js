function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let res = '';
	// l.forEach( ()=>{
	for(let i = 0 ; i < l ; i++){  
		let num = Math.floor(Math.random() * characters.length);
		let char = characters.charAt(num);
		res += char ;
	}

	
	return res ;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
