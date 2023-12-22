

function generateQuote() {
  
    var quotes = [
        " \"The only way to do great work is to love what you do. ",
        "\"Life is what happens when you're busy making other plans. ",
        "\"The future belongs to those who believe in the beauty of their dreams. ",
        "\"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "\"In three words I can sum up everything I've learned about life: it goes on. ",
        "\"The only limit to our realization of tomorrow will be our doubts of today. ",
        "\"Do not wait to strike till the iron is hot, but make it hot by striking. "
    ];
  var authors = [
     "-Steve Jobs","-John Lennon","-Eleanor Roosevelt","-Winston Churchill","-Robert Frost","-Franklin D. Roosevelt","-William Butler Yeats"
  ];
  
  var index = Math.floor(Math.random() * quotes.length);
  
  var quotebox = document.getElementById("text");
  var authortag = document.getElementById("author");
  quotebox.innerHTML = quotes[index];
  authortag.innerHTML = authors[index];
}

generateQuote()


function colorChange(){
  colors = ["#3498db","#2ecc71","#ecf0f1","#f39c12","#9b59b6","#e74c3c","#00bcd4","#f1c40f"];
  
  var index = Math.floor(Math.random() * colors.length);
  var changeColor = document.getElementById("body");
  changeColor.style.backgroundColor = colors[index];

}

colorChange()



var newQuote = document.getElementById('new-quote');
newQuote.addEventListener('click',function() {colorChange(),generateQuote()});


function tweetOnTwitter() {
    
    var tweetMessage = encodeURIComponent('Your Tweet Message');
    var tweetUrl = encodeURIComponent('Your Tweet URL');
    
    window.open('https://twitter.com/intent/tweet?text=' + tweetMessage + '&url=' + tweetUrl, 'Twitter Share', 'width=600,height=400');
  }