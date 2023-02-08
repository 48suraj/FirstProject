var itemList=document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';

// console.log(itemList.lastChild);

// console.log(itemList.firstElementChild)
// // itemList.firstElementChild.textContent='hello 1'

// console.log(itemList.firstChild);


// console.log(itemList.nextSibling);


// console.log(itemList.nextElementSibling);


// console.log(itemList.previousSibling);


// console.log(itemList.previousElementSibling.previousElementSibling);
// itemList.previousElementSibling.style.color='green'
var newDiv=document.createElement('div');
newDiv.className ='hello';

newDiv.id='hello1';

newDiv.setAttribute('title','Hello Div')

var newDivText =document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 =document.querySelector('header h1')
console.log(newDiv);

container.insertBefore(newDiv,h1);


