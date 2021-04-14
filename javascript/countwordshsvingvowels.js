//Count	words	that	have	at	least	3 continuous	vowels
function counting(string){
let arra=string.split(' ')
let count=0;
let pattern=/[aeiou]{3,}/gi;
for(let c of arra){
    if(c.match(pattern)!==null){count+=1 }
}
return count
}
console.log(counting("hello iam in the pro stack aei academy"))


/*function checking(){
for(let i=0;i<=5;i++){
    return i;
}
}
console.log(checking())*/