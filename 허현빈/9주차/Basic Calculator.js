/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res = 0;
  let num = 0;
  let sign = 1;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= "0" && ch <= "9") {
      num = num * 10 + (ch.charCodeAt(0) - 48);
    } else if (ch === "+") {
      res += sign * num;
      num = 0;
      sign = 1;
    } else if (ch === "-") {
      res += sign * num;
      num = 0;
      sign = -1;
    } else if (ch === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      num = 0;
      sign = 1;
    } else if (ch === ")") {
      res += sign * num;
      num = 0;

      const prevSign = stack.pop();
      const prevRes = stack.pop();

      res = prevRes + prevSign * res;
    }
  }
  return res + sign * num;
};
