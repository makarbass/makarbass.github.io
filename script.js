let card = document.querySelector('.card');
let frontFace = card.querySelector('.card__text')
let backFace = card.querySelector('.card__back--in');
let backAdd = card.querySelector('.card__back--comment')
let bottomText = card.querySelector('.bottom__text')

let frontBackground = card.querySelector('.card__face--front')
let frontSafetyZone = card.querySelector('.card__face--in')
let frontCorner = card.querySelectorAll('.card__corner')
let frontBottomBlock = card.querySelector('.bottom__block')
let frontIcon = card.querySelector('.bottom__icon')


const dictionary = {
    'Python':
        {
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
        'Чем отличаются операторы == и is?':{
            "face": "Оператор == сравнивает два операнда по значениям, а is по адресам в памяти",
            "add": `Интерпритатор предварительно загружает в память числа в диапазоне от -5 до 256. 
            Поэтому, когда объявляется целое число в этом диапазоне, новый объект не создается, а ссылается на кэшированное число.
            Этот механизм называется интернированием целых чисел или кэшированием целых чисел.`
        },
        "Что такое GIL?":{
            "face": "Глобальная блокировка интерпретатора",
            "add": "Нельзя использовать несколько процессоров одновременно. В любой момент времени будет выполняться только один конкретный поток. Был введен потому, что управление памятью CPython не является потокобезопасным. Имея такую блокировку Python может быть уверен, что никогда не будет условий гонки. Во многопоточных программах отсутствие GIL может негативно сказываться на производительности."
        }
        },
    'ООП': 
        {
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
        }
};


// Функция для получения случайного ключа из объекта
function getRandomKey(obj) {
    return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
  }

function addGreenColor(){
    frontBackground.classList.add('background-green');
    frontSafetyZone.classList.add('safetyzone-green');
    frontCorner.forEach(corner => {
        corner.classList.add('corner-green');
    });
    frontBottomBlock.classList.add('category-green');
    frontIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5117 6.60547C15.7461 3.45312 13.4258 0 10 0C6.57031 0 4.25781 3.45703 5.48828 6.60547C2.56641 6.21875 0 8.48828 0 11.4062C0 14.082 2.16797 16.25 4.84375 16.25C6.26953 16.25 7.55078 15.6328 8.4375 14.6523C8.43359 16.0859 8.40625 16.6992 6.36719 17.6055C5.82812 17.8438 5.53125 18.4297 5.65234 19.0078C5.77344 19.5859 6.28516 20 6.875 20H13.125C13.7148 20 14.2266 19.5859 14.3477 19.0078C14.4688 18.4297 14.1719 17.8477 13.6328 17.6055C11.6172 16.707 11.5703 16.1172 11.5625 14.6523C12.4492 15.6328 13.7305 16.25 15.1562 16.25C17.832 16.25 20 14.082 20 11.4062C20 8.48438 17.4297 6.21875 14.5117 6.60547Z" fill="#4CBA6E"/>
</svg>`
}

function removeGreenColor(){
    frontBackground.classList.remove('background-green');
    frontSafetyZone.classList.remove('safetyzone-green');
    frontCorner.forEach(corner => {
        corner.classList.remove('corner-green');
    });
    frontBottomBlock.classList.remove('category-green');
    frontIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6404 0.257863C10.2772 -0.0859543 9.71105 -0.0859543 9.34791 0.257863C7.47364 2.04727 2.09293 7.22797 1.24951 8.16175C0.4959 8.99394 0 10.0918 0 11.3108C0 14.0652 2.14369 16.2415 4.82234 16.2532C6.25537 16.2571 7.54393 15.6398 8.43421 14.6552C8.4303 16.0852 8.40297 16.6986 6.38813 17.6011C5.83756 17.8472 5.52128 18.445 5.65795 19.0311C5.7868 19.5976 6.29442 20 6.87622 20H13.1004C13.7056 20 14.2405 19.578 14.3538 18.9842C14.4631 18.4138 14.1663 17.8433 13.6353 17.6089C11.6205 16.7103 11.5736 16.1203 11.5658 14.6552C12.4795 15.6632 13.811 16.2883 15.287 16.2493C17.9227 16.1828 20 14.0418 20 11.4046C20 10.1465 19.5236 9.01348 18.7505 8.15784C17.8993 7.22797 12.5185 2.04727 10.6404 0.257863Z" fill="#3598D3"/>
    </svg>`
}

function changeColorTheme(randomKey){
    switch(randomKey){
        case 'ООП':
            addGreenColor();
            break;
        case 'Python':
            if (frontBackground.classList.contains('background-green')){
                removeGreenColor();
            }
            break;
    }
}

let randomKey1 = getRandomKey(dictionary);
let randomKey2 = getRandomKey(dictionary[randomKey1]);
frontFace.innerHTML = randomKey2;
bottomText.innerHTML = randomKey1;
changeColorTheme(randomKey1);



card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
  if (card.classList.contains('is-flipped')) {
    backFace.innerHTML = dictionary[randomKey1][randomKey2]["face"];
    backAdd.innerHTML = dictionary[randomKey1][randomKey2]["add"]
  } else {
    randomKey1 = getRandomKey(dictionary);
    randomKey2 = getRandomKey(dictionary[randomKey1]);
    changeColorTheme(randomKey1);
    frontFace.innerHTML = randomKey2;
    bottomText.innerHTML = randomKey1;
    }
});

