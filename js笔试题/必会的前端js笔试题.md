# 笔试题

### 1、深拷贝

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```

### 2、防抖

```javascript
function debounce(func, wait) {
    let timeout;

    return function () {
        let context = this; // 保存this指向
        let args = arguments; // 拿到event对象

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
```

### 3、节流

```javascript
 function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}
```

### 4、数组去重

ES6:

```javascript
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
   // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

### [12种JavaScript数组去重](https://segmentfault.com/a/1190000016418021#:~:text=JavaScript%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%EF%BC%8812%E7%A7%8D%E6%96%B9%E6%B3%95%EF%BC%8C%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%85%A8%EF%BC%89%201%20%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E7%9A%84%E6%96%B9%E6%B3%95%202%20%E4%B8%80%E3%80%81%E5%88%A9%E7%94%A8ES6%20Set%E5%8E%BB%E9%87%8D%EF%BC%88ES6%E4%B8%AD%E6%9C%80%E5%B8%B8%E7%94%A8%EF%BC%89%203%20%E4%BA%8C%E3%80%81%E5%88%A9%E7%94%A8for%E5%B5%8C%E5%A5%97for%EF%BC%8C%E7%84%B6%E5%90%8Esplice%E5%8E%BB%E9%87%8D%EF%BC%88ES5%E4%B8%AD%E6%9C%80%E5%B8%B8%E7%94%A8%EF%BC%89,%E4%B8%83%E3%80%81%E5%88%A9%E7%94%A8hasOwnProperty%209%20%E5%85%AB%E3%80%81%E5%88%A9%E7%94%A8filter%2010%20%E4%B9%9D%E3%80%81%E5%88%A9%E7%94%A8%E9%80%92%E5%BD%92%E5%8E%BB%E9%87%8D%20More%20items...%20)
5、冒泡排序

```javascript
//升序算法
function sort(arr){
    for (var i = 0; i <arr.length; i++) {
        for (var j = 0; j <arr.length-i; j++) {
            if(arr[j]>arr[j+1]){
                var c=arr[j];//交换两个变量的位置
                arr[j]=arr[j+1];
                arr[j+1]=c;
            }
        };
    };
    return arr.toString();
}
console.log(sort([23,45,18,37,92,13,24]));
```
### 6、手写JSONP

```javascript
function jsonp(req) {
    var script = document.createElement('script');
    var url = req.url + '?callback=' + req.callback.name;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function hello(res){
    alert('hello ' + res.data);
}
jsonp({
    url : '',
    callback : hello 
});
```


### 7、解析url

```javascript
  function serilizeUrl(url) {
    var urlObject = {};
    if (/\?/.test(url)) {
        var urlString = url.substring(url.indexOf("?") + 1);
        var urlArray = urlString.split("&");
        for (var i = 0, len = urlArray.length; i < len; i++) {
            var urlItem = urlArray[i];
            var item = urlItem.split("=");
            urlObject[item[0]] = item[1];
        }
        return urlObject;
    }
    return null;
}
```
### 8、转义函数

```javascript
const escapeHTML = function (a) {
    a = "" + a;
    return a.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, `&quot;`)
        .replace(/'/g, "&apos;");;
}

const escapeHTML2 = function (str) {
    return str.replace(/[<>"&]/g, function (match) {
        switch (match) {
            case "<": return "&lt;";
            case ">": return "&gt";
            case "&": return "&amp;";
            case `""`: return "";
        }
    });
}

let html = `<h1> hello world </h1> `;

// document.body.innerHTML = html;

document.body.innerHTML = escapeHTML(html)
```
### 9、promise 封装ajax

```javascript
function sendAjax(url) {
  return new Promise((resolve, reject) => {
      //  1.创建对象
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      // 2.初始化设置请求方法(类型)和url
      xhr.open("GET", "https://api.apiopen.top/getJoke");
      // 3.发送
      xhr.send();
      // 4.绑定事件，onreadystatechange,存储函数（或函数名）处理响应结果(每当 readyState 改变时，就会触发 onreadystatechange 事件,一共会触发 4 次,从 0 到 4)
      // readyState 属性存有 XMLHttpRequest 的状态信息
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                  resolve(xhr.response);
              } else {
                  reject(xhr.status);
              }
          }
      }
  })
}
sendAjax()
  .then(value => {
      console.log(value);
      console.log(sendAjax());
  }, reason => {
      console.warn(reason);
  })
```

## 

###10、数组扁平化

```js
 var arr = [1, 2,[3, 4,[5,6,[7,8,[9,10],[11,12],[13,14,[15,16,[17,18]]]]]]]

 // flat方法可以扁平化，Infinity： 深度遍历
 // arr.flat(Infinity)

 // 自定义数组扁平化函数
 function flatArr(arr){

   let temp = []

   function farr(arr){
     for(let i = 0;i < arr.length;i++){
       let item = arr[i]
       // 判断元素类型，如果是数组，则递归，如果是基本类型，添加到新数组中
       if(Array.isArray(item)){
         farr(item)
       }else{
         temp.push(item)
       }
     }
   }
   farr(arr)
   return temp

   // return 

 }

let res =  flatArr(arr)
console.log("res:",res)
       
```

