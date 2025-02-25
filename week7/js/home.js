console.log("hi");

if (true) {
  console.log("always true");
} else {
  console.error("Not true I guess");
}

let money = 0.75;

if (money >= 0.5) {
  console.log("Bus ride baby!");
  money -= 0.5;
} else if (money >= 0.25) {
  console.log("Time to ride with Benydril Man");
  console.warn("Go at your own risk");
  money -= 0.25;
} else {
  console.log("Time to walk home...");
  console.warn("It's a 5 hour walk");
}
