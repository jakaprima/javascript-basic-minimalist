// 1. nested function dan closures
// nested(fungsi didalam) itu private dari fungsi luar
// closure itu expression yang memiliki variable bebas bersamaan dengan environment

// function function1(x, y){ // 2
// 	function function2(z){ //4
// 		return z * z; // 5
// 	}
// 	return function2(x) + function2(y); // 3 //6
// }

// console.log(function1(2,5)); // 1
// output: 29



// 2. multiply-nested function

// function a(x){
// 	function b(y){
// 		function c(z){
// 			console.log(x + y + z);
// 		}
// 		c(3);
// 	}
// 	b(2);
// }
// a(1); 
//output 6


