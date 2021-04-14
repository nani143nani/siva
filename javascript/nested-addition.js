var a=[1,2,4,[4,5,6,[3,5]],4]
function nestedsum(array){
    let result=0;
for( let i=0;i<array.length;i++){
    if(typeof array[i]!=='number'){
       result +=nestedsum(array[i]);
    }
    else{
result+=array[i]
    }
    
}
return result;
}
console.log(nestedsum(a))
