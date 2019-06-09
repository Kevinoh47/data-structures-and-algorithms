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

/** Prototypal inheritance practice */

console.log(`\n .... practicing prototypal inheritance ... \n`);

let animal = {
  jumps: null,
  eat() {
    this.full = true;
  },
  sniffs: true,
  walk() { return 'walking...';},
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

rabbit.__proto__ = animal;

console.log('rabbit inherits sniffs properyt from animal: ', rabbit.sniffs);
console.log('rabbit inherits walk function from animal: ', rabbit.walk());

rabbit.walk = function() {return 'slowly walking over the grass..';};
console.log('by declaring rabbits own walk function, we no longer look higher up the prototype chain for it: ', rabbit.walk());



console.log( 'rabbit jumps: ', rabbit.jumps );

delete rabbit.jumps;

console.log( 'rabbit jumps after deleting the property?: ', rabbit.jumps );

delete animal.jumps;

console.log( 'rabbit jumps after deleting the property from its prototype?: ', rabbit.jumps );

for (let props in rabbit)  {console.log( 'remaining props in rabbit: ', props);}

console.log('rabbit.full property BEFORE calling rabbit.eat() is undefined: ', rabbit.full);
rabbit.eat();
console.log('rabbit.full property AFTER calling rabbit.eat() is true: ', rabbit.full);

console.log(Object.entries(rabbit)); // empty, because eat is derived not its own and Object.entries only reports immediate properties.

console.log('rabbit eat -- this refers to rabbit, not animal:', rabbit.eat());

console.log('\n ... \n');
/**
 * https://javascript.info/prototype-inheritance
 * 
    Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
    Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

 */
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};


console.log('pockets pen:', pockets.pen);
console.log('bed glasses:', bed.glasses);
console.log('table money:', table.money);

console.log('\n ... \n');
// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How to fix it?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);  // bad, unless each hamster has its own stomach
    // this.stomach = [food]; // good. but of course you couldn't have multiple foods in the array with this solution.

  },
};

