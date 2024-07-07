class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;

    }
    lecture(){
        console.log('sir teaches phy');
    }
}

const tapan=new Teacher('tapan','physics')
console.log(tapan);

class Vehicle{
    constructor(name,price){
    this.name=name;
    this.price=price;
    }
    move(){
        console.log('gari cholena');
    }
}
class Bus extends Vehicle{
  constructor(name,price,seat,ticketprice){
    super(name,price);
    this.seat=seat;
    this.ticketprice=ticketprice;
  }

}

class Trucks