export { };

/* type MyExclude =
  | (string extends string | number ? never : string) //tureの場合は:の右側の方を採用するのでこの場合はneverになる　=> never
  | (number extends string | number ? never : number)　//tureの場合は:の右側の方を採用するのでこの場合はneverになる => never
  | (DebugType extends string | number ? never : DebugType);　//falseの場合は:の左側の方を採用するのでこの場合はDebugTypeになる => DebugType */

//type MyExclude = never | never | DebugType;

type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>; //SomeTypesからstringとnumber型を除外する
type MyFunctionType = MyExclude<SomeTypes>;

type FunctionTypeExtraxtingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;


