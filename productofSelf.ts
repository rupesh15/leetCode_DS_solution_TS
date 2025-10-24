//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    if (n === 0) return [];
  
    const output = new Array<number>(n);
  
    let left = 1;
    for (let i = 0; i < n; i++) {
      output[i] = left;
      left *= nums[i];
    }
  
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
      output[i] *= right;
      right *= nums[i];
    }
  
    return output;
  }
  