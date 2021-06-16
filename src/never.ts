export { };

function error(message: string): never {
  throw new Error(message); //例外を発生させている
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!');
