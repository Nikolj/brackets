module.exports = function check(str, bracketsConfig) {
  const num1 = [];
  const num2 = [];
  const op = [];
  const ut = [];
  let ele = [];
  let mam;
  bracketsConfig.forEach(arr => arr[0] === arr[1] ? num2.push(arr[0]) : num1.push(arr));
  num1.forEach(arr => {
    op.push(arr[0]);
    ut.push(arr[1])
  });

  
  for (let i = 0; i < str.length; i++) {
    if (op.includes(str[i])) {
      ele.push(str[i]);
    } else if (ut.includes(str[i])) {
      if (ele.length) {
        mam = ele[ele.length - 1];
        for (let j = 0; j < op.length; j++) {
          if (mam == op[j] && str[i] == ut[j]) {
            ele.pop();
            break;
          }
        }
      } else return false;
    }
    else if (num2.includes(str[i])) {
      ele.push(str[i]);
      mam = ele[ele.length - 1];
      if (ele.length >= 2 && mam === ele[ele.length - 2]) {
        ele.splice(-2, 2)
      }
    }
  }
  return (!ele.length);
}
