import { combineLatest, concat, forkJoin, from, iif, interval, merge, Observable, of, pipe } from 'rxjs';
import { buffer, concatAll, exhaust, map, mergeAll, mergeMap, switchAll, tap, window } from 'rxjs/operators';
import { textColor } from '../helper'

let obs1 = new Observable<string>(o => {
    let i = 0
    setInterval(() => {
        o.next(textColor('blue', `${i += 10}`));
        if (i >= 100)
            o.complete();
    }, 100);
});

let obs2 = new Observable<string>(o => {
    let i = 0
    setInterval(() => {
        o.next(textColor('yellow', `${i += 100}`));
        if (i >= 1000)
            o.complete();
    }, 100);
});


let highOrderObservable: any = of(obs1, obs2);


//MAP
//obs1.pipe(map(v => v * 2)).subscribe(v => console.log(v));


//CREATION OPERATORS

//OF: create observable from multiple arguments 
//INTERVAL: Creates an Observable that emits sequential numbers every specified interval of time
//RANGE: Creates an Observable that emits a sequence of numbers within a specified range.


//FROM: create observable from an array
//from("tesst").subscribe(v => console.log(textColor('blue', v)));

// IIF : checks a boolean at subscription time, and chooses between one of two observable sources
//iif(() => false, obs1, obs2).subscribe(v => console.log(v));



//JOIN CREATION OPERATORS

//MERGE: creates an output Observable which concurrently emits all values from every given input Observable.
//merge(obs1, obs2).subscribe(v => console.log(v));

//CONCAT: creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.
//concat(obs1, obs2).subscribe(v => console.log(v));

//FORKJOIN: will emit a group of the last values from corresponding observables
//forkJoin(obs1, obs2).subscribe(v => console.log(v));

//COOMBINE LATEST
//combineLatest(obs1, obs2).subscribe(v => console.log(v));


//JOIN OPERATORS


//CONCAT ALL
//highOrderObservable.pipe(concatAll()).subscribe(v => console.log(v));

//MERGE ALL
//highOrderObservable.pipe(mergeAll()).subscribe(v => console.log(v));

//EXHAUST
//highOrderObservable.pipe(exhaust()).subscribe(v => console.log(v));

//SWITCHALL
//highOrderObservable.pipe(switchAll()).subscribe((v: any) => console.log(textColor('blue', v)));



//TRANSFORMATION OPERATORS

//BUFFER : Buffers the source Observable values until closingNotifier emits.
//obs1.pipe(buffer(interval(200))).subscribe(v => console.log(v));

//MAP
//obs1.pipe(map(v => v + '...')).subscribe(v => console.log(v));

//MERGE MAP
//obs1.pipe(mergeMap((v: any) => of(v,"..."))).subscribe(v => console.log(v));

//WINDOW
// obs1.pipe(
//     window(interval(400)),
//     tap(i => console.log("New observable")),
//     mergeAll()
// ).subscribe(v => console.log(v));

