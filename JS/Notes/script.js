const notesContainer= document.querySelector('.notes-container');
const createBtn= document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');


function showNotes() {
    notesContainer.innerHTML= localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="./images/delete.png";
    // inputBox.appendChild(img);
    // notesContainer.appendChild(inputBox);
    // or
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName =="IMG") {
        // e.target.remove();
        e.preventDefault();
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName =="P"){
        notes = document.querySelectorAll(".input-box")     // dot is important here
        notes.forEach(note => {
                    note.onkeyup = function(){
                        // note.innerHTML=this.value;
                        updateStorage();
                        e.preventDefault()  
                    }
                })
            }
        })             
document.addEventListener("keydown",event => {
    if (event.key === "Enter") {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})

