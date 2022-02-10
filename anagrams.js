function anagrams(word, words) {
  const result = [];
  const wordForCompare = word.split('').sort().join();
  const isAnagram = (target) => target.split('').sort().join() === wordForCompare;
  words.forEach(w => {
    if (isAnagram(w)) result.push(w);
  });
  return result;
}


// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));