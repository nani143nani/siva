/*console.log("Hello from JavaScript");
var n=5;
console.log(n)
// data types-undefined,null,boolean,string,symbol,number,obect
var a=2,b=2;
console.log(a+b)
var b="hell"+" "+5
console.log(b)
a+=5//a=a+5
console.log(a)
var name="nanu \"nani\""
console.log(name)
var learn="lot"
var l=learn.length;
console.log(l)
var first=learn[0]
console.log(first)
var lst=learn[learn.length-1]
console.log(lst)
function names(firstname,secondname,thirdname){
    
    var result="";
    result+=firstname+""+secondname+""+thirdname;
    return result;
}
console.log(names("nani","siva","pavan"));
let zero=0,blank="0";
let result;
if(zero==blank){ 
    result=true;
}else{

    result=false;
}
console.log(result)
var a="nani"
var b=a[a.length-1]
console.log(b)
//arrays-kept in brackets[]and seperated by comas
var arra=["hi",5]
console.log(arra)
//multidimenasional array
var ar=[["siva",22],["nani",21]]
console.log(ar[0,1])
//we can modify values in array
var p=[21,22,23]
p[1]=26
console.log(p)
var gg=ar[0][0]
console.log(gg)
console.log(ar[0][0])
ar[0][0]=[2]
console.log(ar[0][0])
//appending to array

ar.push(["dog",3]);
console.log(ar)
//rmoving an array
var r=ar.pop()
console.log(ar)
var t=ar.shift()
console.log(a)
//array.unshift adds to the array at starting and .push adds at the ending,.pop removes last array,shift removes first array
function say(){                  //setting up an function
    console.log("hllo");
}
say()
function sdd(a,b){                  //setting up an function
    console.log(a+b);
}
sdd(5,15)*/

//1st program
/*function div(num){ 
return (num%7==0)?true:false;}
console.log(div(56))*/
  
  // 3program
/*function di(um){ 
    let y="positive",z="negative",k="neutral"; 
return (um>0)?y:um==0?k:z;}
console.log(di(56))*/


//4th program
/*function div(num){ 
let h;
h=num%10;
let y="yes";
let n="no";
return (h==4)?y:n


}
console.log(div(54464))*/

//5th program

/*function hello(n){
    var count=1;
while(n/10>=1){
    n/=10;
    ++count;
    
}
console.log(count)
return (count==3)?true:false;

}
console.log(hello(333))*/



//program for ascending
/*var n=[2,3,56,7,87,1];
var j=n.sort(function(a,b){
    return a-b;
    
});

console.log(j)
//descending order
var m=[5,78,9,0,45]
var g=m.sort(function(a,b){
    return b-a;
})
console.log(g)*/
//multiples of number

/*function me(n){
    
    var z=[];
for(let i=1;i<19;i++){
   var g=i*n;
   z.push(g)
    
}
return z;
}
 console.log(me(9))   */
/*function div(num){
    var hum;
    hum=num.toString().split('').reverse().join('')
    return hum;
}
console.log(div(876))*/
    
//convert num to string
//.toString(),=""+num+"",""+num;

/*var n=["red","siva","nani",6,8]
n[1]="gani"
n.push("mari")
n.pop()
n.shift()
n.unshift("yel")
n.sort()
console.log(n)*/
//var n=["red","neel","terd"];
//var n=[3,5,6];
/*for(let x=0;x<=n.length-1;x++){
    console.log(n[x])
}
//var j=[];
/*function div(){
n.forEach(function(number){
    console.log(6);
    
}
)
}*/
/*const numbers=[1,4,5,7];
numbers.forEach(function(num,index){
    console.log(num);
    console.log(index);
})*/


/*
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
 console.log(s)*/
 
 
 
 //removing duplicates
 /* var z=[2,2,4,5,6,4,5,7,7,7,9]
  var d=[]
  z.forEach(function(number){
      if(!d.includes(number)){
          d.push(number)
      }
    
  })
  console.log(d)*/
  
  /*var j=[22,4,5,6]
 var t=j.filter(function(value){
     return value>20
 })
 console.log(t)*/
 /*var j=[22,4,5,6]
 /*var y=j.findIndex(function(){
     return 22;
 })
  var t=j.find(function(value){
     return value==4;
 })
 console.log(t)*/
 /*var j=[22,4,5,6]
 var u=j.slice(1,2)

 console.log(u)*/
//pr to add numbers up to given numbers
 /*function addUp(num) {
	let i=0
    let sum=0
	while(i<=num){
		sum+=i
		i++
	}
	return sum
}
console.log(addUp(5
    ))
    //or*/
/*function add(num){
    if(num===1) return 1
    else return num+add(num-1)
}
console.log(add(5
    ))*/
/*var num=prompt("")
console.log(num)*/

//practise
/*
function findMissingLetter(array)
{
  for(let z=0;z<=array.length-1;z++){
    for(let v=0;v<=array.length-1;v++){
      if(array[z]!=s[v]){
        return array[z];
      }
    }
  }
  
}
let alphabets=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
let s=[];


for(let i=0;i<=array.length-1;i++){
  s.push(alphabets[i])
}
array=[a,b,c,d,f]
findMissingLetter(array)*/

/*var str = "a";
var n = str.charCodeAt(0);
array=[A,B,C]

var f=str.charCodeAt(1)-str.charCodeAt(0);
console.log(f)*/
///*
/*function person(first_name, last_name){
    this.first_name=first_name;
 this.last_name=last_name; 

 this.displayname = function(){
     console.log(`Name: ${this.first_name} ${this.last_name}` );
 
 };
}
 let john= new person('john','reid');
john.displayname()/*/
/*
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  
    this.displayName = function() {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    };
}
let john = new Person('abhi', 'sheik');
john.displayName();
*/



/*
 var person={
     firstname:"abhihek",
     lastname:"kumar",
     fullname:()=>this.firstname+""+this.lastname

 }
 console.log(person.fullname())*/
/*
 var firstname="abhi"
 var lastname="sheik"
console.log(this.firstname+""+this.lastname)*/

/*var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
      fullName : ()=> this. firstName+""+this.lastName
    }
  };
  var s=person.fullName();
  console.log(s)*/

  /*fullname=()=> "'hello"
  console.log(fullname())*/
  let v=CharCodeAt(a)
  console.log(v)