"use strict";

class Citazione{
    constructor(cit = "Lorem ipsum", aut = "Anonimo", id = 9999999) {
        this._cit = cit;
        this._aut = aut;
        this._id = id;
    }

    get aut() {
        return this._aut;
    }

    set aut(newAut) {
        this._aut = newAut;
    }

    get cit() {
        return this._cit;
    }

    set cit(newCit) {
        this._cit = newCit;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

}



var elencoCitazioni = [
    new Citazione("Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"),
new Citazione("Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"),
new Citazione("Strive not to be a success, but rather to be of value.", "Albert Einstein"),
new Citazione("Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost"),
new Citazione("I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"),
new Citazione("You miss 100% of the shots you don’t take.", "Wayne Gretzky"),
new Citazione("I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"),
new Citazione("The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"),
new Citazione("Every strike brings me closer to the next home run.", "Babe Ruth"),
new Citazione("Definiteness of purpose is the starting point of all achievement.", "W. Clement Stone"),
new Citazione("We must balance conspicuous consumption with conscious capitalism.", "Kevin Kruse"),
new Citazione("Life is what happens to you while you’re busy making other plans.", "John Lennon"),
new Citazione("We become what we think about.", "Earl Nightingale"),
new Citazione("Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "Mark Twain"),
new Citazione("15.Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll"),
new Citazione("The most common way people give up their power is by thinking they don’t have any.", "Alice Walker"),
new Citazione("The mind is everything. What you think you become.", "Buddha"),
new Citazione("The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb"),
new Citazione("An unexamined life is not worth living.", "Socrates"),
new Citazione("Eighty percent of success is showing up.", "Woody Allen"),
new Citazione("Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs"),
new Citazione("Winning isn’t everything, but wanting to win is.", "Vince Lombardi"),
new Citazione("I am not a product of my circumstances. I am a product of my decisions.", "Stephen Covey"),
new Citazione("Every child is an artist.  The problem is how to remain an artist once he grows up.", "Pablo Picasso"),
new Citazione("You can never cross the ocean until you have the courage to lose sight of the shore.", "Christopher Columbus"),
new Citazione("I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"),
new Citazione("Either you run the day, or the day runs you.", "Jim Rohn"),
new Citazione("Whether you think you can or you think you can’t, you’re right.", "Henry Ford"),
new Citazione("The two most important days in your life are the day you are born and the day you find out why.", "Mark Twain"),
new Citazione("Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "Johann Wolfgang von Goethe"),
new Citazione("The best revenge is massive success.", "Frank Sinatra"),
new Citazione("People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "Zig Ziglar"),
new Citazione("Life shrinks or expands in proportion to one’s courage.", "Anais Nin"),
new Citazione("If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "Vincent Van Gogh"),
new Citazione("There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "Aristotle"),
new Citazione("Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "Jesus"),
new Citazione("The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"),
new Citazione("Go confidently in the direction of your dreams.  Live the life you have imagined.", "Henry David Thoreau"),
new Citazione("When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "Erma Bombeck"),
new Citazione("Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", "Booker T. Washington"),
new Citazione("Certain things catch your eye, but pursue only those that capture the heart.", " Ancient Indian Proverb"),
new Citazione("Believe you can and you’re halfway there.", "Theodore Roosevelt"),
new Citazione("Everything you’ve ever wanted is on the other side of fear.", "George Addair"),
new Citazione("We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "Plato"),
new Citazione("Teach thy tongue to say, “I do not know,” and thous shalt progress.", "Maimonides"),
new Citazione("Start where you are. Use what you have.  Do what you can.", "Arthur Ashe"),
new Citazione("When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "John Lennon"),
new Citazione("Fall seven times and stand up eight.", "Japanese Proverb"),
new Citazione("When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "Helen Keller"),
new Citazione("Everything has beauty, but not everyone can see.", "Confucius"),
new Citazione("How wonderful it is that nobody need wait a single moment before starting to improve the world.", "Anne Frank"),
new Citazione("When I let go of what I am, I become what I might be.", "Lao Tzu"),
new Citazione("Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "Maya Angelou"),
new Citazione("Happiness is not something readymade.  It comes from your own actions.", "Dalai Lama"),
new Citazione("If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", "Sheryl Sandberg"),
new Citazione("First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", "Aristotle"),
new Citazione("If the wind will not serve, take to the oars.", "Latin Proverb"),
new Citazione("You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.", "Unknown"),
new Citazione("We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", "Marie Curie"),
new Citazione("Too many of us are not living our dreams because we are living our fears.", "Les Brown"),
new Citazione("Challenges are what make life interesting and overcoming them is what makes life meaningful.", "Joshua J. Marine"),
new Citazione("If you want to lift yourself up, lift up someone else.", "Booker T. Washington"),
new Citazione("I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", "Leonardo da Vinci"),
new Citazione("Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", "Jamie Paolinetti"),
new Citazione("You take your life in your own hands, and what happens? A terrible thing, no one to blame.", "Erica Jong"),
new Citazione("What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", "Bob Dylan"),
new Citazione("I didn’t fail the test. I just found 100 ways to do it wrong.", "Benjamin Franklin"),
new Citazione("In order to succeed, your desire for success should be greater than your fear of failure.", "Bill Cosby"),
new Citazione("A person who never made a mistake never tried anything new.", " Albert Einstein"),
new Citazione("The person who says it cannot be done should not interrupt the person who is doing it.", "Chinese Proverb"),
new Citazione("There are no traffic jams along the extra mile.", "Roger Staubach"),
new Citazione("It is never too late to be what you might have been.", "George Eliot"),
new Citazione("You become what you believe.", "Oprah Winfrey"),
new Citazione("I would rather die of passion than of boredom.", "Vincent van Gogh"),
new Citazione("A truly rich man is one whose children run into his arms when his hands are empty.", "Unknown"),
new Citazione("It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", "Ann Landers"),
new Citazione("If you want your children to turn out well, spend twice as much time with them, and half as much money.", "Abigail Van Buren"),
new Citazione("Build your own dreams, or someone else will hire you to build theirs.", "Farrah Gray"),
new Citazione("The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", "Jesse Owens"),
new Citazione("Education costs money.  But then so does ignorance.", "Sir Claus Moser"),
new Citazione("I have learned over the years that when one’s mind is made up, this diminishes fear.", "Rosa Parks"),
new Citazione("It does not matter how slowly you go as long as you do not stop.", "Confucius"),
new Citazione("If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", "Oprah Winfrey"),
new Citazione("Remember that not getting what you want is sometimes a wonderful stroke of luck.", "Dalai Lama"),
new Citazione("You can’t use up creativity.  The more you use, the more you have.", "Maya Angelou"),
new Citazione("Dream big and dare to fail.", "Norman Vaughan"),
new Citazione("Our lives begin to end the day we become silent about things that matter.", "Martin Luther King Jr."),
new Citazione("Do what you can, where you are, with what you have.", "Teddy Roosevelt"),
new Citazione("If you do what you’ve always done, you’ll get what you’ve always gotten.", "Tony Robbins"),
new Citazione("Dreaming, after all, is a form of planning.", "Gloria Steinem"),
new Citazione("It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", "Mae Jemison"),
new Citazione("You may be disappointed if you fail, but you are doomed if you don’t try.", "Beverly Sills"),
new Citazione("Remember no one can make you feel inferior without your consent.", "Eleanor Roosevelt"),
new Citazione("Life is what we make it, always has been, always will be.", "Grandma Moses"),
new Citazione("The question isn’t who is going to let me; it’s who is going to stop me.", "Ayn Rand"),
new Citazione("When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", "Henry Ford"),
new Citazione("It’s not the years in your life that count. It’s the life in your years.", "Abraham Lincoln"),
new Citazione("Change your thoughts and you change your world.", "Norman Vincent Peale"),
new Citazione("Either write something worth reading or do something worth writing.", "Benjamin Franklin"),
new Citazione("Nothing is impossible, the word itself says, “I’m possible!”", "–Audrey Hepburn"),
new Citazione("The only way to do great work is to love what you do.", "Steve Jobs"),
new Citazione("If you can dream it, you can achieve it.", "Zig Ziglar")
];

function inizializzaElencoCitazioni() {
    for (let i = 0; i < elencoCitazioni.length; i++) {
        elencoCitazioni[i].id = i;
    }
}

function calcolaCitazioneACaso(numeroCitAttuale) {
    "use strict";
    let numeroCitazioniTotali = elencoCitazioni.length;
    let numeroRandom = Math.floor(Math.random() * numeroCitazioniTotali);
    if (numeroCitAttuale == numeroRandom) {
        if (numeroCitAttuale == 0) {
            numeroRandom = 1;
        } else if (numeroCitAttuale == numeroCitazioniTotali - 1) {
            numeroRandom = numeroCitazioniTotali - 2;
        } else {
            numeroRandom = numeroCitAttuale + 1;
        }
    }
    return numeroRandom;
}

function getCitazioneACaso(numeroCitAttuale = 0) {
    let numeroCitazione = calcolaCitazioneACaso(numeroCitAttuale);
    let cit = elencoCitazioni[numeroCitazione].cit;
    let aut = elencoCitazioni[numeroCitazione].aut;
    return {
        "cit": cit,
        "aut": aut,
        "id": numeroCitazione
    };
}
