let addToDoButton = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})


var typed = new Typed(".auto-input", {
    strings: ["HTML", "CSS", "JAVAScript"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})