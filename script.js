// List of words for the game
const words = ["apple", "banana", "cherry", "grape", "orange", "pear", "pineapple", "strawberry", "watermelon","mango","Carrot", "Broccoli", "Cauliflower", "Cucumber", "Eggplant", "Garlic", "Onion", "Potato", "Tomato","Bicycle", "Chair", "Computer", "Lamp", "Mug", "Pen", "Phone", "Television", "Wallet","Lion", "Tiger", "Giraffe", "Elephant", "Gorilla", "Penguin", "Eagle", "Parrot", "Ostrich", "Kangaroo", "Hippopotamus", "Crocodile", "Panda", "Koala", "Peacock", "Swan", "Hawk", "Owl", "Flamingo", "Pelican"];

// Choose a random word from the list
let chosenWord = words[Math.floor(Math.random() * words.length)];

// Set up the initial state of the game
let hiddenWord = "_".repeat(chosenWord.length);
let remainingGuesses = 6;

// Display the initial state of the game
document.getElementById("word").innerHTML = hiddenWord;

// Check the user's guess
function checkGuess() {
  let guess = document.getElementById("guess").value.toLowerCase();
  let message = document.getElementById("message");

  // Check if the guess is correct
  if (guess === chosenWord) {
    message.innerHTML = "Congratulations! You guessed the word!";
    disableInput();
  } else if (chosenWord.includes(guess)) {
    // Replace the hidden letters with the guessed letter
    let newHiddenWord = "";
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === guess) {
        newHiddenWord += guess;
      } else {
        newHiddenWord += hiddenWord[i];
      }
    }
    hiddenWord = newHiddenWord;
    document.getElementById("word").innerHTML = hiddenWord;
  } else {
    // Decrement remaining guesses
    remainingGuesses--;
    message.innerHTML = `Sorry, "${guess}" is not in the word. You have ${remainingGuesses} guesses remaining.`;
    if (remainingGuesses === 0) {
      message.innerHTML = `Sorry, you ran out of guesses. The word was "${chosenWord}".`;
      disableInput();
    }
  }

  // Clear the guess input
  document.getElementById("guess").value = "";
}

// Disable the guess input and button
function disableInput() {
  document.getElementById("guess").disabled = true;
  document.getElementById("guessButton").disabled = true;
}

// Reset the game
function resetGame() {
  // Choose a new random word
  chosenWord = words[Math.floor(Math.random() * words.length)];

  // Reset the hidden word and remaining guesses
  hiddenWord = "_".repeat(chosenWord.length);
  remainingGuesses = 6;

  // Display the new game state
  document.getElementById("word").innerHTML = hiddenWord;
  document.getElementById("guess").value = "";
  document.getElementById("guess").disabled = false;
  document.getElementById("guessButton").disabled = false;
  document.getElementById("message").innerHTML = "";
}

