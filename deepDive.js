//1 Variables & Scope
function bonfire() {
    let estusFlask = "Restores HP";
}
console.log(estusFlask); // Error: estusFlask is not defined
//let is block-scoped, so estusFlask cannot be accessed outside of bonfire().

//Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.
console.log(soulLevel); // undefined
var soulLevel = 50;
//var is hoisted, but only its declaration.
//let and const are not initialized, causing a ReferenceError if accessed too early.

//2 Arrays - Manipulation & Higher-Order Functions
const souls = [100, 250, 500, 750, 1000];
const reinforcedSouls = souls.map(soul => soul ** 2);
console.log(reinforcedSouls);
//Enhances each soul count like upgrading weapons at the Blacksmith.
const worthySouls = souls.filter(soul => soul > 500);
console.log(worthySouls);
//Filters out weaker souls, leaving only boss souls.
const totalSouls = souls.reduce((total, soul) => total + soul, 0);
console.log(totalSouls);
//Accumulates all collected souls, similar to leveling up at Firelink Shrine.

//3 Objects - Nested Structures & Iteration
const chosenUndead = {
    name: "Knight Artorias",
    level: 90,
    weapons: ["Greatsword", "Silver Shield", "Dark Hand"],
    stats: { Strength: 50, Dexterity: 40, Endurance: 35 }
};
function strongestStat(character) {
    return Object.keys(character.stats).reduce((highest, stat) =>
        character.stats[stat] > character.stats[highest] ? stat : highest
    );
}

console.log(strongestStat(chosenUndead)); // "Strength"
for (let stat in chosenUndead.stats) {
    let meetsRequirement = chosenUndead.stats[stat] >= 30 ? "Meets requirement" : "Too low";
    console.log(`${stat}: ${meetsRequirement}`);
}

//4 Functions & Closures
function hollowCounter() {
    let hollowLevel = 0;
    return function() {
        hollowLevel++;
        return hollowLevel;
    };
}

const hollowState = hollowCounter();
console.log(hollowState()); // 1
console.log(hollowState()); // 2
//Each time you die, your hollow level increases.
function hollowCounter(start, curseLevel) {
    let hollowLevel = start;
    return function() {
        hollowLevel += curseLevel;
        return hollowLevel;
    };
}

const hollowProgression = hollowCounter(5, 3);
console.log(hollowProgression()); // 8
console.log(hollowProgression()); // 11
//5 Arrow Functions & this Binding
const praiseTheSun = name => `Glory to the sun, ${name}!`;
const warriorOfSunlight = {
    name: "Solaire",
    sayTitle: function() { return `I am ${this.name}, Warrior of Sunlight!`; },
    sayTitleArrow: () => `I am ${this.name}, Warrior of Sunlight!`
};
//Arrow functions lose this, so sayTitleArrow does not correctly reference name.

//6 Destructuring & Spread Operator
const blackKnightArmor = { 
    set: "Black Knight", 
    type: "Heavy", 
    stats: { defense: 80, poise: 50 } 
};
const { set, stats: { defense } } = blackKnightArmor;
console.log(set, defense); // "Black Knight 80"
const warriorsOfSunlight = ["Solaire", "Lautrec"];
const darkwraiths = ["Kaathe", "Darkstalker"];
const allCovenants = [...warriorsOfSunlight, ...darkwraiths];
console.log(allCovenants);
function reinforceWeapon(a, b, c) { return a + b + c; }
console.log(reinforceWeapon(...[2, 4, 6])); // 12

//7 Classes, Constructors & Inheritance
class Undead {
    constructor(name, covenant) {
        this.name = name;
        this.covenant = covenant;
    }
    speak() {
        return `I serve the ${this.covenant} covenant!`;
    }
}
class Darkwraith extends Undead {
    speak() {
        return `I shall harvest Humanity for the Abyss!`;
    }
}

const abyssKnight = new Darkwraith("Knight Artorias", "Darkwraith");
console.log(abyssKnight.speak()); // "I shall harvest Humanity for the Abyss!"

//8 Getters & Setters
class ChosenUndead {
    constructor(name, hollowLevel) {
        this.name = name;
        this._hollowLevel = hollowLevel;
    }
    get hollowLevel() { return this._hollowLevel; }
    set hollowLevel(value) { this._hollowLevel = value >= 0 ? value : 0; }
    death() { this._hollowLevel++; }
}
const player = new ChosenUndead("Ashen One", 3);
player.death();
console.log(player.hollowLevel); // 4

//9 bonus challenge

function applyPyromancy(pyromancies, spell) {
    return pyromancies.map(spell);
}
console.log(applyPyromancy([10, 20, 30], x => x * 2)); // [20, 40, 60]
//Each pyromancy spell is enhanced.
function estusUpgrade(flask, amount) { return flask + amount; }
//Pure functions don’t modify external state, ensuring predictability.
