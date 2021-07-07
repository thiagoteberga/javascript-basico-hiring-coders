/*

TO DO LIST

*/

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
/*
let lists = [{
    id: 1,
    name: 'html'
    },
    {
        id: 2,
        name: 'js'
    }
];
*/
let lists = [];

newListForm.addEventListener('submit',function(e){
    e.preventDefault();
    const listName = newListInput.value;
    if(listName === null || listName === '') return;
    const list = createList(listName);
    newListInput.value = null; //Limpar o valor do Input
    lists.push(list);
    render();
});

function createList(name) {
    return {
        id: Date.now().toString(),
        name: name
    }
}

function render() {
    clearElement(listContainer);
    lists.forEach(function(list){
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//Consultar se os elementos estão retornando
console.log(listContainer);
console.log(newListForm);
console.log(newListInput);

render(); //Testar se os Itens estão Indo para o HTML