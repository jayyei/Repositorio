import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";


describe("Async Testing Examples", () => {

  it("Asynchronous test example with Jasmine done()",  (done: DoneFn) => {
    let test = false;

    setTimeout(()=> {
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);

  });

  it("Asynchronous test example - setTimeout()",  fakeAsync(() => {
    let test = false;

    setTimeout(() => {

    });

    setTimeout(()=> {
      console.log('running assertions setTimeout');
      test = true;
      // expect(test).toBeTruthy();
    }, 1000);

    // tick(500);
    // tick(499);
    // tick(1);
    flush();
    expect(test).toBeTruthy();
  }));

  it('Asynchronous test example - plain Promise', fakeAsync(() => {
    let test = false;

    console.log('Creating promise');

    // setTimeout(() => {
    //   console.log('setTimeout() first callback triggered.');
    // });

    // setTimeout(() => {
    //   console.log('setTimeout() second callback triggered.');
    // });

    Promise.resolve().then(() => {
      console.log('Promise first then() evaluated successfully');
      return Promise.resolve();
    })
      .then(() => {
        console.log('Promise second then() evaluated succcessfully')
        test = true;
      })

    flushMicrotasks();
    console.log('Running test assertions');
    // A promise is considered a microtask (The browser will not get the chance to update the view)
    // A Settimeout is considered a macrotask (other asynchronous operations Ajax, mouseClick, setInterval)
    // They are added in sepparated queues;

    expect(test).toBeTruthy();
    
  }));

  it('Asynchronous test example - Promises +  setTimeout()', fakeAsync(() => {
    let counter = 0;

    Promise.resolve()
      .then(() => {
        counter += 10;
        setTimeout(() => {
          counter += 1;
        }, 1000);
      });

    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(11);
  }));

  it('Asynchronous test example - Observables', fakeAsync(() => {
    let test = false;
    console.log('Creating Observable');

    const test$ = of(test).pipe(delay(1000));

    // This code run synchronously
    test$.subscribe(()=> {
      test = true;
    });

    tick(1000);

    console.log('Running test assertions');
    expect(test).toBe(true);
  }));
})