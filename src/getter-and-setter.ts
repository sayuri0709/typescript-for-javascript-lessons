export { };

// * ower
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない。
//  * 参照できる。
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。


class MyNumberCard {
  private _ower: string; //privete修飾子をつけることで、途中で変更（参照）できなくする
  private _secretNumber: number;

  constructor(ower: string, secretNumber: number) {
    this._ower = ower;
    this._secretNumber = secretNumber
  }

  get ower() { //参照するためのメソッドは読み込み専用（getter）
    return this._ower;
  }

  set secretNumber(secretNumber: number) { //値を設定するときのみ実行するメソッド
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`; //個人番号確認用のデバッグメソッド
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
console.log(card.ower);
// card.secretNumber;
console.log(card.debugPrint());
card.secretNumber = 1111111111; //setterを使うと値を変更することが可能
console.log(card.debugPrint());

console.log(card.secretNumber); //←undefinedとなり参照は不可
