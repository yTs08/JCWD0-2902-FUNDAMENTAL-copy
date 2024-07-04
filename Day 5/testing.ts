const hal = (arr: number[]) => ({
  lowest: Math.min(...arr),
  highest: Math.max(...arr),
  average: (arr.reduce((s, val) => s + val) / arr.length).toFixed(4),
});
console.log(hal([12, 5, 23, 18, 4, 45, 32]));

const abcArr = [2, 3, 4, 5, 6];
const abcArr2 = abcArr.map((abcArr3) => {
  return abcArr3 * 2;
});
console.log(abcArr2);

const fruits = (arr: string[]) =>
  arr.map((v, i) => (i == arr.length - 1 ? `and ${v}` : v)).join(",");

console.log(fruits);
