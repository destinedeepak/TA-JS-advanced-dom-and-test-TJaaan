/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
// var count = 1;
let count = 1;
// if (true) {
if (count === 1) {
  count += 1;
}

// var count = 1;
count = 1;
// if (true) {
if (count === 1) {
  count += 1;
}

let num = 10;

// const increaseNumber = () => num++;
function increaseNumber() {
  num += 1;
  return num;
}
const increasePassedNumber = (number) => {
  const number1 = number;
  return number1;
};

// var num1 = increaseNumber();
// var num2 = increasePassedNumber(num1);
const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

const animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summaryfunction() {
    console.log(
      `I live in ${this.location} and I have ${this.numberOfLegs}`,
    );
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

function createDog(location, numberOfLegs, name, color) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, this.dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

createDog();

const dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogsMethods, animalMethods);

function createCat(
  location,
  numberOfLegs,
  name,
  colorOfEyes,
) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, this.catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

createCat();

const catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catsMethods, animalMethods);

// 3.

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
// 4.

function getFullName(user) {
  const { firstName } = user.firstName;
  const { lastName } = user.lastName;

  return `${firstName} ${lastName}`;
// eslint-disable-next-line eol-last
}