import { Observable, Subscription } from 'rxjs';
import { textColor } from '../helper'

let ourObservables = new Observable(observer => {
    observer.next(textColor("yellow","A"));
    setTimeout(() => {
        observer.next(textColor("green","B"));
        observer.error(textColor("red","Erreur"));
    }, 2000);
});

let ourSubscribtion : Subscription = ourObservables.subscribe(
    data => {
    console.log(data);    
    },
    error =>{
        console.error(error);
    }
);

ourSubscribtion.unsubscribe();