import { textColor } from "../../helper";

async function ourAsyncFunction() {
    return textColor('green', 'simple async & await promise');
}

async function testAwait() {
    let response = await ourAsyncFunction();
    console.log(response);
}

testAwait();