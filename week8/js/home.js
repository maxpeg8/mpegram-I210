const petsULRef = document.querySelector("#pets");
const pets = ["Cat", "Dog", "Snake", "Fish", "Gecko", "Parrot", "Hamster"];
const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/210",
  "https://picsum.photos/220",
  "https://picsum.photos/230",
  "https://picsum.photos/240",
  "https://picsum.photos/250",
  "https://picsum.photos/260",
];

console.table(pets);

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);

  const image = images[i];
  console.log(image);

  const imageHTML = "<img src='" + image + "' alt='' />";
  petsULRef.innerHTML += "<li>" + pet + imageHTML + "</li>";
}
