//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string): boolean {
    let svalue = s.split("").sort();
    let tvalue = t.split("").sort();
     return svalue.join("") === tvalue.join("")
};