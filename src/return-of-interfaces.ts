export { };

class Mahotsukai { }
class Souryo { }

class Taro extends Mahotsukai { }

interface Kenja {
  ionazun(): void; //シグネチャー
}
interface Senshi {
  kougeki(): void;　//シグネチャー
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();

jiro.ionazun();
jiro.kougeki();
