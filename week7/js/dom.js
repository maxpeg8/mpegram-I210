const titleRef = document.getElementById("title");
console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");
console.log(itemsRef);

const altTitleRef = document.querySelector("h1");
console.log(altTitleRef);

const ulRef = document.querySelector("body > ul");

ulRef.innerHTML = "";

const melons = [
  "Cantaloupe",
  "Watermelon",
  "Muskmelon",
  "Regular Melon",
  "Blind Melon",
  "Honey Dew",
];

for (let i = 0; i < melons.length; i++) {
  const melon = melons[i];
  ulRef.innerHTML += "<li class='item' >" + melon + "</li>";
}

titleRef.style.backgroundColor = "red";
titleRef.style.color = "#00ff00";
titleRef.style.fontSize = "32px";
