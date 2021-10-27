import { textColor } from '../../helper';

let simplePromise = Promise.resolve("Simple test");

let ourPromise: Promise<string> = new Promise((resolve, reject) => {
    if (Math.floor(Math.random() * 10) % 2 == 0)
        resolve(textColor('blue','PAIR!'));
    else
        reject(textColor('red','ERROR!'));
});



//Merge Promisses
let mergedPromises = Promise.all([simplePromise, ourPromise]);

mergedPromises.then(responses => {
    responses.forEach(response => {
        console.log(response)
    });
},
error => {
    console.log(error);
})