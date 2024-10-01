// taskCalendar.js

const readline = require('readline');

// Input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get the task based on the day of the week
function getTaskForDay(day) {
  switch (day) {
    case "Monday":
      return "Afternoon Badminton Training.";
    case "Tuesday":
      return "Attend classes.";
    case "Wednesday":
      return "Rest day.";
    case "Thursday":
      return "Attend classes.";
    case "Friday":
      return "Do assignments.";
    case "Saturday":
      return "Clean your room.";
    case "Sunday":
      return "Attend mass.";
    default:
      return `Sorry, I didn't understand "${day}". Please try again!`;
  }
}

// Prompt to enter a day of the week
rl.question("Enter a day of the week: ", (userInput) => {
  // Normalize the input to capitalize the first letter and lowercase the rest
  const dayOfWeek = userInput ? userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase() : "";

  // Get the task based on the day of the week and log it
  const taskMessage = getTaskForDay(dayOfWeek);
  console.log(`Your task for ${dayOfWeek} is: ${taskMessage}`);

  // Close the readline interface
  rl.close();
});