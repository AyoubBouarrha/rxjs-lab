import { Observable, Subscription } from 'rxjs';
import { color } from '../helper'

let ourObservables = new Observable(observer => {
    observer.next(color("yellow"));
    setTimeout(() => {
        observer.next(color("green"));
    }, 2000);
});

let ourSubscribtion : Subscription = ourObservables.subscribe(data => {
    console.log(data);
});

//ourSubscribtion.unsubscribe();