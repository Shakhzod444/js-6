
let question = prompt('Напишите число ?')
let i = 0; i = 100;
do {

   if (question >= 100) {
      alert('Good')
   } else if (question <= 100) {
     i++
      let question = prompt('Напишите число ?')
   }
   console.log(question);
} while (question === false)



let arr = [4, 16, 19, 22, 11, 144, 967, 19124]

let even = []
let odd = []


for (let num of arr) {
   if(num % 2) {
      odd.push(num)
   }else if(num => !(num & 1)) {
      even.push(num)
   }
}
   console.log(even, odd);




// let question = prompt('Напишите число ?')

// for(let i = 0; i <= 100; i++){
// if(question >= 100) {
//    alert('Good')
// } else if (question <= 100) {

//    let question = prompt('Напишите число ?')
// } else if (question <= i) {

//    let question = prompt('Напишите число ?')
// } 
// }
// console.log(question);
