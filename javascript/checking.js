function twoSum(arr, S) {
    let hashTable = {};
    // check each element in array
    for (let i = 0; i < arr.length; i++) {
    // calculate S - current element
    let sumMinusElement = S - arr[i];
    // check if this number exists in hash table
    if (hashTable[sumMinusElement] !== undefined) { 
    return true;
    }
    // add the current number to the hash table
    hashTable[arr[i]] = true;
    }
    return false;
   }