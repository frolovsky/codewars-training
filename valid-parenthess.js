const validParentheses = (str) => {
  const regexp = /\(\)/g;
  while (str.match(regexp)) {
    str = str.replace(regexp, '')
  }
  return str.length === 0;
}


console.log(validParentheses("(())((()())())"))
// "(())((()())())"  =>  true