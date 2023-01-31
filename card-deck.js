// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

async function get_card() {
    const base_url = 'https://deckofcardsapi.com/api/deck';
    const p1 = await axios.get(`${base_url}/new/shuffle/?deck_count=1`)
    const p2 = await axios.get(`${base_url}/${p1.data.deck_id}/draw/?count=1`)
    value = p2.data.cards[0].value
    suit =  p2.data.cards[0].suit
    console.log(`${value} of ${suit}`)
}

get_card()

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

const base_url = 'https://deckofcardsapi.com/api/deck';

async function get_cards() {
    const p1 = await axios.get(`${base_url}/new/shuffle/?deck_count=1`)
    const p2 = await axios.get(`${base_url}/${p1.data.deck_id}/draw/?count=1`)
    const p3 = await axios.get(`${base_url}/${p1.data.deck_id}/draw/?count=1`)

    value_1 = p2.data.cards[0].value
    suit_1 =  p2.data.cards[0].suit

    value_2 = p3.data.cards[0].value
    suit_2 =  p3.data.cards[0].suit

    console.log(`${value_1} of ${suit_1}, ${value_2} of ${suit_2}`)
}

get_cards()

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

deckId = null

async function shuffle_cards() {
    const p1 = await axios.get(`${base_url}/new/shuffle/?deck_count=1`)
    deckId = p1.data.deck_id
}

shuffle_cards()

const button = document.querySelector('button')
const card_area = document.querySelector('ul')

button.addEventListener("click", function()  {
    async function draw_card() {
        card_area.removeChild(card_area.firstChild)
        const card = await axios.get(`${base_url}/${deckId}/draw/?count=1`)

        fact_list = document.querySelector('#fact_list')

        value = card.data.cards[0].value
        suit =  card.data.cards[0].suit

        new_li = document.createElement('li')
        new_li.innerText = `${value} of ${suit}`
        card_area.append(new_li)
        console.log(card.data.remaining)

        if (card.data.remaining === 0) {
            button.hidden = true;
        };
    }

    draw_card()
})