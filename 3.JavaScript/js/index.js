// alert(123);


/*
 * 一.JS数据类型  
 * 1.1 弱类型语言
 * 1.2 原始数据类型： Number String Boolean Undefined  引用数据类型：Object
 * 1.3 通过var进行声明，待赋值时判定类型。 可通过typeof查看数据类型。
 */
// var a1 = 12;
// alert(a1);
// alert(typeof a1);  //number

// var a2 = "abc";
// var a3 = 'aaa';
// alert(a2);
// alert(typeof a2);  //string
// alert(a3);
// alert(typeof a3);  //string

// var a4 = false;
// alert(a4);
// alert(typeof a4);  //boolean

// var a5;
// alert(a5);         //undefined
// alert(typeof a5);  //undefined

// var a6 = null;
// var a7 = [];  
// alert(a6);            //null
// alert(typeof a6);     //object
// alert(a6 == null);    //true
// alert(a7);            //[]
// alert(typeof a7);     //object
// alert(a7 == null);    //false

/*
 * 二.JS转换函数
 * 1.1 Number() 将指定变量转换成数字
 *     字符串类型   当其中没有字母出现时，方可转化；否则皆是NaN
 *     布尔类型     false转化后为0，true转化后为1
 *     Object类型   null空对象转化后为0，否则为NaN
 * 
 * 1.2 Boolean() 将其他类型强转成boolean类型
 *     字符串类型    ""是false  非空串时true
 *     Number类型    0是false  非0是true
 *     Object类型    undefined是false  null是false  其他皆为true
 *      
 * 1.3 parseInt() 将字符串转换成数字number类型
 */

//Number()
// var a1 = "abc";
// alert(Number(a1));  //NaN  not a number 不是一个数字
// var a2 = "123";
// alert(Number(a2));  //123
// var a3 = "123abc"; 
// alert(Number(a3));  //NaN
// var a4 = false;
// alert(Number(a4));  //0
// var a5 = true; 
// alert(Number(a5));  //1
// var a6 = null;
// alert(Number(a6));     //0
// var a7 = new Object();
// alert(Number(a7));     //NaN
// var a8;
// alert(Number(a8));     //NaN

//isNaN  返回true，判定这个的值不是一个数字
// var a9 = 0/0;
// alert(a9);          //NaN
// alert(Number(a9));  //NaN
// alert(isNaN(a9));   //true
// //js中没有0的概念，只是一个接近无穷小的数值
// var a10 = 12/0; 
// alert(a10);         //Infinity
// alert(Number(a10)); //Infinity
// alert(isNaN(a10));  //false


//Boolean()
// alert(Boolean(""));    //false
// alert(Boolean("123")); //true
// alert(Boolean(0));     //false
// alert(Boolean(1));     //true
// var a1;
// alert(Boolean(a1));    //false
// var a2 = null;
// alert(Boolean(a2));    //false
// var a3 = new Object();
// alert(Boolean(a3));    //true


//parseInt()
// alert(parseInt("123.4.5"));  //123
// alert(parseInt("111aaa"));   //111
// alert(parseInt("bbb222"));   //NaN


/*
 * 三.运算符  + - * / %
 * + 拼接字符串
 * ==判断值是否相等   ===判断值与类型都是否相等 恒等于
 * && || 逻辑运算符
 * 三目运算符
 */
// alert(1+1);
// alert("aaa"+"bbb");

// var a1 = 111;
// var a2 = "111";
// alert(a1==a2);   //true
// alert(a1===a2);  //false

// alert((1 > 2) && (1 < 2));  //false
// alert((1 > 2) || (1 < 2));  //true

// var a = 111;
// alert((a==="111"?"相等":"不相等"));


/*
 * 三.控制语句
 * if语句  switch语句
 */
//if语句
// var a = 10;
// if(a<10){
//     alert("a小于10");
// }else if(a>10){
//     alert("a大于10");
// }else{
//     alert("a等于10");
// }

//switch语句
// var a = false;
// switch (a) {
//     case true:
//         alert(true);
//         break;
//     case false:
//         alert(false);
//         break;
//     default:
//         alert("default");
//         break;
// }