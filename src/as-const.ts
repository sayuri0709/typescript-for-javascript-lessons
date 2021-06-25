export { };

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const; //as const を使用すれば決められた文字列のみ（定数）
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178
} as const; //すべてのプロパティがreadonlyになる

//profile.height = 180;

