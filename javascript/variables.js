var myName = "Shikhar";
// var variables have scope throughout the project

let myName2 = "Shikhar";
// let variables have limited scope

const pi = 3.14;
// const variables are never changed throughout the program

var myArr = ["John", 5 , pi, myName]
var myArr2 = [myArr, ["Shikhar",2], pi]

console.log(myArr2[1])