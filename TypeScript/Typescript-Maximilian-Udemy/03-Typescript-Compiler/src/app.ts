const button = document.querySelector('button');

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return
}

function clickHandler (message: string, age : number) {
  let userName = 'Max'
  console.log('Clicked' + message)
}



if (button) {
  let user = '23'
  button.addEventListener('click', clickHandler.bind(null, "Rare", 30));
}
