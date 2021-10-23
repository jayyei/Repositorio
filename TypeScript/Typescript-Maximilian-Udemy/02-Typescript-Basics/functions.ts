function add(n1: number, n2 : number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}
//                                             -> will ignore the result returned in the callback
//                                            -> Anything that the callback return will no be used
function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// let combineValues: Function;
// function types define like the sign of a function
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8));

addAndHandle(10, 20, (result)=> {
  console.log(result);
  // ignore the definition in the callback
  return result;
})