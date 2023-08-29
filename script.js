let card = document.querySelector('.card');
let frontFace = card.querySelector('.card__text')
let backFace = card.querySelector('.card__back--in');
let backAdd = card.querySelector('.card__back--comment')

const dictionary = {
    'Какими бывают типы данных?':{
        "face":"В Python типы данных можно разделить на две группы: изменяемые и неизменяемые",
        "add": `Неизменяемые:<br>
            - int<br>
            - float<br>
            - string<br>
            - bool<br>
            - NoneType<br>
            - tuple (кортежи)<br>
            - frozenset<br>
        
            Изменяемые:<br>
            - list<br>
            - dict<br>
            - set (множества)`
    },
  'S в SOLID': {
    "face": 'Принцип единственной ответственности',
    "add": 'Для каждого класса должно быть определено единственное назначение. Не должно возникать God object, который занимается всем в программе.',
    },
  'O в SOLID': {
    "face":'Принцип открытости/закрытости',
    "add": '«программные сущности … должны быть открыты для расширения, но закрыты для модификации». Мы должны иметь возможность добавлять функциональность.',
    },
  'L в SOLID': {
    "face": 'Принцип подстановки Барбары Лисков',
    "add": '«объекты в программе должны быть заменяемыми на экземпляры их подтипов без изменения правильности выполнения программы». У объекта есть тип, но сами классы выстраиваются в иерархию классов. Подтип типа всю старую функциональность должен выполнять.'
  },
};

let randomKey = Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)];
frontFace.textContent = randomKey;

card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
  if (card.classList.contains('is-flipped')) {
    backFace.innerHTML = dictionary[randomKey]["face"];
    backAdd.innerHTML = dictionary[randomKey]["add"]
  } else {
        randomKey = Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)];
        frontFace.textContent = randomKey;
    }
});
