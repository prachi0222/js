//for of loop

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]

const greetings="helloworld!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
    

}
//map
//The Map object holds key-value pairs and remembers
//  the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
//Map may only occur once; it is unique in the Map's collection.
const map=new Map()
map.set('IN',"INDIA");
map.set('usa',"united state of America");
map.set('fr',"France")

//console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
    

}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}
