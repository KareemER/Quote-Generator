var quotes = [
    {
        'author' : 'Thanos (Avengers: Endgame movie)' ,
        'quote' : 'The hardest choices require the strongest wills.'
    },
    {
        'author' : 'Frigga, queen of Asgard (Avengers: Endgame movie)' ,
        'quote' : 'Everyone fails at who they are supposed to be, Thor. The measure of a person, of a hero, is how well they succeed at being who they are.'
    },
    {
        'author' : 'Martha Beck' ,
        'quote' : 'How you do anything is how you do everything'
    },
    {
        'author' : 'Joker (The Dark Knight movie)' ,
        'quote' : 'Nobody panics when things go according to plan, even if the plan is horrifying'
    },
    {
        'author' : 'Joker (The Dark Knight movie)' ,
        'quote' : 'Introduce a little anarchy. Upset the established order, and everything becomes chaos.'
    },
    {
        'author' : 'Joker (The Dark Knight movie)' ,
        'quote' : 'I believe whatever does not kill you, simply makes you stranger'
    },
]

function showQuote(){
    var random = Number.parseInt(Math.random()*quotes.length);
    document.querySelector('#quote').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${quotes[random].author}`;
    
}