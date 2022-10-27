//Enhanced deck of cards: PICK A CARD ANY CARD 2.0


const myDeck = {
    deck:[],
    drawnCards[],
    suits: ['Hearts', 'Clubs', 'Spades', 'Diamonds'],
    values: [2,3,4,5,6,7,8,9,10,J,Q,K,A]
    initializeDeck(){
         const {suits, values, deck} = this;
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
    },
    drawCard(){
       const card = this.deck.pop();
       this.drawnCards.push(card);
       return card;
    }
    drawMultiple(numCards){
        for(let 1 = 0; i <numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    }
    shuffle(){
        const{
            deck,
        } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--){
        //pick random index before current elements
            let j = Math.floor(Math.random()*(i +1));
        //swap
            [deck[i],deck[j] = deck[j], deck[i]];
        }
    }
    
}

// for my sanity 
const myDeck = makeDeck();
myDeck.makeDeck();
myDeck.initializeDeck();
makeDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h1 = myDeck.drawMultiple(3);
const h1 = myDeck.drawMultiple(5);

const deck2 =makeDeck();
deck2.initializeDeck()

// creating that deck duplication

const makeDeck = () => {
    return
    //mydeck code here
}