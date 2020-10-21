const buttonSearch = document.querySelector('.button-search');
const searchPopup = document.querySelector('.search-popup');
const searchForm = document.querySelector('.search-form');
const searchAdult = document.querySelector('.search-form-adult');
const searchChildren = document.querySelector('.search-form-children');

if (localStorage.getItem('adult')) {
  searchAdult.value = localStorage.getItem('adult');
}
if (localStorage.getItem('children')) {
  searchChildren.value = localStorage.getItem('children');
}

searchPopup.classList.remove('search-popup-show');

buttonSearch.addEventListener('click', function () {
  searchPopup.classList.toggle('search-popup-show');
});

searchForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  localStorage.setItem('adult', searchAdult.value);
  localStorage.setItem('children', searchChildren.value);
});
