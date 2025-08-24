// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const check19Plus = people.some(
  (item) => new Date().getFullYear() - item.year >= 19,
);
console.log(check19Plus);

// Array.prototype.every() // is everyone 19 or older?
const isAll19 = people.every(
  (item) => new Date().getFullYear() - item.year >= 19,
);
console.log(isAll19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id == 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
const commentIndex = comments.findIndex((comment) => comment.id == 823423);
// delete the comment with the ID of 823423
// destructive (changes array)
comments.splice(commentIndex, 1);
// constructive (creates new array)
const newComments = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex), // In the video it was commentIndex + 1, but this doesn't seem to work
];
console.log(comments);
console.log(newComments);
