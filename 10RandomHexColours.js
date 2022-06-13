// Generate Random Hex Colour Values

function colour() {
  return "#" + Math.random().toString(16).substring(2, 8);
}

console.log(colour());
