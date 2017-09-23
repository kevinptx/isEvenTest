// Write a function called "isEven".
// Given an array of numbers, "isEven" returns a new array
// that contains only the even numbers of the input array.
// For example...
// var output = isEven([1,4,5,6,10,13]);
// console.log(output); // -->[4,6,10]

function isEven(num){
 newArray = [];
 for(var i =0;i< num.length;i++){
   if(num[i] % 2 === 0){
     newArray.push(num[i]);
   }

 }

 return newArray;


}
var checkArray = isEven([1,4,6,10,13]);
console.log(checkArray);
