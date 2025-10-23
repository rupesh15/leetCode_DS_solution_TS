//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// leet code question 49
 
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for(let s of strs){
        const key = s.split('').sort().join('');
        if(!map.has(key)) map.set(key, [])
        map.get(key)!.push(s)
    }
    return Array.from(map.values())
};