//primitive datatypes
//7 types : String, Number, Boolean,Null, undefined, BigInt,Symbol

const score=100;
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

//Reference type(non primitive)
//Array,Objects,Functions

const heroes=["saktiman", "naagraj", "doga"]
let myObj="hitesh",
age=33

const myfunction=function(){
console.log("hello world");

}
console.log(typeof myfunction);

//++++++++++++++++++++++++++++++++++++++

//stack(primitive), Heap( non_primitive)

let myYoutubename="prachiidhiman.com"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="hi@google.com"

console.log(userOne.email);
console.log(userTwo.email);



      