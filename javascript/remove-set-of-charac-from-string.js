
function removeChars(arr,string){
    var charas={}
    for(let c of arr){
        charas[c]=true;
    }
    let result=' ';
    for (let c of string ){
     if(charas[c]==undefined){
         result+=c;
     }   
    }
    return result;
    
}

console.log(removeChars(['h', 'e', 'w', 'o'], "hello world"))


