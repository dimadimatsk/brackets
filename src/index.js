module.exports = function check(str, bracketsConfig) {
  let BRACKETS_PAIR = {};
  bracketsConfig.forEach((element) => {
    BRACKETS_PAIR[element[0]] = element[1];
  });

  let stack = [];
  let pairStack = [];

  for (let elem of str) {
    if (
      BRACKETS_PAIR[elem] === elem &&
      pairStack[pairStack.length - 1] === elem
    ) {
      if (elem === stack[stack.length - 1]) {
        stack.pop();
        pairStack.pop();
      } else return false;
    } else if (
      BRACKETS_PAIR[elem] === elem &&
      pairStack[pairStack.length - 1] !== elem
    ) {
      stack.push(BRACKETS_PAIR[elem]);
      pairStack.push(BRACKETS_PAIR[elem]);
    } else if (
      Object.values(BRACKETS_PAIR).includes(elem) &&
      BRACKETS_PAIR[elem] !== elem
    ) {
      if (elem === stack[stack.length - 1]) stack.pop();
      else return false;
    } else {
      stack.push(BRACKETS_PAIR[elem]);
    }
  }

  return stack.length === 0;
};
