// 1-   Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  const filtered = str.replace(/[\W_]/g, '').toLowerCase();
  const opposite = filtered.split('').reverse().join('');
  if (filtered === opposite) return true;
  return false;
}

palindrome('eye');
