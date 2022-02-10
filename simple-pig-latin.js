function pigIt(str){
  return str.replace(/[A-Za-z]+/gi, (s => s.substring(1) + s[0] + 'ay'));
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

// Чужие решения, которые я хочу разобрать

function pigIt_1(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

