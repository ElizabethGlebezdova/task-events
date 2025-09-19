/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
    }

    ul.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target && target.tagName === 'LI') {
            target.setAttribute('title', target.textContent || '');
        }
    });

    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let wasFirstClick = false;
    a.addEventListener('click', (e) => {
        if (!wasFirstClick) {
            a.textContent = a.textContent + ' ' + a.href;
            wasFirstClick = true;
            e.preventDefault();
        }
    });

    document.body.appendChild(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const firstLi = document.createElement('li');
    firstLi.textContent = 'Пункт';
    ul.appendChild(firstLi);

    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';

    ul.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.tagName === 'LI') {
            target.textContent = target.textContent + '!';
        }
    });

    btn.addEventListener('click', (e) => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
    document.body.appendChild(btn);
}
