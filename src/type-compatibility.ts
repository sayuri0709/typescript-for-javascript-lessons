export { };

let fooCompatible: any;
let barConparible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barConparible; //この場合any型はstring型と互換性がある

console.log(typeof fooCompatible); //string型のデータを代入することで型がstring型になる

let fooInCompatible: string;

let barInCompatible: number = 1;

// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

fooString = fooStringLiteral; //文字列リテラル型は文字列型の一部なのでエラーにならない

let fooNumber: number;

let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(43, 'Taro'); //
