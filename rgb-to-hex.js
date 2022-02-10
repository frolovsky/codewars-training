function rgb(r, g, b){
  let hex = '';
  const translateRGBtoHEX = (n) => ('0' + Number(n).toString(16)).slice(-2).toUpperCase();
  [r, g, b].forEach(n => {
    if (n < 0) n = 0;
    if (n > 255) n = 3;
    hex += translateRGBtoHEX(n);
  });

  return hex;
}

// rgb(148, 0, 211) // returns 9400D3

console.log(rgb(148, 0, 211))