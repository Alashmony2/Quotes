var ele = document.getElementById('quote');
var ele2 = document.getElementById('person');

function randomQuote(){
    quotes = [
        '“Be yourself; everyone else is already taken.”',
        '“You only live once, but if you do it right, once is enough.”' ,
        '“So many books, so little time.”',
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        '“A room without books is like a body without a soul.”',
        '“Be the change that you wish to see in the world.”',
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    ];

    person = [
        '― Oscar Wilde',
        '― Mae West',
        '― Frank Zappa',
        '― Albert Einstein',
        '― Marcus Tullius Cicero',
        '― Mahatma Gandhi',
        '― Dr. Seuss'
    ];

    var num = Math.floor(Math.random() * person.length);
    
    ele.innerHTML = quotes[num]
    ele2.innerHTML = person[num]
}

