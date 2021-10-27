import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { textColor } from '../helper'



let ourSubject = new BehaviorSubject(textColor("yellow","Hello"));

console.log("Spying:",ourSubject.value);

ourSubject.subscribe(data => console.log(data));
ourSubject.subscribe(data => console.log(data));

ourSubject.next(textColor("red",Math.random()));
ourSubject.next(textColor("white",Math.random()));

console.log("Spying:",ourSubject.value);


//Convert Subject to Observable
let newObservable : Observable<any> = ourSubject.asObservable();

//Complete and close the subject
ourSubject.complete();

//Get list of observer subscribed to the subject
let observersList : Observer<any>[] = ourSubject.observers;



console.log(newObservable,observersList);





