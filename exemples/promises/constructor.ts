import { textColor } from '../../helper';

let ourPromise: Promise<string> = new Promise((resolve, reject) => {
    if (Math.floor(Math.random() * 10) % 2 == 0)
        resolve(textColor('blue','PAIR!'));
    else
        reject(textColor('red','ERROR!'));
});

ourPromise.then(
    response => console.log(response),
    error => console.log(error)
)