let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

gridViewButton.onclick = function () {
cardsList.classList.remove('list');
gridViewButton.classList.add('active');
listViewButton.classList.remove('active');
}

listViewButton.onclick = function () {
cardsList.classList.add('list');
gridViewButton.classList.remove('active');
listViewButton.classList.add('active');
}