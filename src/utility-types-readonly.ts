export { };

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>; //読み取り専用の型に変更する

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40
}

//friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;



