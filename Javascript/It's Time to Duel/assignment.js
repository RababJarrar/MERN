class Card{
    constructor(name, cost = 0){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == "res"){
                target.res += this.magnitude;
            }
            else{
                target.power += this.magnitude;
            }
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target resiliance by 3", "res", 3);
const unhadledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

hardAlgorithm.play(redBeltNinja); // red res = 7
unhadledPromiseRejection.play(redBeltNinja); // red res = 5
pairProgramming.play(redBeltNinja); // red power = 5
redBeltNinja.attack(blackBeltNinja); // black res = -1

console.log(redBeltNinja);
console.log(blackBeltNinja);