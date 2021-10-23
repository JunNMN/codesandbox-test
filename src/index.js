/**
 * const, Letなどの変数宣言
 */

// var vall = "Valiable";
// console.log(vall);

// // var  変数は上書き可能
// vall = "上書きが可";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "再宣言";
// console.log(vall);

// let val2 = "let 変数";
// console.log(val2);

// // let は上書きが可能
// val2 = "letを上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "Letは再宣言不可";

// const val3 = "上書き不可";
// console.log(val3);

// val3 = "constは上書き不可";
// const val3 = "再宣言不可"；

// constで定義したObjectはPropertyの変更が可能
// const val4 = {
//   name:"test",
//   age: 99,
// };

// val4.name = "hoge";　//途中で変更可能
// val4.address = "Minnesota"　// 途中で追加も可能
// console.log(val4);

// Constで定義した配列はPropertyの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey"); // 配列を追加
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゅん";
// const age = 35;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// // バッククウォートを使う`` <-これのこと
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// // 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("Test Func"));

// const func2 = function (str) {
//   return str;
// };
// console.log(func2("Hello"));

// // アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("Hogehoge"));

// // const func4 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func4 = (num1, num2) => num1 + num2; // ブラケットを外して、１行にするとReturnは書かなくてもOK
// console.log(func4(5,4));

/**
 * 　分割代入
 */
//  構造体
//  const myProfile = {
//    name: "Jun",
//    age: 35
//  };

//  const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old.`
//  console.log(message1);

//  const {name, age} = myProfile;
//  const message2 = `My name is ${name}. I'm ${age} years old.`
//  console.log(message2);

// 配列
// const myProfile = ["Jun", 37];
// const message3 = `My name is ${myProfile[0]}. I'm ${myProfile[1]} years old.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message4);

/**
 * default value
 */

// const sayHallo = (name = "Kaoru") => console.log(`Hello ${name}. `);
// sayHallo();

/**
 * スプレッド構文
 */

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); // スプレッド構文で上の行と同じことをやってくれる

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; // 3,4,5をまとめてarr3に入れることができる
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // 配列のコピー、結合
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; // この場合は参照渡しとなってしまう。スプレッド構文はコピーとなる。
// console.log(arr8);
// arr8[0] = 100;　// ここで変更した値はarr4にも影響を与える
// console.log(arr4);

/**
 * mapやFillterを使った配列の処理
 */

//const nameArr = ["Tanaka", "Nishio", "Yamada"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
// }

// map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index +1}番目は、${name}です。`));　// mapの第一引数には要素、第二引数には番号が順番に入ってくる。

// // filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "Nishio") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件？　ある条件がtrueの時：条件がFalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //  三桁区切りにする

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '１００を超えています' : '範囲内です';
// }
// console.log(checkSum(2, 99));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2){
//    console.log("1 or 2 are ture.");
//  }

//  if(flag1 && flag2){
//   console.log("1 and 2 are true")
//  }

// // || は左側がfalseなら右側を返す
//  //const num = 100;
//  const num = null;
//  const fee = num || "金額が未設定です";
//  console.log(fee);

//  // && は左側がTrueなら右側を返す
//   const num2 = 100;
//   //const num2 = null;
//   const fee2 = num2 && "なにか設定されました";
//   console.log(fee2);
