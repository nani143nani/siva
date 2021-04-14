function primecheck(n){
    // if (n<2){return false;}
     for(let i=2;i<=Math.ceil(Math.sqrt(n));i++){
         if(n % i===0)
         {
             return false;
             }
     }
     return true;
 }
 console.log(primecheck(7))