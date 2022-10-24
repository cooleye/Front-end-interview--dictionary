### 1、用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。

```js
    function randomNub(aArray, len, min, max) {
               if (len >= (max - min)) {
                   return '超过' + min + '-' + max + '之间的个数范围' + (max - min - 1) + '个的总数';
               }
               if (aArray.length >= len) {
                   aArray.sort(function(a, b) {
                       return a - b
                   });
                   return aArray;
               }
               var nowNub = parseInt(Math.random() * (max - min - 1)) + (min + 1);
               for (var j = 0; j < aArray.length; j++) {
                   if (nowNub == aArray[j]) {
                       randomNub(aArray, len, min, max);
                       return;
                   }
               }
               aArray.push(nowNub);
               randomNub(aArray, len, min, max);
               return aArray;
           }
var arr=[];
randomNub(arr,10,10,100);
```


### 2、看下列代码，将会输出什么?(变量声明提升)

```js
var foo = 1;
(function(){
    console.log(foo);
    var foo = 2;
    console.log(foo);
})()
答案：输出undefined 和 2。上面代码相当于：    var foo = 1;
(function(){
    var foo;
    console.log(foo); //undefined
    foo = 2;
    console.log(foo); // 2;  
})()
```



### 3、 为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义

```js
const escapeHTML2 = function (str) {
    return str.replace(/[<>"&]/g, function (match) {
        switch (match) {
            case "<": return "<";
            case ">": return "&gt";
            case "&": return "&";
            case `""`: return "";
        }
    });
}

let html = `<h1> hello world </h1> `;

// document.body.innerHTML = html;

document.body.innerHTML = escapeHTML(html)
```



### 4、希望获取到页面中所有的checkbox怎么做？(不使用第三方框架)

```js
var domList = document.getElementsByTagName(‘input’)
var checkBoxList = [];
var len = domList.length;　　//缓存到局部变量
while (len--) {　　//使用while的效率会比for循环更高
　　if (domList[len].type == ‘checkbox’) {
    　　checkBoxList.push(domList[len]);
　　}
}
```

**或者更简单的 document.querySelectorAll("input[type='checkbox']") （上面代码看不懂的话，直接说下面这个)**

### 、看下列代码输出为何？解释原因。

```js
var a;
alert(typeof a); // undefined
alert(b); // 报错
```

解释：undefined是一个只有一个值的数据类型，这个值就是“undefined”，在使用var声明变量但并未对其赋值进行初始化时，这个变量的值就是undefined。

而b由于未声明将报错。注意未申明的变量和声明了未赋值的是不一样的。



### 6、看下列代码,输出什么？解释原因。

```js
var undefined;
undefined == null; // true
1 == true;   // true
2 == true;   // false
0 == false;  // true
0 == '';     // true
NaN == NaN;  // false
[] == false; // true   注意空数组空对象，负值转的布尔值时都为true
[] == ![];   // true   数组使引用类型，地址不相等

```

那么问题来了，看下面的代码，输出什么，foo的值为什么？

```js
var foo = "11"+2-"1";
console.log(foo);
console.log(typeof foo);
```

执行完后foo的值为111，foo的类型为number。



### 7、 输出今天的日期，以YYYY-MM-DD的方式，比如今天是2022年10月1日，则输出2022-10-01

```js
var d = new Date();
// 获取年，getFullYear()返回4位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0是1月，11是12月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? '0' + month : month;
// 获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);
```

函数声明与变量声明会被JavaScript引擎隐式地提升到当前作用域的顶部，但是只提升名称不会提升赋值部分。

### 8、把两个数组合并，并删除第二个元素。

```js
var array1 = ['a','b','c'];
var bArray = ['d','e','f'];
var cArray = array1.concat(bArray);
cArray.splice(1,1);
```


### 7、b继承a的方法

```js
function A( age, name ){
  this.age = age;
  this.name = name;
}
A.prototype.show = function(){
  alert('父级方法');
}
function B(age,name,job){
  A.apply( this, arguments );
  this.job = job;
}
B.prototype = new A();
var b = new A(14,'张三');
var a = new B(15,'李四','程序员');
```
