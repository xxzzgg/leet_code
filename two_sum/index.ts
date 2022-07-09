/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

var twoSum2 = function (nums, target) {
  const map = new Map();
	for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (map.has(num)) {
      console.log([map.get(num),i]);  
      return [map.get(num),i]
    } 
    map.set(num[i], i);
	}
};

twoSum([3, 1, 2, 3], 6);
twoSum2([3, 1, 2, 10,10,3], 6);
