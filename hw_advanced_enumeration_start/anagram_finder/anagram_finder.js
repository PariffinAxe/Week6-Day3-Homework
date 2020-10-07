const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
    this.sortedWord = word.toLowerCase().split('').sort().toString();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const anagrams = otherWords.filter((word) => {
        if (word.toLowerCase() != this.word){
            let sortedOtherWord = word.toLowerCase().split('').sort().toString();
            if (sortedOtherWord === this.sortedWord){
                return word
            };  
        };
    });
    return anagrams;
}

module.exports = AnagramFinder;
