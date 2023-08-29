var card = document.querySelector('.card');
var backFace = card.querySelector('.card__back--in');
var backAdd = card.querySelector('.card__back--comment')

card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
  if (card.classList.contains('is-flipped')) {
    backFace.innerHTML = `В Python типы данных можно разделить на две группы: изменяемые и неизменяемые`;
    backAdd.innerHTML = `Неизменяемые:<br>
    - int<br>
    - float<br>
    - string<br>
    - bool<br>
    - NoneType<br>
    - tuple<br>
    - frozenset<br>

    Изменяемые:<br>
    - list<br>
    - dict<br>
    - set`
  }
});
