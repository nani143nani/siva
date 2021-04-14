class student{
    constructor(){
        let namee,marks;
    }

    getName(){
        return this.namee;
    }
    setName(name){
        this.namee=name;
    }

}
let v=new student()
v.setName("siva");
console.log(v.getName());