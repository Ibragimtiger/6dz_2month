let text;
let input = document.querySelector('#input')
let button = document.querySelector('#button')
let list = document.querySelector('#list')
let array = []


function changeInput(e){
     text = e.target.value.split('').reverse().join('');
}
input.addEventListener('keypress',changeInput);

function add (){
    array.push(text)
    array.forEach(item => {
        let h2 = document.createElement('h2')
        h2.innerText = item
        list.append(h2)
    })
}
button.addEventListener('click',add);