function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for(let i:number=0;i<nums.length;i++){
        let y:number = target - nums[i];
         if(map.has(y)){
           return [map.get(y), i]
         } 
         map.set(nums[i],i)
    }
    return [];
};