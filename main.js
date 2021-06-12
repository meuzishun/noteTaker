const inputText = document.querySelector('#input-area');
const submitBtn = document.querySelector('#submit-btn');
const notesContainer = document.querySelector('#display-section');

function createNote(text) {
    const noteNumber = document.querySelectorAll('.note').length + 1;

    const container = document.createElement('div');
    container.classList.add('note');

    const heading = document.createElement('h3');
    heading.innerText = `Note ${noteNumber}`;

    const paragraph = document.createElement('p');
    paragraph.innerText = text;

    const detailBtn = document.createElement('button');
    detailBtn.classList.add('detail');
    detailBtn.innerText = 'View Detail';

    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(detailBtn);

    return container;
}

function handleSubmit() {
    const text = inputText.value;
    const note = createNote(text);
    notesContainer.appendChild(note);

    inputText.value = '';
    inputText.focus();
}

submitBtn.addEventListener('click', handleSubmit);