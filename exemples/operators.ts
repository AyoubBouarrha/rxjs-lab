import { combineLatest, concat, forkJoin, from, iif, interval, merge, Observable, of, pipe } from 'rxjs';
import { buffer, concatAll, exhaust, filter, map, mergeAll, mergeMap, switchAll, tap, window } from 'rxjs/operators';
import { textColor } from '../helper'

let obs1 = new Observable<string>(o => {
    let i = 0
    setInterval(() => {
        o.next(textColor('green', `${i += 10}`));
        if (i >= 100)
            o.complete();
    }, 100);
});

let obs2 = new Observable<string>(o => {
    let i = 0
    setInterval(() => {
        o.next(textColor('red', `${i += 100}`));
        if (i >= 1000)
            o.complete();
    }, 100);
});


// let highOrderObservable: any = of(obs1, obs2);


//MAP
obs1.pipe(map(v => v * 2)).subscribe(v => console.log(v));


//CREATION OPERATORS

//OF: create observable from multiple arguments 
of( textColor('red', 'A'), 
    textColor('green', 'B'), 
    textColor('yellow', 'C'))
    .subscribe(data => console.log(data));

//INTERVAL: Creates an Observable that emits sequential numbers every specified interval of time
interval(500).subscribe(data => console.log(data));


//RANGE: Creates an Observable that emits a sequence of numbers within a specified range.


//FROM: create observable from an array
from("test").subscribe(v => console.log(textColor('green', v)));

// IIF : checks a boolean at subscription time, and chooses between one of two observable sources
iif(() => false, obs1, obs2).subscribe(v => console.log(v));



//JOIN CREATION OPERATORS

//MERGE: creates an output Observable which concurrently emits 
//all values from every given input Observable.
merge(obs1, obs2).subscribe(v => console.log(v));

//CONCAT: creates an output Observable which sequentially emits 
//all values from the first given Observable and then moves on to the next.
concat(obs1, obs2).subscribe(v => console.log(v));

//FORKJOIN: will emit a group of the last values from corresponding observables
forkJoin(obs1, obs2).subscribe(v => console.log(v));

//COOMBINE LATEST
combineLatest(obs1, obs2).subscribe(v => console.log(v));


//JOIN OPERATORS


//CONCAT ALL
highOrderObservable.pipe(concatAll()).subscribe((v: any) => console.log(v));

//MERGE ALL
highOrderObservable.pipe(mergeAll()).subscribe((v : any) => console.log(v));

//EXHAUST
highOrderObservable.pipe(exhaust()).subscribe((v : any) => console.log(v));

//SWITCHALL
let highOrderObservable: any = of(obs1, obs2);
highOrderObservable.pipe(switchAll()).subscribe((v: any) => console.log(v));



//TRANSFORMATION OPERATORS

//BUFFER : Buffers the source Observable values until closingNotifier emits.
obs1.pipe(buffer(interval(200))).subscribe(v => console.log(v));

//MAP: Applies a given project function to each value emitted by the source Observable and emits the resulting values as an Observable.
obs1.pipe(map(v => v + '...')).subscribe(v => console.log(v));


//Filter: emits all items received from the source observable that satisfy a specified comparison function known as the predicate.
obs1.pipe(filter(v => v.includes('1') )).subscribe(v => console.log(v));


//MERGE MAP
obs1.pipe(mergeMap((v: any) => of(v,"..."))).subscribe(v => console.log(v));

//WINDOW
 obs1.pipe(
     window(interval(400)),
     tap(i => console.log("New observable")),
     mergeAll()
 ).subscribe(v => console.log(v));



//Tap
obs1.pipe(tap(v=> console.log(v + " Taped"))).subscribe(v => console.log(v));

