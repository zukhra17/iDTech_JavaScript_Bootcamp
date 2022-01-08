// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
let words = ['This', 'is','JavaScript', 'Bootcamp!'];
//console.log(words);

// TODO: Create an empty string variable called "sentence".
let sentence = "";
console.log(sentence);

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
//let array1 = [' '];
function createSentence(){
for(var i  = 0; i<words.length; i++){
    console.log(words[i]);
}
}
function wordGame(myNoun, myAdjective, myVerb, myAdverb)
{
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + myAdverb
  return result;
}
console.log(wordGame("dog", "big", "ran", "quickly"));

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
