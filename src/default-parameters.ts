export { };

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => { //=でつないだものがデフォルト引数になる
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));　//この場合、rateにはデフォルト引数が適用されるので、実行結果は1100となる
