const IsogramFinder = function (word) {
 this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
 const uniqueLetters = new Set(this.word);
 if (uniqueLetters.size === this.word.length){
  return true;
 } else {
  return false;
 };
}

module.exports = IsogramFinder;
