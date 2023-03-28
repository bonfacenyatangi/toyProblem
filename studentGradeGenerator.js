// Challenge 1:
// Student Grade Generator (Toy Problem)
// Write a program that prompts the user to input student marks.
// The input should be between 0 and 100. Then output the correct grade as follows:

// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

// Take input from the student
let input = parseInt(prompt("Enter your marks"));

if (input > 79) {
  alert("Your grade is A.");
} else if (input > 60 && input < 79) { //
  alert("Your grade is B.");
} else if (input > 49 && input < 59) {
  alert("Your grade is C.");
} else if (input > 40 && input < 49) {
  alert("Your grade is D.");
} else {
  alert("Your grade is E.");
}