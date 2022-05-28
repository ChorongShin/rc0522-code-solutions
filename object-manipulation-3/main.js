console.log('Lodash is loaded:', typeof _ !== 'undefined');

// var players = [
//   {
//     name: 'Apple',
//     hand: 'Four of a kind'
//   },
//   {
//     name: 'Samsung',
//     hand: 'Flush'
//   },
//   {
//     name: 'Meta',
//     hand: 'Straight'
//   },
//   {
//     name: 'Amazon',
//     hand: 'Full house'
//   }
// ];

function createDeck() {
  var suits = ['spades', 'diamond', 'clubs', 'hearts'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  var deck = [];
  for (var suitCounter = 0; suitCounter < suits.length; suitCounter++) {
    for (var rankCounter = 0; rankCounter < ranks.length; rankCounter++) {
      var cards = { rank: ranks[rankCounter], suit: suits[suitCounter] };
      // deck.push(ranks[rankCounter] + suits[suitCounter]);
      deck.push(cards);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var random = Math.floor(Math.random() * 52);
    deck[i] = deck[random];
    deck[random] = tempCard;
  }
}

var deck = createDeck();
var shuffle = shuffleDeck(deck);

function twoCards(deck) {
  for (var j = 0; j < 2; j++) {
    console.log(`${deck[j].rank} of ${deck[j].suit}`);
  }
}
twoCards(shuffle);
