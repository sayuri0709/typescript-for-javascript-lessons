export { };

let name: any = 'Ham';

//let length = (name as string).length; //型アサーション　その1
let length = name.length　as number; //型アサーション　その2
//let length = (<string>name).length; //型アサーション　その3 この記法はJSX技法と似ているので推奨しない

//length = 'foo';
