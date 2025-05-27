//const coding =["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     //console.log(item);
//     return item
    
// })
// console.log((values));

 const myNums = [1,2,3,4,5,6,7,8,9,10]
//  const newNums=myNums.filter((num)=>  {
//      return num > 4
//  })

//  console.log(newNums);

// const newNums=[]
// myNums.forEach((num)=>{

//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[
    {title:'first Book',  genre:'History', publish:2001,edition:2004},
    {title:'second Book',  genre:'fiction', publish:2005,edition:2011},
    {title:'third Book',  genre:'non-fiction', publish:2006,edition:2012},
    {title:'fourth Book',  genre:'science', publish:2001,edition:2004},
    {title:'fifth Book',  genre:'History', publish:2001,edition:2004}
];
let userBooks=books.filter((bk)=>bk.genre==='History')

userBooks=books.filter((bk)=>{ return bk.publish>=2000})
console.log(userBooks);

 
