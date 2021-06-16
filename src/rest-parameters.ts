export { };

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
}
const sum: (...values: number[]) => number = (...values: number[]): number => {
  //数字の配列が返ってくるのでResrパラメーターの型は数字の配列を意味する: number[]とする
  return values.reduce(reducer);
}

console.log(sum(1, 2, 3, 4, 5));


