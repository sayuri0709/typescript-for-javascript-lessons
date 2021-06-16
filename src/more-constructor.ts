export { };

class Person {
  //宣言を省略して、引数にアクセス修飾子をつけることで初期化できる
  constructor(public name: string, protected age: number) {}
}
const me = new Person('はむさん', 43);
console.log(me);
