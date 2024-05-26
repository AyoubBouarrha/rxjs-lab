import { textColor } from '../helper'

let test = (callback: Function) => {
    console.log(textColor('red','A'));
    callback();
}
test(() => console.log(textColor('yellow','B')));


console.log("normal task");

setTimeout(() => {
    console.log("micro task");
}, 5000);


fetch('http://test.com/api/articles')//Promise
  .then(response => console.log("macro task resonponse" , response));
let btn : any

setTimeout(() => {console.log("after 3 sec")}, 3000);

setInterval(() => {console.log("each 2 sec")}, 2000);

btn.addEventListener('click', () => {
    alert('You clicked me!');
});


