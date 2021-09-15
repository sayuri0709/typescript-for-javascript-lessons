export { };

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>; //すべてのプロパティをオプショナルにする

type PropatyTypes = keyof Profile; //プロパティをユニオン型で受け取ることができる

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalProfile = Optional<Profile>;
