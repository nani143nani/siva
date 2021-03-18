var n=[1,1,2,3,4,2,5,9,9];

function dup(n){
    var y=[];
for(let z=0;z<=n.length-1;z++){
    
    let s=false;
    for(let x=0;x<=y.length-1;x++){
        if (n[z]===y[x]){
       s=true;
       break;
        }
    }
    if (!s){
        y.push(n[z]);
    }
}
return y;
}
console.log(dup(n))


 var z=[2,2,4,5,6,4,5,7,7,7,9]
 var s=[...new Set(z)];
 console.log(s)
 
 
 
 //removing duplicates
 var z=[2,2,4,5,6,4,5,7,7,7,9]
  var d=[]
  z.forEach(function(number){
      if(!d.includes(number)){
          d.push(number)
      }
    
  })
  console.log(d)