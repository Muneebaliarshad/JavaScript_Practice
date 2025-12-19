/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
import backpack from "./backpack.js";

const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

// Create main element and append to body
const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);

const conditionMethod = function () {
  const messageDiv = document.createElement("div");

  // If Else
  if (backpack.lidOpen) {
    messageDiv.innerHTML += "<p>Lid is open</p>";
  } else {
    messageDiv.innerHTML += "<p>Lid is closed</p>";
  }

  // Switch
  switch (backpack.color) {
    case "red":
      messageDiv.innerHTML += "<p>The backpack is red</p>";
      break;
    case "blue":
      messageDiv.innerHTML += "<p>The backpack is blue</p>";
      break;
    default:
      messageDiv.innerHTML += "<p>The backpack has a different color</p>";
  }

  // For Loop
  const array = ["apple", "banana", "cherry"];
  messageDiv.innerHTML += "<p> <b>For Loop: </b></p><ul>";
  for (let i = 0; i < array.length; i++) {
    messageDiv.innerHTML += `<li>${array[i]}</li>`;
  }
  messageDiv.innerHTML += "</ul>";

  // While Loop
  let count = 0;
  messageDiv.innerHTML += "<p> <b>While Loop: </b></p><ul>";
  while (count < 5) {
    count++;
    messageDiv.innerHTML += `<li>${count}</li>`;
  }
  messageDiv.innerHTML += "</ul>";

  // Foreach Loop
  const colors = ["red", "green", "blue"];
  messageDiv.innerHTML += "<p> <b>Foreach Loop: </b></p><ul>";
  colors.forEach((color) => {
    messageDiv.innerHTML += `<li>${color}</li>`;
  });
  messageDiv.innerHTML += "</ul>";

  // Map Method
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num) => num * 2);
  messageDiv.innerHTML += "<p> <b>Map Method (Doubled Numbers): </b></p><ul>";
  doubled.forEach((num) => {
    messageDiv.innerHTML += `<li>${num}</li>`;
  });
  messageDiv.innerHTML += "</ul>";

  main.appendChild(messageDiv);
};

conditionMethod();