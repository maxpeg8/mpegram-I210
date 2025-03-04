const favoriteReptiles = ["Gecko", "Komodo Dragoon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);
console.log("First thing:", favoriteReptiles[0]);

for (let i = 0; i < favoriteReptiles.length; i++) {
  const reptile = favoriteReptiles[i];
  console.log(reptile);
}

for (let i = favoriteReptiles.length - 1; i > -1; i--) {
  console.log("Index:", i);
}
