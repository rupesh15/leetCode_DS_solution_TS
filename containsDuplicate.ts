function containsDuplicate(nums: number[]): boolean {
    let seenvalue = new Set<Number>();
    for(let i:number = 0; i<nums.length;i++){
      if(seenvalue.has(nums[i])){
          return true;
      }
      seenvalue.add(nums[i])
    }
    return false;
  };