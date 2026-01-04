// Change text content
function changeText() {
    document.getElementById("text").textContent =
        "The text has been changed using DOM manipulation!";
}

// Change text color
function changeColor() {
    document.getElementById("text").style.color = "blue";
}

// Add new list item
function addItem() {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}

// Remove last list item
function removeItem() {
    const ul = document.getElementById("itemList");
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}
