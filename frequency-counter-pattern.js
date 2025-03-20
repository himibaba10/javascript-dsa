// Question: check if the element of first array is equal to the squared element of second array and the frequency is same

// We can try using frequency counter pattern when dealing with comparison of arrays or objects

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  // Adding the frequncy counter as object to track the frequency of each element
  const arr1FrequencyCounter = {};
  const arr2FrequencyCounter = {};

  for (let elem of arr1) {
    // If the key is there then increment by 1, otherwise initiate with 1
    arr1FrequencyCounter[elem] = (arr1FrequencyCounter[elem] || 0) + 1;
  }

  for (let elem of arr2) {
    // If the key is there then increment by 1, otherwise initiate with 1
    arr2FrequencyCounter[elem] = (arr2FrequencyCounter[elem] || 0) + 1;
  }

  for (let key in arr1FrequencyCounter) {
    // Return false if any element of first array is missing as a squared element of the second array
    if (!(key ** 2 in arr2FrequencyCounter)) return false;

    // Return false if the frequency is not equal of any element in both array
    if (arr1FrequencyCounter[key] !== arr2FrequencyCounter[key ** 2])
      return false;
  }

  return true;
};

console.log(same([1, 2, 2, 3], [1, 4, 4, 9]));
