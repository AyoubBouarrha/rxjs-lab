import { combineLatest, concat, forkJoin, merge, Observable, of } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';
import { textColor } from '../helper'

let obs1 = new Observable<string>(o => {
    let i = 0
    setInterval(() => {
        o.next(textColor('blue',`${++i}`));
        if (i > 10)
            o.complete();
    }, 100);
});

let obs2 = new Observable<string>(o => {
    let i = 0
    setInterval(() => {
        o.next(textColor('yellow',`${i+=10}`));
        if (i > 100)
            o.complete();
    }, 100);
});


//MAP
//obs1.pipe(map(v => v * 2)).subscribe(v => console.log(v));


//CREATION OPERATORS


//JOIN CREATION OPERATORS

//MERGE
//merge(obs1, obs2).subscribe(v => console.log(v));

//CONCAT
//concat(obs1, obs2).subscribe(v => console.log(v));

//FORKJOIN
//forkJoin(obs1, obs2).subscribe(v => console.log(v));

//COOMBINE LATEST
//combineLatest(obs1, obs2).subscribe(v => console.log(v));


//JOIN OPERATORS

//CONCAT ALL
let highOrderObservable = of(
    of(1,2,3,4,5),
    of('a','b','c','d','e')
)
highOrderObservable.pipe(concatAll()).subscribe(v => console.log(v));
//highOrderObservable.subscribe(v => console.log(v));
