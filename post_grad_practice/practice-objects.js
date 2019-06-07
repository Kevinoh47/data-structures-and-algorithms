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
  constructor(name,noise,food,whereFound) {
    super(name,noise,food);
    this.whereFound = whereFound;
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
}

console.log('\n\na generic mammal...');
const mammal = new Mammal('mammal','ugh','bugs');
mammal.speaks();
mammal.eats();
mammal.eats('grubs');

console.log('\n\nkanga the kangaroo...');
const kanga = new Kangaroo('Kanga', 'cheee', 'leaves', 'Australia');
kanga.speaks(); // 
kanga.speaks('rrrgg');
kanga.moves(3);
kanga.eats(); //default
kanga.eats('berries');

console.log(Object.getOwnPropertyDescriptor(kanga, 'noise'));

for (let key in kanga) console.log(key);
let animals = {'d':'dog', 'c':'cat', 'e':'Eagle', 'e2': 'earwig'};
for (let key in animals) console.log(key);
console.log(Object.values(animals));
let animalsThatBeginWithE = Object.values(animals).filter((v)=>{return (v.slice(0,1).toLowerCase() === 'e');});
console.log(animalsThatBeginWithE);

console.log(`\n .... \n`);
let currUser = {
  name:'john', 
  surname:'smith',

  // getter method behaves as a property
  get fullName(){
    let preppedName = this.name.slice(0,1).toUpperCase() + this.name.slice(1);
    let preppedSurname = this.surname.slice(0,1).toUpperCase() + this.surname.slice(1);
    return `${preppedName} ${preppedSurname}`;
  },

  set fullName(str) {
    [this.name, this.surname] =  str.split(' ');
  },
};

console.log(currUser.fullName);
currUser.fullName = "Scarlett Johannson";
console.log(currUser.fullName);