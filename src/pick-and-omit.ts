export { };

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfie = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfilr = Omit<DetailedProfile, 'height'>;

type myOmit = Pick<DetailedProfile, 'name' | 'height' >;

type MySmallProfile = myOmit;
