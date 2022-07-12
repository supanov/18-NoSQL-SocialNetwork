const usernames = [
  "noviap",
  "maxb",
  "felician",
  "domn",
  "vanmc",
];

const emails = [
  "emailOne@gmail.com",
  "emailTwo@gmail.com",
  "emailThree@gmail.com",
  "emailFour@gmail.com",
  "emailFive@gmail.com",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () => `${getRandomArrItem(usernames)}`;

const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomEmail };