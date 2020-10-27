const buttonSearch = document.querySelector('.button-search');
const searchPopup = document.querySelector('.search-popup');
const searchForm = document.querySelector('.search-form');
const searchAdult = document.querySelector('.search-form-adult');
const searchChildren = document.querySelector('.search-form-children');
const searchArrival = document.querySelector('.search-form-arrival-date');
const searchDepature = document.querySelector('.search-form-departure-date');

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

searchForm.addEventListener('submit', function (evt) {
  if (!searchArrival.value || !searchDepature.value) {
    evt.preventDefault();
    searchForm.classList.add('search-form-error');
    return false;
  }

  if (searchAdult.value) {
    localStorage.setItem('adult', searchAdult.value);
  }

  if (searchChildren.value) {
    localStorage.setItem('children', searchChildren.value);
  }
});

searchForm.addEventListener('animationend', function (evt) {
  searchForm.classList.remove('search-form-error');
});
