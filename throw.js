// throw digunakan untuk melemparkan exception/pengecualian
// rumus: throw expression

function function1 (params1){
	let array = [1,2,3,4];
	if(array[params1]){
		console.log(array[params1]);
	}else {
		throw 'apa yang kamu cari not found' // lempar error karena tidak ada di antara itu
	}
}

function1(40);
