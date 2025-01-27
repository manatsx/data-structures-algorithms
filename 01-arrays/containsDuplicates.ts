/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums: number[]) => {
  const objNums: { [key: number]: boolean } = {};

  for (let intNum of nums) {
    if (objNums.hasOwnProperty(intNum)) {
      return true;
    }

    objNums[intNum] = true;
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
