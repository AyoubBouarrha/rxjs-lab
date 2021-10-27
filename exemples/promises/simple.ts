import { textColor } from '../../helper';

let simplePromise = Promise.resolve(textColor('green', 'simple promise'));

simplePromise.then(response => console.log(response));


// simplePromise.then(response => {
//     console.log(response)
// },
//     error => {
//         console.error(error);
// });