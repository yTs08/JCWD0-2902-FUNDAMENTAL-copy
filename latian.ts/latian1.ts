const arr: number[] = [1, 2, 3];
const arrWords: string[] = ["a", "b", "c"];
const arr1 = [];
const arr2 = [];
for (let i = 0; i <= arr.length; i++) {
  for (let j = 0; j <= arrWords.length; j++) {}
  const arr1 = arr[i];
  const arr2 = arrWords[i];

  console.log(arr1, "=", arr2);
}

// write code to find area of rectangle
const length1 = 5;
const width = 3;
const area = length1 * width;
console.log("area", "=", area);

//write code to find perimeter of rectangle
const length2 = 5;
const width2 = 3;
const perimeter1 = (length2 + width2) * 2;
console.log("perimeter", "=", perimeter1);

// write code to find diameter, circumference, and area of circle
const radius = 5;
const diameter1 = 2 * radius;
const circumference2 = 2 * 3.65 * radius;
const areaCircle = radius * radius * 3.65;
console.log(
  "diameter",
  "=",
  diameter1,
  ",",
  "circumference",
  "=",
  circumference2.toFixed(4),
  ",",
  "area",
  "=",
  areaCircle
);

// angles of triangle
const sisi1 = 80;
const sisi2 = 65;
const angleOfTriangle = 180 - (sisi1 + sisi2);
console.log("angle", "=", angleOfTriangle);

// write code to convert days to years, months and days (1 year: 365days, 1 month: 30days)
