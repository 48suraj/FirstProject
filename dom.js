// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);
// document.all[10].textContent='hello';
// document.all[22].textContent.fontcolor ='green';
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header')
header.style.borderBottom= 'solid 3px #000';

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[4]);
// items[0].style.fontWeight ='bold';
// items[1].style.fontWeight ='bold';
// items[2].style.fontWeight ='bold';
// items[3].style.fontWeight ='bold';
// items[4].style.fontWeight ='bold';
//items[4].style.fontColor ='green';
items[3].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";

}
