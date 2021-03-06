describe('toPigLatin', function() {
  it('return a simple word in pig latin', function() {
    expect(toPigLatin('word ')).to.equal('ordway ');
  });
  it('return a simple word in pig latin', function() {
    expect(toPigLatin(' word ')).to.equal(' ordway ');
  });
  it('return a simple word with multiple consonants at the beginning in pig latin', function() {
    expect(toPigLatin('school ')).to.equal('oolschay ');
  });
  it('return a simple word that ends the string, no space or period', function() {
    expect(toPigLatin('school')).to.equal('oolschay');
  });
  it('return two words in correct pig latin', function() {
    expect(toPigLatin('school today ')).to.equal('oolschay odaytay ');
  });
  it('return many words in correct pig latin', function() {
    expect(toPigLatin('school today was super duper fun')).to.equal('oolschay odaytay asway upersay uperday unfay');
  });
  it('return many words in correct pig latin, input ends in a period', function() {
    expect(toPigLatin('school today was super duper fun.')).to.equal('oolschay odaytay asway upersay uperday unfay.');
  });
  it('return multiple sentences in correct pig latin', function() {
    expect(toPigLatin('School today was super duper fun.  I like chickens.')).to.equal('oolSchay odaytay asway upersay uperday unfay.  Iay ikelay ickenschay.');
  });
});
describe('findWord', function() {
  it('return a string of characters before the first space in the input string', function() {
    expect(findWord("first word in the sentence", 0)).to.equal("first");
  });
  it('return a string of characters starting somewhere other than the beginning of the sentence', function() {
    expect(findWord("first word in the sentence", 6)).to.equal("word");
  });
  it('return the last word of a sentence, that ends with a period', function() {
    expect(findWord("first word in the sentence.", 18)).to.equal("sentence");
  });
});
describe('isFirstVowel',function(){
  it('return false if first character in string is not a vowel',function(){
    expect(isFirstVowel('first')).to.equal(false);
  });
  it('return true if first character in string IS a vowel',function(){
    expect(isFirstVowel('any')).to.equal(true);
  });
});
describe('moveConsonants',function(){
  it('remove first consonant, add to end',function(){
    expect(moveConsonants("cat")).to.equal("atc");
  });
  it('remove multiple consonants, add all to end',function(){
    expect(moveConsonants("schlep")).to.equal("epschl");
  });
});
describe('addEnding',function(){
  it('add ay to the end of a word',function(){
    expect(addEnding("another")).to.equal("anotheray");
  });
});
