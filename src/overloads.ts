export { };

//シグネチャー
function double(value: number): number; //数値を2倍にするシグネチャー
function double(value: string): string; //文字列を2回繰り替えるシグネチャー

function double(value: any): any {
  console.log(typeof value)
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true))
