/*class vehicle{
    constructor(name,age){
this.name=name,
this.age=age
    }  
}
var person= new vehicle('nani',19);
console.log(person.name)*/

/*class details{
    constructor(name,age,joining){
        this.name=name;
        this.age=age;
        this.joining=joining;
    }
}

var pers1= new details('nani',19,'dec')
console.log(pers1.name)*/

class Dog {
constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}


_attendance = 0;

getAge() {
   
    return this.calcAge();
}

calcAge() {
    
    return Date.now() - this.birthday;
}

bark() {
    return console.log("Woof!");
}

updateAttendance() {
    
    this._attendance++;
    console.log((this._attendance))
    console.log(`$(attendance)`)
}
}
var person=new Dog('ajay',27)
person.updateAttendance()