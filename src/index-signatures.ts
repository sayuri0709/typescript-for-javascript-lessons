export { };

interface profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: profile = { name: 'Ham', underTwenty : false};

// How to write index signatures
// { [index: typeForIndex] : typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
