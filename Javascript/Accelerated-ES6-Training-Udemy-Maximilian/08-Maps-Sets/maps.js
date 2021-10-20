let cardAce = {
  name: 'Ace of Spaces'
}

let cardKing = {
  name: 'King of Clubs'
}

let deck = new Map();
// let deck = new Map([['as', cardAce], ['kc', cardKing]]);
deck.set('as', cardAce);
deck.set('kc', cardKing);

deck.set('kc', cardKing);
// console.log(deck.get('as'));
// console.log(deck.size);
// console.log(deck.delete('kc'));
// console.log(deck);
// deck.clear();
// console.log(deck);

console.log(deck.keys());
console.log(deck.values());

for (entrie of deck) {
  console.log(entrie);
}

// in a WeakMap you have to use a Object as a key
// it holds weak references to the entries in the map


let key1 = {a: 1};
let key2 = {b: 1};

let weakDeck = new WeakMap();
weakDeck.set(key1, cardAce);
weakDeck.set(key2, cardKing);

console.log(weakDeck)
