function groupAnimals(animals) {
  // you can only write your code here!
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  var zoo = [];

  for (var i = 0; i < alphabet.length; i++) {
    var cage = [];

    for (var j = 0; j < animals.length; j++) {
      if (animals[j][0] === alphabet[i]) {
        cage.push(animals[j]);
      }
    }

    if (cage.length !== 0) {
      zoo.push(cage);
    }
  }

  return zoo;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]