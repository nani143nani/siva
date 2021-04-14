function check(string){
    let counter=0
    for(let c of string){
        if (c==='('){counter+=1 }
        if (c===')'){counter-=1 }
    }
    return (counter===0)?true:false;
}

console.log(check('(())'))