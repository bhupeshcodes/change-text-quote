const quotes = [
    {
        name: 'Khalifatul Masih III',
        quote: 'Love For All, Hatred For None.',
    },
    {
        name: 'Amy Poehler',
        quote: 'Change the world by being yourself.',
    },
    {
        name: 'T.S Eliot',
        quote: 'Every moment is a fresh beginning.',
    },
    {
        name: 'Mark Twain',
        quote: 'Never regret anything that made you smile.',
    },
    {
        name: 'Pablo Picasso',
        quote: 'Everything you can imagine is real.',
    }
]

const quotebtn = document.querySelector('#quotebtn');
const quoteauthor = document.querySelector('#quoteauthor');
const quote = document.querySelector('#quote');

quotebtn.addEventListener('click', displayquote);

function displayquote (){

    let number = Math.floor(Math.random()*quotes.length);
    quoteauthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}