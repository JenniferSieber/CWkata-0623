//KATA 1
//Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto, 
// https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
function getPlanetName(id) {
  let name;
  switch(id) {
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }
  return name;
}
console.log(getPlanetName(3))
console.log(getPlanetName(5))
console.log(getPlanetName(2))

// KATA 2
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript
function createArray(number) {
  let newArr = [];
  for (let i = 1; i <= number; i++) {
    newArr.push(i)
  }
  return newArr;
}
console.log(createArray(5))

// KATA 3 
//  https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array) {
  return array.map(el => {
    const sr = Math.sqrt(el);
    return Number.isInteger(sr) ? sr : el * el;
  }) 
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))

// KATA 4
//  https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript
const replaceDots = (str) => {
  return str.split('.').join('-');
}

console.log(replaceDots("one.two.three"))

// KATA 5
function  calculateAge(born, year) {
  let age = year - born;
  if (born === year) {
    return `You were born this very year!`;
  }
  else if (age === 1) {
    return `You are 1 year old.`
  }
  else if (age === -1) {
    return `You will be born in 1 year.`
  }
  else if (age > 0) {
    return `You are ${age} years old.`;
  } else {
    return `You will be born in ${(born - year)} years.`;
  } 
}

console.log(calculateAge(2012,2016))
console.log(calculateAge(2012,2012))
console.log(calculateAge(2012,1992))

// KATA 6 
//  https://www.codewars.com/kata/54d1c59aba326343c80000e7/train/javascript

const solve = (x, y) => x / y;

console.log(solve(42,0))
console.log(solve(2,4))