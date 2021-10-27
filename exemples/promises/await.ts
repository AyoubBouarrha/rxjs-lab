import { textColor } from '../../helper';

let simplePromise : Promise<string> = Promise.resolve(textColor('green', 'simple promise'));

async function testAwait() {
    let response = await simplePromise;
    console.log(response);
}

testAwait();
