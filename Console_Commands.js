import backpack from "./backpack.js";


console.log("Console_Commands.js loaded");
console.log("Backpack Data:", backpack);
console.log("Backpack Name:", backpack["name"]);

/// Example of date
const now = new Date();
console.log("Current Date and Time:", now);
console.log("Current Date and Time String:", now.toString());
console.log("Current Date and Time Date String:", now.toDateString());
console.log("Current Date and Time Locale Date String:", now.toLocaleDateString());