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
    detailBtn.addEventListener('click', openDetails);

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

function openDetails(evt) {
    const text = evt.currentTarget.previousSibling.innerText;
    
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const popup = document.createElement('div');
    popup.classList.add('popup');

    const closeBtn = document.createElement('p');
    closeBtn.classList.add('close-btn');
    closeBtn.innerText = 'X';
    closeBtn.addEventListener('click', closeDetails);

    const para = document.createElement('p');
    para.classList.add('popup-text');
    para.innerText = text;

    popup.appendChild(closeBtn);
    popup.appendChild(para);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}

function closeDetails() {
    const overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
}

submitBtn.addEventListener('click', handleSubmit);