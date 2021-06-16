export { };

class Person {
  public name: string;
  protected age: number;
  //private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string { //文字列を返すので型はstring
  return `name: ${this.name}, age:${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality) //親クラスのconstructorが継承される
  }
  profile(): string { //文字列を返すので型はstring
    return `name: ${this.name}, age:${this.age}, nationality: ${this.nationality}`; //ageはprivateなので、継承クラスでは呼び出すことができない
    //一方nationalityはprotectedなので、継承クラスで呼び出すことができる
  }
} //Person classを継承するAndroid classを作成


let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
