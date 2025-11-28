//your JS code here. If required.
let element = document.getElementById('level');

let level = 0;

while (element) {
    level++; // Increment the level for each parent
    element = element.parentNode; // Move to the parent node
}

// Step 4: Alert the result
alert(`The level of the element is: ${level}`);

