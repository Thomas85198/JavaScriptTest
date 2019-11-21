console.log(10+1);
console.log('10'+1);
//設定物件today為今天Date日期的方法
var today = new Date();
console.log(1234+today);

//常數不可重複指派
const data = [1,2,3];
console.log(data);
// data=[4,5,6];
data[1]=10;

//解構指派（陣列）
var data2 = [56, 40, 26, 82, 19, 17, 73, 99];
var x0 = data2[0];
var x1 = data2[1];
var x2 = data2[2];
console.log(x0+x1+x2); //122

//let寫法解構指派（陣列）
let data3 = [56, 40, 26, 82, 19, 17, 73, 99];
let [y0, y1, y2, y3, ...other] = data3;

console.log(y0);
console.log(y1);
console.log(y2);
// console.log(y7);
console.log(other); //注意...很重要會把剩餘的產生陣列

//值交換
[y1, y2]=[y2, y1];
console.log(y1, y2);

//解構指派（物件）
let book = {title: 'Java 口袋書', publish: '技術評論設', price: 2680};
let {price, title, memo='none'} = book;

console.log(title); 
console.log(price);
console.log(memo);

//有other
let books = {title2: 'Java 口袋書', publish: '技術評論設', price2: 2680, 
other: {keywd: 'Java', logo:'dddd'}} ;
let {pric2, title2, other:{keywd}} = books;

console.log(price);
console.log(title);
console.log(keywd);

//用不同別名
let bookstore = {title3: 'Java 口袋書', publish3: '技術評論'};
let {title3 : a, publish3 : b } = bookstore;
console.log(a, b);

//捷徑判斷
x=1;
if(x===1){
	console.log('午安');
}
x===1 && console.log('午安');

//捷徑使用場合
var msg = '';
msg = msg || 'Hello, World';
console.log(msg);


// message = {message === undefined ? 'Hello, World' : message};


var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(delete ary[0]);
console.log(ary); //[Ajax ASP.NET] 

var obj = {x:1, y:2};
console.log(delete obj.x);
console.log(obj.x); //undefined

var obj2 = {x:obj, y:2};
console.log(delete obj2.x);
console.log(obj);

var data4 = 1;
console.log(delete data4);
console.log(data4);

// data5 = 10;
// console.log(delete data5);
// console.log(data5);

Number("12.522");
console.log(Number("12.522"));