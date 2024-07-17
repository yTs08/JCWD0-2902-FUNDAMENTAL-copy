// nomor 1
console.log("----nomor 1----");
function titleToNumber(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let value = s.charCodeAt(i) - `A`.charCodeAt(0) + 1;
    result = result * 26 + value;
  }
  return result;
}
let input = "AB";
console.log("input =", input);
console.log("output", "=", titleToNumber(input));
//nomor2
console.log("----nomor 2----");

function singleNumber(nums: number[]) {
  let uniqueSum = 0;
  let totalSum = 0;

  let set = new Set(nums);

  nums.forEach((num) => {
    totalSum += num;
  });

  set.forEach((num) => {
    uniqueSum += num;
  });

  return 2 * uniqueSum - totalSum;
}

let nums: number[] = [4, 1, 2, 1, 2];
console.log("input: nums = ", nums);
console.log("output", "=", singleNumber(nums));

// nomor 3
console.log("---- nomor 3----");

function isAnagram(s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }
  const count: number[] = new Array(26).fill(0);

  for (let char of s) {
    count[char.charCodeAt(0) - `a`.charCodeAt(0)]++;
  }

  for (let char of t) {
    count[char.charCodeAt(0) - `a`.charCodeAt(0)]--;
  }
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }
  return true;
}
let s = "rat";
let t = "car";
console.log(isAnagram(t, s));

// nomor 4
console.log("----nomor 4----");
