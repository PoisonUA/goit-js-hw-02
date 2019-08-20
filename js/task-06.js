function checkForSpam(string, stopWords = ['spam', 'sale']) {
    string = string.toLowerCase();

    for (let i = 0; i < stopWords.length; i += 1) {
        if (string.includes(stopWords[i])) {
            return true;
        }
    }
    
    return false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
