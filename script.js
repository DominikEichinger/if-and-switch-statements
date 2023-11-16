const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);

// TODO: Implement the oddEven function

function oddEven(a) {
  //   const isEven = Number.isInteger(a / 2);
  const isEven = a % 2 === 0;
  if (isEven) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function  The function has one parameter which is a number
/* If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter*/

function oldYoung(a) {
  if (typeof a !== "number") {
    return "invalid parameter";
  } else if (a < 0) {
    return "invalid parameter";
  } else if (a < 16) {
    return "children";
  } else if (a < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
