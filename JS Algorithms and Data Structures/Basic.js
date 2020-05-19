// 1- Reverse a string
//reverseString("hello") should become "olleh".

function reverseString(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr;
}

reverseString('hello');

// 2- Return the factorial of the provided integer.
//factorialize(5) should return 120.

function factorialize(num) {
  let factorialized = 1;
  for (let i = 1; i <= num; i++) {
    factorialized *= i;
  }
  return factorialized;
}

factorialize(5);

// 3- Return the length of the longest word in the provided sentence.
//findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

function findLongestWordLength(str) {
  const arr = str.split(' ');
  let longestLength = 0;

  for (const word of arr) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }
  return longestLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// 4- Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].

function largestOfFour(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sortedArr = arr[i].sort(function (a, b) {
      return a - b;
    });
    resultArr.push(sortedArr[3]);
  }
  return resultArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// 5- Check if a string (first argument, str) ends with the given target string (second argument, target).
//confirmEnding("Congratulation", "on") should return true.
//confirmEnding("Connor", "n") should return false.
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.

function confirmEnding(str, target) {
  const startingIndex = str.length - target.length;
  const subStr = str.substr(startingIndex);
  if (subStr === target) return true;
  return false;
}

confirmEnding('Bastian', 'n');

// 6- Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//repeatStringNumTimes("*", 3) should return "***".
//repeatStringNumTimes("abc", 3) should return "abcabcabc".
//repeatStringNumTimes("abc", -2) should return "".

function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes('abc', 3);

// 7- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
//truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
//truncateString("A-", 1) should return "A...".

function truncateString(str, num) {
  if (num >= str.length) return str;
  let result = `${str.substr(0, num)}...`;
  return result;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

// 8- Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
    num = undefined;
  }
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// 9- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
//titleCase("sHoRt AnD sToUt") should return Short And Stout.
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout

function titleCase(str) {
  const arr = str.split(' ');
  const resultStr = arr
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
  return resultStr;
}

titleCase("I'm a little tea pot");

// 10- Use the array methods slice and splice to copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
//frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
//frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
//All elements from the first array should be added to the second array in their original order.
//The first array should remain the same after the function runs.
//The second array should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const arrResult = [...arr2];
  arrResult.splice(n, 0, ...arr1);
  return arrResult;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 11- Remove all falsy values from an array. False, null, 0, "", undefined and NaN are falsy.
//bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
//bouncer([false, null, 0, NaN, undefined, ""]) should return [].

function bouncer(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

bouncer([7, 'ate', '', false, 9]);

// 12- Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
//getIndexToIns([40, 60], 50) should return 1.
//getIndexToIns([3, 10, 5], 3) should return 0.

function getIndexToIns(arr, num) {
  let resultArr = [...arr];
  resultArr.push(num);
  resultArr.sort(function (a, b) {
    return a - b;
  });
  const index = resultArr.indexOf(num);
  return index;
}

getIndexToIns([40, 60], 50);

// 13-  Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case. The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".
//mutation(["hello", "hey"]) should return false.
//mutation(["hello", "Hello"]) should return true.

function mutation(arr) {
  const word = arr[0].toLowerCase();
  const checkingWord = arr[1].toLowerCase();
  for (let i = 0; i < checkingWord.length; i++) {
    if (word.indexOf(checkingWord[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);

// 14- Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
