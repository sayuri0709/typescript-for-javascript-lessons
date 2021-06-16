export { };

namespace Japanese {
  export namespace Tokyo {
    export class Person { //exporをつけるとnamespace外からも参照できる
      constructor(public name:string) {}
    }
  }
  export namespace Osaka {
    export class Person { //exporをつけるとnamespace外からも参照できる
      constructor(public name:string) {}
    }
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public LastName: string
    ) { }
  }
}

const michael = new English.Person('Michael', 'Jaseph', 'Jackson');
console.log(michael);



