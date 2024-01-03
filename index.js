function isPalindrome(word) {
for (let i = 0; i < word.length/2; i++){
  const j = word.length - 1 - i;
  if (word[i] !== word[j]) return false
}
return true
}

/* 
  Add your pseudocode here
  -We're trying to create a function that takes in a word as an argument
  -We want our function to iterate over our word from left to right and from right to left
  -If those two iterations are the same, we want our function to return true
*/

/*
  Add written explanation of your solution here
We created a for loop to interate from the beginning to halfway through a word,
we then created a new variable j to start from the end of a word to work backwards to the middle.
we then tracked each letter from front to middle and back to middle with word[i] and word[j]
we then made an if statement that said if they're not exactly equal, return false otherwise return true!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
