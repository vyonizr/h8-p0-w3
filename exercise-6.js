function angkaPalindrome(num) {
  if (num < 10) {
    return num + 1;
  }
  else {
    for (num;;num++) { // empty [condition] creates infinite incremental (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#Optional_for_expressions)
      var numStr = String(num);
      var angkaTerbalik = ""; // an empty STRING to be filled with reversed numbers
      
      for(var i = numStr.length - 1; i >= 0; i--) {
          angkaTerbalik += numStr[i];
      }
      
      if (angkaTerbalik == numStr) {
        return Number(angkaTerbalik); // a "substitute" for [condition] above. If TRUE, the loop will break here. ELSE, num will keep incrementing until TRUE.
      }
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001