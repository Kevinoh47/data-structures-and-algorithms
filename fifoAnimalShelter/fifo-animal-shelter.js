'use strict';

const StacksAndQueues = require('../StacksAndQueues/stacks-and-queues.js');

const Queue = new StacksAndQueues.Queue();

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  speak() {
    console.log('grrr');
  }
}

class Cat extends Animal {
  speak() {
    console.log('meeoowww');
  }
}

class Bird extends Animal {
  speak() {
    console.log('squak!');
  }
}

class AnimalShelter {

  constructor () {
    this.animalQueue = new Queue();
    this.helperQueue = new Queue();
  }

  //enqueue
  intakeAnimal(animal) {
    this.animalQueue.enqueue(animal);
  }

  //dequeue
  dischargeAnimal(pref) {
    let animalCount = this.animalQueue.linkedList.length;
    let nextAnimal = this.animalQueue.peek();
    let foundAnimal;
    if (
      (pref !== 'dog' && pref !== 'cat' ) ||
      (pref === 'dog' && nextAnimal instanceof Dog) ||
      (pref === 'cat' && nextAnimal instanceof Cat)) {

      return this.animalQueue.dequeue();

    }
    else if (pref === 'dog' && !(nextAnimal instanceof Dog)) {
      while (animalCount > 0) {
        let currentAnimal = this.animalQueue.dequeue();
        if (currentAnimal instanceof Dog) { 
          foundAnimal = currentAnimal;
        }
        else {
          this.helperQueue.enqueue(currentAnimal);
        }
      }
    }
    else if (pref === 'cat' && !(nextAnimal instanceof Cat)) {
      while (animalCount > 0) {
        let currentAnimal = this.animalQueue.dequeue();
        if (currentAnimal instanceof Cat) { 
          foundAnimal = currentAnimal;
        }
        else {
          this.helperQueue.enqueue(currentAnimal);
        }
      }
    }
    //now move all the animals back in the proper order:
    let helperQAnimalCount = this.helperQueue.linkedList.length;
    while (helperQAnimalCount > 0) {
      this.animalQueue.enqueue(this.helperQueue.dequeue());
    }
    // return the desired cat or dog
    if (foundAnimal) {
      return foundAnimal;
    }
    // if there is no desired cat or dog, return the animal who has been in the shelter the longest.
    else {
      if (this.animalQueue.front) {
        return this.animalQueue.dequeue();
      }
    }
  }
}

module.exports = Animal, Dog, Cat, Bird, AnimalShelter;
