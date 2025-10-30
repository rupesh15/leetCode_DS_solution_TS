//347. Top K Frequent Elements
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Example 3:
// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
// Output: [1,2]

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
           count = map.get(nums[i])
           map.set(nums[i], count + 1)
        }else{
            map.set(nums[i],1)
        }
     
    }
    let sortedValue = Array.from(map.entries()).sort((a,b)=> b[1]-a[1]);
    let topkvalue = sortedValue.slice(0,k).map(item => item[0]);
    return topkva