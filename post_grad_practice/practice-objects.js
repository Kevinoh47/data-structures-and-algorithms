'use strict';

// using this rather than context input var:
// remember that (except for arrow functions) this refers to calling context.

console.log('\n\nfunctions called without context variables...');
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = `Hello, I'm ${identify.call(this)}`;
  console.log( greeting );
}

var me = { name: 'Kevin'};

var you = { name: 'Jane'};

identify.call( me );
identify.call( you );

speak.call( me );
speak.call( you );

/**
 * Practice making objects:
 *   via prototype
 *   via "class" 
 *   via class extends
 * 
 *  Let's create fairies with properties type, name, and some functionality.
 *  Start by doing them individually. Can we refactor to create a fairy generator?
 *  functions via prototype composition.
 *  Conditional functions: if(type === x || y) add fly()
 *  Build objects with defined inputs, then can we refactor with ...rest?
 *  Generate a random number of fairies, have them speak, use their special methods.
 *  Build a function for them that uses a loop: Sprinkle a random number between 1 & 7 sparkles...
 *  add an async call to the starwars api?
 */

/**
* Other practice: 
  the destructuring assignment assignment

*/

console.log('\n\nCowslip the Elf...');

function Elf (elfType, name) {
  this.elfType = elfType;
  this.name = name;
}

Elf.prototype.sing = function(greeting) {
  if (greeting) {
    console.log(`tra la la hello dear ${greeting}...`);
  } else {
    console.log(`tra la la my name is ${this.name}... `);
  }
};

let dance = function(timesAround) {
  let message, reportedName = '';
  if (!Number.isInteger(timesAround) || timesAround > 3 ) timesAround = 1;
  timesAround = Math.abs(timesAround);

  if (this.fullName) { 
    reportedName = this.fullName;
  } else if (this.name) {
    reportedName = this.name;
  } 
  message = `I am ${reportedName} `;
  for (let i = 0; i < timesAround; i++) {
    message += ` dancing round and round...`;
  }
  console.log(message);
};

let cowslip = new Elf('woodland', 'Cowslip');

// .call provides context to function.
dance.call(cowslip);

console.log(cowslip.sing());
console.log(cowslip.sing('DewDrop'));

console.log('\n\nDewDrop the fairy...');
class Fairy {
  constructor(fairyType, name) {
    this.fairyType = fairyType;
    this.name = name;
  }
  sprinkle(num) {
    if (!isNaN(num) && num > 0 && num < 6) {
      let sprinkler = 'sprinkling! ';
      while (num > 0) {
        sprinkler = sprinkler + 'sprinkling! ';
        num--;
      }
      console.log(`i am ${sprinkler} fairy dust!`);
    } else {
      console.log(`i am sprinkling fairy dust...`);
    }
  }
  greet() {
    console.log(`hi my name is ${this.name} and I am a ${this.fairyType}!`);
  }
}

let dewDrop = new Fairy('pixie', 'DewDrop');

dewDrop.greet();
dewDrop.sprinkle();
dewDrop.sprinkle(7); // default since out of bounds
dewDrop.sprinkle(3); 

console.log('\n\nKangaroo extends mammal...');
class Mammal {
  constructor(name, noise, food) {
    this.name = name;
    this.noise = noise;
    this.food = food;
  }
  // must speak only noise that it is constructed with...
  speaks() {
    console.log(`${this.noise} ... ${this.noise} ...`);
  }

  eats(food) {
    console.log(`eating ${(food) ? food : this.food}`);
  }

}

class Kangaroo extends Mammal {
  constructor(name,noise,food,fight) {
    super(name,noise,food);
    this.fight = fight;
  }
  eats(food) {
    // if different food is input, chew that. otherwise chew constructor food.
    console.log(`slowly chewing ${(food) ? food : this.food}...`);
  }
  // allow different noises
  speaks(noise) {
    // super.speaks(); 
    console.log(`${this.noise} ...  ${(noise) ? noise : this.noise } ... ${(noise) ? noise : this.noise}.`);
  }
  moves(moves) {
    for (let i = 0; i < moves; i++) {
      console.log(`hop! `);
    }
  }
  brawl() {
    console.log(`i am fighting here comes some ${this.fight}!`);
  }
}

console.log('\n\na generic mammal...');
const mammal = new Mammal('mammal','ugh','bugs');
mammal.speaks();
mammal.eats();
mammal.eats('grubs');

console.log('\n\nkanga the kangaroo...');
const kanga = new Kangaroo('Kanga', 'cheee', 'leaves', 'punches');
kanga.speaks(); // 
kanga.speaks('rrrgg');
kanga.moves(3);
kanga.eats(); //default
kanga.eats('berries');
kanga.brawl();

console.log('\nkanga getOwnPropertyDescriptor...');
console.log(Object.getOwnPropertyDescriptor(kanga, 'noise'));

console.log('\nkanga for in loop showing iterable properties...');
for (let key in kanga) console.log(key);

console.log('\nfor in loop with array filter on first letter e...');
let animals = {'d':'dog', 'c':'cat', 'e':'Eagle', 'e2': 'earwig'};
for (let key in animals) console.log(key);
console.log(Object.values(animals));
let animalsThatBeginWithE = Object.values(animals).filter((v)=>{return (v.slice(0,1).toLowerCase() === 'e');});
console.log(animalsThatBeginWithE);

console.log(`\n .... getters and setters ... \n`);
let currUser = {
  name:'keanu', 
  surname:'reeVES',

  // getter method behaves as a property
  get fullName(){
    let preppedName = this.name.slice(0,1).toUpperCase() + this.name.slice(1);
    let preppedSurname = this.surname.slice(0,1).toUpperCase() + this.surname.slice(1);
    return `${preppedName} ${preppedSurname}`;
  },

  set fullName(str) {
    let [first, last] =  str.split(' ');
    this.name = first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase();
    this.surname = last.slice(0,1).toUpperCase() + last.slice(1).toLowerCase();
  },
};

// first instance is not set through setter...
console.log(currUser.fullName);
// dance is called without args array so uses default.
dance.call(currUser);

// setter to replace current values on currUser
currUser.fullName = 'scarLEtt johaNnson';
console.log(currUser.fullName);

console.log(`\n .... passing object context + input values to function using .call ... \n`);

let args = [3];
dance.call(currUser, ...args);

args = [2];
dance.call(cowslip, ...args);

console.log(`\n .... passing object context + input values to function using .apply ... \n`);

dance.apply(cowslip, [3]);