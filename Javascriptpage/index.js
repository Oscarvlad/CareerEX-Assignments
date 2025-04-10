// Variables to store name, age, and nationality
let fullName = "Emmanuel Oscar";
let age = 28;
let nationality = "Nigerian";

// Combine variables into a sentence
let introduction = `Hi, my name is ${fullName}. I am ${age} years old and I am a ${nationality}.`;
console.log(introduction);

// Favorite quote or lyric
let favoriteQuote = "Life is what happens when you're busy making other plans.~";

// Convert to uppercase
let upperCaseQuote = favoriteQuote.toUpperCase();
console.log(upperCaseQuote);
// Convert to lowercase
let lowerCaseQuote = favoriteQuote.toLowerCase();
console.log(lowerCaseQuote);

// Original word
let word = "hello";
console.log(word)

// Reverse the word
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}
console.log(reversedWord);

// Prices of 3 items
let item1 = 510;
let item2 = 349;
let item3 = 250;

// Calculate total price
let totalPrice = item1 + item2 + item3;

// Display total with a message
console.log(`The total price of the items is #${totalPrice}.`);

// Test scores
let score1 = 85;
let score2 = 90;
let score3 = 78;
let score4 = 92;
let score5 = 88;

// Calculate average
let totalScore = score1 + score2 + score3 + score4 + score5;
let average = totalScore / 5;

// Display average with a message
console.log(`The average test score is ${average}.`);

// Array of favorite foods
let favoriteFoods = ["Banana", "Beans", "Bread", "Rice", "Potato"];

// Display first and last items
console.log(`First food: ${favoriteFoods[0]}`);
console.log(`Last food: ${favoriteFoods[favoriteFoods.length - 1]}`);

// Add one food at the beginning and one at the end
favoriteFoods.unshift("Salad"); // Add at the beginning
favoriteFoods.push("Cake"); // Add at the end

// Display the new list
console.log(favoriteFoods);

// jssOne array with 10 student names
let jssOne = [
    "Mary",
    "Bob",
    "Raymond",
    "David",
    "Jane",
    "Frank",
    "Grace",
    "Hannah",
    "Joshua",
    "Jack"
];

// jssTwo array with 10 student names
let jssTwo = [
    "Matthew",
    "Messiah",
    "Thomas",
    "Noah",
    "Olivia",
    "Peter",
    "Queen",
    "Rachel",
    "Samuel",
    "Tim"
];

// jssThree array with 10 student names
let jssThree = [
    "Ummi",
    "Victor",
    "Wendy",
    "James",
    "Nelson",
    "Comfort",
    "Anna",
    "Ben",
    "Cara",
    "Derek"
];

// Display all three arrays
console.log("JSS One:", jssOne);
console.log("JSS Two:", jssTwo);
console.log("JSS Three:", jssThree);