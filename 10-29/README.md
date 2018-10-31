# JS 数组 函数

### 数组

[MDN Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
var a = Array[3]
a.__proto__ === Array.prototype
```

Number String Boolean

不加 new 返回基本类型

加 new 返回复杂类型，对象

Object(Array Function)

加和不加 new 都返回复杂类型，对象

遍历数组

for

for in

伪数组，你的原型链中没有Array.prototype，就是伪数组

伪数组arguments

* forEach

```js
var a = [24,43,432,32,23,4,5]
a.forEach(function(value, index, array){
    console.log(value,index,array);
})
```

* sort

```js
var arr = [24,43,432,32,23,4,5]
arr.sort(function(a,b){
    return a - b;
})
```

* join

```js
arr.join('abc')
```

* map

```js
var arr1 = [24,43,432,32,23,4,5]
var arr2 = arr1.map(function(value, index){
    return value*2
})
arr1.map(value => value * 2) // 箭头函数
```

* filter

```js
var arr1 = [24,43,432,32,23,4,5]
arr1.filter(function(value,index){
    return value >= 10
})
arr1.filter(function(value,index){
    return value % 2 === 0
})
arr1.filter(function(value,index){
    return value % 2 === 0
}).map(function(value){
    return value * value
})
```

* reduce

```js
var arr1 = [24,43,432,32,23,4,5]
arr1.reduce(function(sum, n){
    return sum + n
}, 0)

// 变成map
arr1.reduce(function(arr, n){
    arr.push(n*2)
    return arr
}, [])

// 变成filter
arr1.reduce(function(arr, n){
    if(n % 2 === 0){
        arr.push(n)
    }
    return arr
}, [])
```

* concat

```js
var arr1 = [24,43,432,32,23,4,5]
var arr2 = [454,4,44,4,4,3]
var arr3 = arr1.concat(arr2);

var arr4 = arr1.concat([]) //用来复制一个数组
arr1 === arr4 // false
```

* indexOf
* lastIndexOf
* some
* slice

### 函数

#### 函数的5种声明

```js
function x(y, z){
    return undefined
}
x.name // x
```

```js
var x = function(y,z){
    return undefined
}
x.name  // x
```

```js
var x = function y(a){
    return undefined
}
x.name // y
```

```js
var x = new Function('x', 'y', 'return x+y')
x.name // anonymous // 匿名
```

```js
sum = (x,y) => {return x+y}
sum = (x,y) => x+y
n2 = n => n*n
```

console.log(x)，如果x不是字符串，会自动调用x.toString()方法

#### 如何调用函数

调用 call

可以执行代码的对象，就叫函数

```js
function f(x,y){return x+y}
f.call()
f.call(undefined, 1, 2)
f(1, 2)
```

#### 什么是 call stack 调用栈

递归

不懂

#### this 和 arguments

```js
f.call(undefined, 1, 2)
```

call的第一个参数可以用this得到

call后面的参数可以用arguments得到

```js
'use strict'
f = function(){
    console.log(this)
    console.log(arguments)
}
f.call(undefined, 1, 2, 3)
```

arguments 伪数组

#### 作用域

变量提升

```js
var a = 1

function f1(){

    f2.call()
    console.log(a)
    var a = 2 // 变量提升

    function f2(){
        var a = 3
        console.log(a)
    }

}

f1.call()

console.log(a)
```

```js
var a = 1

function f1(){
    console.log(a)
    var a = 2 // 变量提升
    f4.call()
}

function f4(){
    console.log(a) // 1
}

f1.call()
console.log(a)
```

```js
var liTags = document.querySelectorAll('li')
for(var i=0; i<liTags.length; i++){
    liTags[i].onclick = function(){
        console.log(i)
    }
}
```

#### 闭包

```js
var a = 1
function f(){
    console.log(a)
}
```

如果一个函数使用了它范围外的变量，那么（这个函数+这个变量）就叫做闭包