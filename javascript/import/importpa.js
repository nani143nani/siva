const address=require('./impochil')
class bank{
    constructor(accname,accid,abc){
        this.accname=accname;
        this.accid=accid;
        this.abc=abc;
    }
}
let a1=new bank ("lithesh",11111111,new address("bangalore","karnataka"))
console.log(a1)