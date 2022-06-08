console.log('Lodash is loaded:', typeof _ !== 'undefined');

// var players = [
//   {
//     name: 'Apple',
//     hand: []
//   },
//   {
//     name: 'Samsung',
//     hand: []
//   },
//   {
//     name: 'Meta',
//     hand: []
//   },
//   {
//     name: 'Amazon',
//     hand: []
//   }
// ];

// function createDeck() {
//   var suits = ['♠', '♣', '♥', '♦'];
//   var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

//   var deck = [];
//   for (var suitCounter = 0; suitCounter < suits.length; suitCounter++) {
//     for (var rankCounter = 0; rankCounter < ranks.length; rankCounter++) {
//       // var cards = { rank: ranks[rankCounter], suit: suits[suitCounter] };
//       deck.push(suits[suitCounter] + ranks[rankCounter]);
//       // deck.push(cards);
//     }
//   }
//   return deck;
// }

// var deck = createDeck();

// var shuffle = _.shuffle(deck);

// var twoCardHands = shuffle.splice(0, 2);
// function twoCards(deck) {
//   for (var i = 0; i < 2; i++) {
//     for (var j = 0; j < players.length; j++) {
//       var eachPlayerHand = players[j].hand;
//       eachPlayerHand.push(shuffle[i]);
//       shuffle.pop(i);
//     }
//   }
// }
