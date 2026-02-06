const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const line = input[0];

const [MD, YT] = line.split(", ");

const [M, D] = MD.split(" ");
const [Y, T] = YT.split(" ");
const [hours, minutes] = T.split(":").map(Number);

const monthMap = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const month = monthMap[M];
const day = Number(D);
const year = Number(Y);

const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
const days = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const totalMinutes = isLeapYear ? 366 * 24 * 60 : 365 * 24 * 60;

const currentDays =
  days.reduce((acc, cur, idx) => (idx < month - 1 ? acc + cur : acc), 0) + day - 1;
const currentHours = currentDays * 24 + hours;
const currentMinutes = currentHours * 60 + minutes;

const percent = (currentMinutes / totalMinutes) * 100;
console.log(
  Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 14 }).format(
    percent,
  ),
);
