//array

const myArr=[0,1,2,3,64,5,]
const myHeroes = ["saktiman" ,"nagraj"]
const myArr2 =new Array(1,2,3,4)
console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
myArr.unshift(9)
myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(64));

// const newArr=myArr.join()
// console.log(myArr);
// console.log( typeof newArr);

//slice or splice

console.log("A", myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);

console.log(myn2);





