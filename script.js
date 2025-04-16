


let getCreateNote = document.querySelector('.btn');
let getNotesContainer = document.querySelector('.notes_Container');
let getInputField = document.querySelectorAll('.input_box');

function storeDataLocal(){
    localStorage.setItem('notes', getNotesContainer.innerHTML);
}

function showData(){
    getNotesContainer.innerHTML = localStorage.getItem('notes');
}


getCreateNote.addEventListener('click', () => {
    
    let createParagraph = document.createElement('p');
    let img = document.createElement('img');
    createParagraph.setAttribute('contenteditable', 'true');
    createParagraph.classList.add('input_box');
    img.src = "images/delete.png";

    getNotesContainer.appendChild(createParagraph).appendChild(img);
})


getNotesContainer.addEventListener('click', (e) => {
    if(e.target.tagName == 'IMG'){
        e.target.parentNode.remove();
        storeDataLocal();
    }else if(e.target.tagName == 'P'){
        notes = document.querySelectorAll('.input_box');
        notes.forEach(element => {
            element.onkeyup = function () {
                storeDataLocal();
            }
        });
    }
})


document.addEventListener('keydown', event => {
    if(event.key == 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
        storeDataLocal();
    }
})



showData();