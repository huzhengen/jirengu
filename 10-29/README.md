# JS标准库

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