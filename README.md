# Obeservables
* Function that returns multiple values
* An observables is not executed before a subscription


# Operators

* An operator is simply a function that take an observable as an input and return a new one on the outupt

## Creations operators

* Creation operators are functions that can be used to create an Observable with some common predefined behavior or by joining other Observables

### of

* Create observable from multiple arguments 


### from

* Create observable from an array


### interval

* Creates an Observable that emits sequential numbers every specified interval of time

### iif

* Checks a boolean at subscription time, and chooses between one of two observable sources


## Join creation operatos

### merge

* Creates an output Observable which concurrently emits all values from every given input Observable.



### concat

* Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.


### forkJoin

* Creates an output Observable which will emit a group of the last values from corresponding observables


### combineLatest

* Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.

## Join operators

### concatAll

* Subscribe to inner observables from higher-order source observable in a queue


### mergeAll

* Subscribe to inner observables from higher-order source observable as it arrives


### exhaust

* Subscribe to the first inner observable from higher-order source observable as it arrives and ignore all newly arriving Observables until the first one completes


### switchAll

* Subscribe to the first inner observable from higher-order source observable as it arrives but when the next inner Observable arrives, unsubscribes to the previous one, and subscribes to the new one


## Transformation Operators

### buffer

* Buffers the source Observable values until closingNotifier emits.


### map

* Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.


### mergeMap

* Is basically a combination of two operators - merge and map. The map part lets you map a value from a source observable to an observable stream


### window

* Branch out the source Observable values as a nested Observable whenever windowBoundaries emits.

    > https://rxjs.dev/assets/images/marble-diagrams/window.png 
