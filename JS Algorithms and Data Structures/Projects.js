// 1-   Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  const filtered = str.replace(/[\W_]/g, '').toLowerCase();
  const opposite = filtered.split('').reverse().join('');
  if (filtered === opposite) return true;
  return false;
}

palindrome('eye');

// 2-Convert the given number into a roman numeral.
function convertToRoman(num) {
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let roman = '';

  for (let i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      roman += romanNums[i];
      num -= decimals[i];
    }
  }
  console.log(roman);
  return roman;
}

convertToRoman(68);
convertToRoman(36);

// 3-One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character
function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const result = str
    .split('')
    .map((char) => {
      const index = alphabet.indexOf(char);
      return index >= 0 ? alphabet[(index + 13) % 26] : char;
    })
    .join('');
  return result;
}

rot13('SERR PBQR PNZC');

// 4-Return true if the passed string looks like a valid US phone number.
function telephoneCheck(str) {
  const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;
  return regex.test(str);
}
