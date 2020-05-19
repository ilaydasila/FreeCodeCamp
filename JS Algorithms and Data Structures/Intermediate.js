// 1-We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// 2-Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//You can return the array with its elements in any order.
function diffArray(a, b) {
  const bothArr = a.concat(b);
  const filtered = bothArr.filter(
    (num) => !a.includes(num) || !b.includes(num)
  );
  return filtered;
}

// 3-You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  const args = Array.from(arguments).slice(1);
  const destroyed = arr.filter((e) => !args.includes(e));
  return destroyed;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 4-

// 5- Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  const filtered = str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]/gi, ' ');
  const dashed = filtered.split(' ').join('-').toLowerCase();
  return dashed;
}
spinalCase('thisIsSpinalTap');
spinalCase('This Is Spinal Tap');
spinalCase('AllThe-small Things');

// 6-

// 7- Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note
//Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
function myReplace(str, before, after) {
  const arrStr = str.split(' ');
  const word = arrStr.filter((word) => word === before).toString();
  if (word[0] === word[0].toLowerCase()) {
    return str.replace(before, after);
  } else {
    const afterUpperCase =
      after[0].toUpperCase() + after.split('').splice(1).join('');
    return str.replace(before, afterUpperCase);
  }
}

myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped');

// 8- The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  let resultArr = [];
  const arrStr = str.split('');
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === 'A') {
      const arr = ['A', 'T'];
      resultArr.push(arr);
    } else if (arrStr[i] === 'T') {
      const arr = ['T', 'A'];
      resultArr.push(arr);
    } else if (arrStr[i] === 'G') {
      const arr = ['G', 'C'];
      resultArr.push(arr);
    } else if (arrStr[i] === 'C') {
      const arr = ['C', 'G'];
      resultArr.push(arr);
    }
  }
  return resultArr;
}

pairElement('GCG');

// 9- 

// 10- 

// 11- 