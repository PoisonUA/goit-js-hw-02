const stopWords = ['spam', 'sale'];

function checkForSpam(string, array) {
    string = string.toLowerCase();

    for (let i = 0; i < stopWords.length; i += 1) {
        if (string.includes(stopWords[i])) {
            return true;
        }
    }
    
    return false;
}

console.log(checkForSpam('Latest technology news', stopWords)); // false

console.log(checkForSpam('JavaScript weekly newsletter', stopWords)); // false

console.log(checkForSpam('Get best sale offers now!', stopWords)); // true

console.log(checkForSpam('[SPAM] How to earn fast money?', stopWords)); // true
