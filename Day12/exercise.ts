// nomor 1
console.log("----nomor 1----");

function majorElement(nums: number[]) {
  let candidate: number | undefined;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else count += num === candidate ? 1 : -1;
  }

  if (candidate === undefined) {
    throw new Error("Majority doesn't exist");
  }

  return candidate;
}

const nums1 = [2, 2, 2, 1, 1, 1, 2, 2];
console.log(majorElement(nums1));

// nomor 2
console.log("----nomor 2----");

function romanToInt(s: string): number {
  const romanValues: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanValues[s[i]];
    let next = romanValues[s[i + 1]];

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
const input1 = "MMCX";
console.log(romanToInt(input1));
// nomor 3
console.log("----nomor 3----");
function generate(numRows: number): number[][] {
  if (numRows === 0) return [];

  let triangle: number[][] = [];

  // Generate first row
  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    let row: number[] = [];
    row.push(1); // First element of the row

    // Fill middle elements of the row
    for (let j = 1; j < i; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }

    row.push(1); // Last element of the row
    triangle.push(row);
  }

  return triangle;
}
const numRows = 1;
console.log(generate(numRows));
// nomor 4
console.log("----nomor 4----");
function maxProfit(prices: number[]) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
const prices1 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices1));
