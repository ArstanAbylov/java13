const main = document.querySelector('main');
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayList() {
    list.forEach(item => {
        document.createElement('div');
        div.textContent = item;
        main.append(div);
    });
}


displayList();
displayList();