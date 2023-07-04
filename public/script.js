const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"
    ];
  
    const quoteElement = document.querySelector(".quote");
    const newQuoteButton = document.querySelector("#new-quote");
  
    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
  
    function displayQuote() {
        const randomQuote = getRandomQuote();
        quoteElement.textContent = randomQuote;
    }
    
    newQuoteButton.addEventListener("click", displayQuote);
    
    displayQuote();