let speedy = {
  __proto__: hamster,
  stomach: [], // fix by adding stomach to instances so it doesn't have to go up the prototype chain to find it.
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// This one found the food
speedy.eat('apple');
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

// NOTE all properties that describe the STATE of a particular object, like stomach, are usually written into that object. That prevents such problems.

console.log('\n ... beyond __proto__  Object.creates(), etc. https://javascript.info/prototype-methods ... \n');

let myAnimal = { eats: true };
let myRabbit = Object.create(myAnimal, {jumps: { value: true }}, );
console.log('myRabbit.eats:', myRabbit.eats);
console.log(Object.getPrototypeOf(myRabbit));
console.log('myRabbit has a prototype of myAnimal?', Object.getPrototypeOf(myRabbit) === myAnimal);
console.log('myRabbit.jumps:', myRabbit.jumps);

// shallow copy 
let myClonedRabbit = Object.create(Object.getPrototypeOf(myRabbit), Object.getOwnPropertyDescriptors(myRabbit));
console.log('myClonedRabbit.eats:', myClonedRabbit.eats);
console.log(Object.getPrototypeOf(myClonedRabbit));
console.log('myClonedRabbit has a prototype of myAnimal?', Object.getPrototypeOf(myClonedRabbit) === myAnimal);
console.log('myClonedRabbit.jumps:', myClonedRabbit.jumps);

let turtle = {name: 'turtle'}
Object.setPrototypeOf(turtle, animal);
console.log('Object.setPrototypeOf to set prototype of turtle to animal. And animal sniffs:', turtle.sniffs);
console.log(Object.getPrototypeOf(turtle));
console.log(turtle.walk());
console.log('turtle has a prototype of animal?', Object.getPrototypeOf(turtle) === animal);


console.log('\n ... create an empty object, then add a toString method that returns a string of the object keys:  \n');
let dictionary = Object.create(null);

let toStringObj = {

  toString() {
    return Object.keys(this).join(',');
  }
}

Object.setPrototypeOf(dictionary, toStringObj);

dictionary.one=1;
dictionary.two=2;
dictionary.three=3;

console.log('dictionary should have a toString method now inherited from the prototype chain: ', dictionary.toString());

console.log('the toString method shows up in a for..in loop because it is enumerable:');
for (let key in dictionary) {console.log(key)};

console.log('\n ... a dictionary with a non-enumerable toString method that again writes a string of the keys ... \n');

let dictionary2 = Object.create(null, { toString: { value() {return Object.keys(this).join(',');}}});

// a different probably easier to understand whay to add a method that is not enumberable:
dictionary2.valsToString = function() {return Object.values(this).join(',')};
Object.defineProperty(dictionary2, 'valsToString', {enumerable: false});

dictionary2.apple = 'Fuji';
dictionary2.lemon = 'Myer';

console.log({dictionary2});
for (let key in dictionary2) {console.log(key)};
console.log('\n');
console.log(dictionary2.apple);
console.log(dictionary2.lemon);
console.log(dictionary2.toString);
console.log(dictionary2.toString()); //ha: even though toString is a property, since its value is a function, i can call it as a functio.
// for (let key of dictionary2) {console.log(key)}; TypeError: dictionary2 is not iterable
console.log('calling valsToString method:', dictionary2.valsToString());

console.log('notice only enumerable property values are in the Object.values array:')
console.log(Object.values(dictionary2));

console.log('\n ... prototype inheritance ... \n');

function Pangolin(name) {
  this.name = name;
}
Pangolin.prototype.sayHi = function() {console.log(`Hello my name is ${this.name}`)};

let bobby = new Pangolin('Bobby');

// all but the first are looking for sayHi at its prototype, which isn't named. Thus there this.name is undefined for all but the first.
bobby.sayHi();
Pangolin.prototype.sayHi();
Object.getPrototypeOf(bobby).sayHi();
bobby.__proto__.sayHi();

/**
 * Built in prototypes:
 * https://javascript.info/native-prototypes
 * 
 * Borrowing from prototypes

In the chapter Decorators and forwarding, call/apply we talked about method borrowing.

That’s when we take a method from one object and copy it into another.
Some methods of native prototypes are often borrowed.
For instance, if we’re making an array-like object, we may want to copy some array methods to it.

E.g.

let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!
 * Summary

    All built-in objects follow the same pattern:
        The methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype etc).
        The object itself stores only the data (array items, object properties, the date).
    Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype, Boolean.prototype. Only undefined and null do not have wrapper objects.
    Built-in prototypes can be modified or populated with new methods. But it’s not recommended to change them. Probably the only allowable cause is when we add-in a new standard, but not yet supported by the engine JavaScript method.


 */

 console.log('\n borrowing native methods, which are stored in .prototype: \n');
 // interesting: note that without the length property this fails silently. Apparently join uses the array.prototype.length under the covers, and without it, nothing.
 let myHash = {0: "hello", 1: "world", length: 2, };
 myHash.join = Array.prototype.join;
 console.log(myHash.join(','));

 console.log('\n ... changing an object ... \n');

 let person = {firstName: "john", lastName: "cokos"};

 function makePersonCopy(firstName, lastName) {
   let newPerson = {...person};
   newPerson.firstName = firstName;
   newPerson.lastName = lastName;

   return newPerson;
 }

 let newPerson = makePersonCopy('joe', 'strummer');

 console.log({person});
 console.log({newPerson});

 console.log('\n ...  ... \n');
 console.log('\n ... old school classes, revisited ( see 401 class 03 code review video) ... \n');

 const Vehicle = function(name, wheels) {
   this.name = name;
   this.wheels = wheels;
 }
 // add functions to Object.prototype:
 Vehicle.prototype.drive = () => { return 'going...'};
 Vehicle.prototype.stop = () => { return 'stopping ...'};

 const Car = function(name) {
   Vehicle.call(this, name, 4); // context and input arguments for the Vehicle constructor;
 }
 //prototype for the car is a Vehicle.
 Car.prototype = new Vehicle();

 const Motorcycle = function(name) {
   Vehicle.call(this, name, 2);
 }
 Motorcycle.prototype = new Vehicle();
 Motorcycle.prototype.skid = () => { return ' yikes sliding ....'};

 console.log('\n ... new classes, revisited ( see 401 class 03 code review video) ... \n');

class Aircraft {
  constructor(name, engines) {
    this.name = name;
    this.engines = engines;
  }
  fly() { return ' zooming into the clouds... '};
  land() { return 'time to return to earth... '};
}

class Balloon extends Aircraft {
  constructor(name) {
    super(name, 0);
  }
}
class TwinJet extends Aircraft {
  constructor(name) {
    super(name, 2);
  }
}
class Helicopter extends Aircraft {
  constructor(name) {
    super(name, 1);
  }
}
// note that Factory is at 9:10 and 10:50 of class 03 - code review video.

// List class is at ~20:00

class List {
  constructor() {
    this.length = 0;
  }

  push(item) {
    // Question: where does "arguments" come from?
    if (arguments.length === 1) {
      this[this.length++] = item; // i think length is increased after the assignment?
    }
    return this.length;
  }

  pop() {
    if ( !this.length ) { return undefined; }
    let item = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return item;
  }

  forEach(callback) {
    if ( this.length ) {
      for(let i = 0; i < this.length; i++) {
        callback(this[i], i);
      }
    }
  }

  map(callback) {
    if (!this.length) { return undefined; }
    let result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i],i));
    }
    return result;
  }

  filter(callback) {
    if (!this.length) { return undefined; }
    let result = new List();
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i])) {
        result.push(this[i]);
      };
    }
    return result;
  }
  
  //array.reduce(callback) ; callback takes initial value/accumlator, current Val, current index, and even possibly the array
  reduce(callback, state) {
    if (!this.length) { return undefined; }

    for (let i = 0; i < this.length; i++) {
      state = callback(state, this[i], i); //state is starter value then cumulative value; followed by current value, current idx
    }
    return state;
  }
}

console.log('\n ... class inheritance ... \n');



