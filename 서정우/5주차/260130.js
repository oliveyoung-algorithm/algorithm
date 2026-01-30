const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const lines = input.slice(1);

// 특정 수를 제외한 글자의 수
const length = lines.reduce((acc, cur) => acc + cur.length, 0) - 1;

const nums1 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const nums2 = [
  "",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const digits10 = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const digit100 = [
  "",
  "onehundred",
  "twohundred",
  "threehundred",
  "fourhundred",
  "fivehundred",
  "sixhundred",
  "sevenhundred",
  "eighthundred",
  "ninehundred",
];

const generateNumberString = (num) => {
  if (num <= 10) {
    return nums1[num];
  } else if (10 < num && num < 20) {
    return nums2[num - 10];
  } else if (20 <= num && num < 100) {
    const digit10 = Math.floor(num / 10);
    const digit1 = num % 10;
    if (digit1 === 0) {
      return digits10[digit10];
    } else {
      return digits10[digit10] + nums1[digit1];
    }
  } else if (100 <= num && num < 1000) {
    const digit100Place = Math.floor(num / 100);
    const remainder = num % 100;
    if (remainder === 0) {
      return digit100[digit100Place];
    } else {
      return digit100[digit100Place] + generateNumberString(remainder);
    }
  }
};

if (length === 0) {
  console.log("four");
}

for (let i = length; i < 1000; i++) {
  if (length + generateNumberString(i).length === i) {
    console.log(
      lines
        .map((line) => (line === "$" ? generateNumberString(i) : line))
        .join(" ")
        .trim(),
    );
    break;
  }
}
