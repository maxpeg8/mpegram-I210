console.log("Pokemon");

function showAlert() {
  alert("Annoying message");
}

const confirmButtonRef = document.querySelector("#confirmButton");

function showConfirm() {
  const userConfirmed = confirm("You are a robot, right?");
  console.log(userConfirmed);
}

confirmButtonRef.onclick = showConfirm;

function showPrompt() {
  const userInput = prompt(
    "What's your facorite flavor of ice cream?",
    "vanilla"
  );
  console.log(userInput);
}

const journeyRef = document.querySelector("#journey");

function startJourney() {
  journeyRef.innerHTML = "<p></p>";
}
