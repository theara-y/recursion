/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length == 0)
    return 0;
  if(nums.length == 1)
    return nums[0];
  return nums.pop() * product(nums)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length == 0)
    return 0;
  if(words.length == 1)
    return words[0].length;
  return Math.max(words.pop().length, longest(words));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length == 0)
    return '';
  if(str.length == 1)
    return str;
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length == 0)
    return false;
  if(str.length == 1)
    return true;
  if(str.length == 2)
    return str[0] == str[1];
  return str[0] == str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length == 0)
    return -1;
  if(arr[0] == val)
    return 0;
  let index = findIndex(arr.slice(1), val);
  if(index == -1) {
    return -1
  } else {
    return index + 1
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length == 1)
    return str;
  return revString(str.slice(1)) + str[0]
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let res = []
  for(let [key, value] of Object.entries(obj)) {
    if(typeof value == 'object') {
      res.push(...gatherStrings(value))
    } else if(typeof value == 'string') {
      res.push(value)
    }
  }
  return res
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if(left > right) {
    return -1
  }

  let mid = Math.floor((right + left) / 2)

  if(arr[mid] == val) {
    return mid;
  }

  if(arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
