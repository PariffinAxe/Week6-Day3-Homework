const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
 const lettersUsed = this.alphabet.filter((letter) => {
   return this.phrase.includes(letter);
 });
 if (lettersUsed.length === 26){
   return true;
 } else {
   return false;
 };
}

module.exports = PangramFinder;
