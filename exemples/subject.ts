import { BehaviorSubject } from 'rxjs';
import  * as colors from 'colors';colors;

let subject: BehaviorSubject<string> = new BehaviorSubject<string>("a");

subject.subscribe(data=>{
    console.log(data.green);
});


subject.next("aaa");

subject.next("bbb");


