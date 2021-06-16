export { };

class Visacard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new Visacard('はむさん');

console.log(myVisaCard.owner);

// myVisaCard.owner = 'ベーコン';　//ownerプロパティは読み込み専用のプロパティなので、変更できない

