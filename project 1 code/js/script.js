/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Sharath Nair


/***
  Variable named 'quotes' is used to create the array of quote objects.
  Five quote objects are added to the 'quotes' array.
  Each quote object has a 'quote' and 'source' property.
  last three quote objects have 'citation' and 'year' property  as well.

***/

var quotes = [
  {
    quote:'We are what we repeatedly do. Excellence then, is not an act,but a habit',
    source:'Aristotle'
  },
  {
    quote:'The only thing that I have done that is not mitigated by luck, diminished by good fortune, is that I persisted, and other people gave up.',
    source:'Harrison Ford'
  },
  {
    quote:'Any fool can criticize, condemn, and complain but it takes character and self control to be understanding and forgiving.',
    source:'Dale Carnegie',
    year:'1930'
  },
  {
    quote:'The more you read, the better you’re going to become as a storyteller.',
    source:'Stan Lee',
    citation:'IGN.com'
  },
  {
    quote:'Its only after we have lost everything that we are free to do anything',
    source:'Tyler Durden',
    citation:'Fight Club',
    year: '1999'
  }
];



/***
  A function named `getRandomQuote` is used to:
   - Create a  variable named 'randomNumber' which is used to store a random number with the help of [math.random()] function.
   -'randomNumber' returns the random quote object from the `quotes` array.
***/
function getRandomQuote(){
var randomNumber = Math.floor(Math.random()*quotes.length);
return quotes[randomNumber];
}



/***
  The `printQuote` function is used to:
   - Create a variable named 'randomQuote' and set it equal to  'getRandomQuote()'.
   - Create a variable named 'empty' and it is set as an empty string ''.
***/
function printQuote(){
var randomQuote = getRandomQuote();
var empty ='';

/***
With the help of the string concatenation property, we concatenate the following strings to the 'empty' variable.
***/
empty += '<p class="quote">' + randomQuote.quote +'</p>';
empty += '<p class="source">' + randomQuote.source ;
/***
We use 'if' statement to check whether the quote has a 'citation' or 'year' property.
And then concatenate to the 'empty' string.
The div with the id of "quote-box" is used with its innerHTML and is  set equal to the 'empty' string variable.
***/
if(randomQuote.citation){
empty +=  '<span class="citation">' +randomQuote.citation + '</span>';
}
if(randomQuote.year){
empty +=  '<span class="year">'+ randomQuote.year+ '</span>' ;
}
+ '</p>';
 document.getElementById("quote-box").innerHTML= empty;

}




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Since this is my first project I would like to opt for 'Meets Expectations' grade.
