export { };

abstract class Animal { //抽象Class
  abstract cry(): string; //抽象メソッド
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
