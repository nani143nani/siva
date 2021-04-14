function repetive(string){
let hashtable={}
for(let c in string){
    if(hashtable[c]===undefined){hashtable[c]=1   }
    else{hashtable[c]+=1}
    console.log(hashtable)
}
for(let c in string){
    if(hashtable[c]===1){return c }
}
return -1
}
repetive("hello bharath")