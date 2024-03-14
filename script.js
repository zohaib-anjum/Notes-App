const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notescontainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    inputBox.appendChild(img);
    notescontainer.appendChild(inputBox);
    inputBox.focus(); // Focus on the newly created input box
});

notescontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notescontainer.addEventListener("input", function(e) {
    if (e.target.tagName === "P") {
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}
