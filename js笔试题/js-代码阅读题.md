下列控制台都输出什么
第1题：

```js
function setName(){
	name="张三";
}
setName();
console.log(name);
```

答案："张三"
第2题：

```js
//考点：1、变量声明提升 2、变量搜索机制
var a=1;
function test(){
	console.log(a);
	var a=1;
}
test();
```

答案：undefined
第3题：

```js
var b=2;
function test2(){
	window.b=3;
	console.log(b);
}
test2();
```

答案：3
第4题：

```js
c=5;//声明一个全局变量c
function test3(){
	window.c=3;
	console.log(c);		//答案：undefined，原因：由于此时的c是一个局部变量c，并且没有被赋值
	var c;
	console.log(window.c);//答案：3，原因：这里的c就是一个全局变量c
}
test3();
```

第5题：

```js
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr[10] = 'c';
alert(arr.length);	//答案：11
console.log(arr[5]);	//答案：undefined
```

第6题：

```js
var a=1;
console.log(a++);		//答案：1
console.log(++a);		//答案：3
```

第7题：

```js
console.log(null==undefined);	//答案：true
console.log("1"==1);		//答案：true，因为会将数字1先转换为字符串1
console.log("1"===1);		//答案：false，因为数据类型不一致
```

第8题：

```js
typeof 1;		"number"
typeof "hello";		"string"
typeof /[0-9]/;		"object"
typeof {};		"object"
typeof null;		"object"
typeof undefined;	"undefined"
typeof [1,2,3];		"object"
typeof function(){};	//"function"
```

第9题：

```js
parseInt(3.14);			//3
parseFloat("3asdf");		//3
parseInt("1.23abc456");
parseInt(true);//"true" NaN
```

第10题：

```js

//考点：函数声明提前
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    //var foo = 11;
}
alert(typeof bar());//"function"
```

第11题：考点：函数声明提前

```js

var foo = 1;
function bar() {
	foo = 10;
	return;
	function foo() {}
}
bar();
alert(foo);//答案：1
```

第12题：

```js

console.log(a);//是一个函数
var a = 3;
function a(){}
console.log(a);////3
```

第13题：

```js

//考点：对arguments的操作
function foo(a) {
    arguments[0] = 2;
    alert(a);//答案：2，因为：a、arguments是对实参的访问，b、通过arguments[i]可以修改指定实参的值
}
foo(1);
```

第14题：

```js

function foo(a) {
    alert(arguments.length);//答案：3，因为arguments是对实参的访问
}
foo(1, 2, 3);
```

第15题

```js

bar();//报错
var foo = function bar(name) {
	console.log("hello"+name);
	console.log(bar);
};
//alert(typeof bar);
foo("world");//"hello"
console.log(bar);//undefined
console.log(foo.toString());
bar();//报错
```

第16题：以下执行会有什么输出

```js
function test(){
	console.log("test函数");
}
setTimeout(function(){
	console.log("定时器回调函数");
}, 0)
test();
```

结果：
test函数
定时器回调函数
