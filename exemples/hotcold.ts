import { Observable, Subject } from 'rxjs';
import { textColor } from '../helper'

let coldObservble = new Observable(observer => {
    observer.next(textColor("blue",Math.random()));
});

coldObservble.subscribe(data => console.log(data));
coldObservble.subscribe(data => console.log(data));

let hotObservable = new Subject();

hotObservable.subscribe(data => console.log(data));
hotObservable.subscribe(data => console.log(data));

hotObservable.next(textColor("red",Math.random()));
hotObservable.next(textColor("white",Math.random()));

