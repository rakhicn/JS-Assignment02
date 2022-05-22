const quotes = [{
    quote: `All great men are gifted with intuition, They know without 
    reasoning or anaysis what they need to know`,
    writer: `- by alexis carrel`
}, {
    quote: `All great men are gifted with intuition, They know without 
    reasoning or anaysis what they need to know`,
    writer: `- by alexis carrel`
}, {
    quote: `All great men are gifted with intuition, They know without 
    reasoning or anaysis what they need to know`,
    writer: `- by alexis carrel`
},]

let btn = document.querySelector("Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;

})