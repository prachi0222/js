const myObject= {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);

    
}

const programming =["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
    
}

//map is not iteratable
const map=new Map()
map.set('IN',"INDIA");
map.set('usa',"united state of America");
map.set('fr',"France")

for (const key in map) {
    //so here map is not working in loop
    console.log(key);
    
}