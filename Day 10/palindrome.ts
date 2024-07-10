let palindrome: string | string[] = "race, car";
const arrAlpah = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome.split("").filter((char) => {
  console.log(char, arrAlpah.includes(char));
});

const reversed = [...palindrome].reverse();
let ispalindrome = true;

console.log(ispalindrome);
