export { };

type Pitcher1 = {
  throwingSpeed: number;　//投球スピード
};

type Batter1 = {
  battingAverage: number; //打率
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

//type TwoWayPlayer = {
//  throwingSpeed: number;
//  battingAverage: number;
//};

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohe: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
