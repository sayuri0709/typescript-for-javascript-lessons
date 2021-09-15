export { };

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>; //SomeTypesからstringとnumber型を除外する
type NonFunctionType = Exclude<SomeTypes, DebugType>; //SomeTypesからDebugType型を除外する
type TypeExcludingFunction = Exclude<SomeTypes, Function>; //Functionは関数の型の総称


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtraxtingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;


