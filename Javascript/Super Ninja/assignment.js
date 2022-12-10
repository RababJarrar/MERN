class Ninja{
    constructor(name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
        sayName() {
            console.log(this.name);
        }
        // sayName() {
        //     console.log(`${this.name}`);
        //     return this;
        //   }
        showStats() {
            console.log("Name :",this.name ,",Strength :", this.strength,",Speed :",this.speed, ",Health:",this.health);
        }
        drinkSake() {
            this.health+=10;
            //console.log(this.health);
            return "What one programmer can do in one month, two programmers can do in two months.";
        }
}


class Sensei extends Ninja{
    constructor(name){
            super(name,200,"10","10");
            this.wisdom=10;
    }
    speakWisdom(){
            const message = super.drinkSake();
            console.log(message);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


