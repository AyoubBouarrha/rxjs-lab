import { textColor } from '../../helper';

async function ourAsyncFunction() {
    return textColor('green', 'simple promise');
}

ourAsyncFunction().then((response) => console.log(response));
