console.log("Heyyo");

const birthYear = 1738;

let myName = "Mad Max";

console.log(myName, "was born", birthYear);

myName = "Da MadMan Max";

console.warn(myName, "may have been here");

console.log("myName is", myName.length, "characters long");

console.log("myName includes max:", myName.toUpperCase().includes("max"));

console.log("myName has uppercase:", myName != myName.toLowerCase());
console.log("myName has lowwercase:", myName != myName.toUpperCase());

const PI = 3.141592653589793;
console.log("$" + PI.toFixed(2));

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("random number:", randomNumber);

console.log(Math.PI - PI, PI.toString().length);

console.log(PI, PI.toString());
console.log("loose check", PI == PI.toString());
console.log("strict check", PI === PI.toString());
console.log("PI type:", typeof PI);
console.log("myName type:", typeof myName);
