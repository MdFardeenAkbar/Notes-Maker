const createnotes = document.querySelector(".notes");
const notescontainer = document.querySelector(".notescontainer");
let notes = document.querySelectorAll(".input-box");

createnotes.addEventListener("click", logic);
const logic = () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
}