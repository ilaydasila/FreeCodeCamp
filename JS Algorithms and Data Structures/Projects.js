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

  let romanized = '';

  for (let index = 0; index < decimals.length; index++) {
    while (decimals[index] <= num) {
      romanized += romanNums[index];
      num -= decimals[index];
    }
  }
  console.log(romanized);
  return romanized;
}

convertToRoman(68);
convertToRoman(36);
