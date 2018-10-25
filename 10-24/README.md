# JS基础

ES5新增特性汇总：https://zhuanlan.zhihu.com/p/24336831

ES 6 新特性汇总（一图全览）：https://zhuanlan.zhihu.com/p/24570791

### JS的7种数据类型

JS的7种数据类型：数字、字符串、布尔、符号、null、undefined、对象

JS的7种数据类型：number、string、boolean、symbol、null、undefined、object

JS的数据类型不包括：array、function，这俩都属于object

基本类型：number、string、boolean、symbol、null、undefined

复杂类型：object。复杂类型是由简单类型组成的。

* number：
    
    十进制（11）、二进制（0b11）、八进制（011）、十六进制（0x11）

* string：
    'nihao'、"nihao"、''、' '、

    转义符\

    多行字符串

* boolean：
    true、false

    &&、|| 与、或

* null：
    一个值null

* undefined：
    一个值undefined

    * null和undefined的区别：

        1、如果一个变量没有赋值，它就是undefined

        2、如果有一个对象object，现在还不想赋值，推荐给它null；如果是非对象，推荐初始化值为undefined。（惯例）

* object：
    对象，哈希表

    ```js
    var person = {
        name: 'frank', // 对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。如果键名是数值，会被自动转为字符串。
        age: 18
    }
    for(var key in person){
        console.log(key)
    }
    person['name'] // 请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。
    delete person['name']
    persion.age = undefined
    ```

typeof null   // 'object'

typeof fn   // 'function'

### 类型转换

#### 转成字符串

toString()或者与空字符串''相加或者用全局函数window.String()

* number->string: n.toString() // 1 + ''
* boolean->string: b.toString() // true + ''
* null->string: 报错 // Cannot read property 'toString' of null // null + ''
* undefined->string: 报错 // Cannot read property 'toString' of undefined // undefined + ''
* obj->string: o.toString()->[object Object] // obj + ''

#### 转成布尔值

Boolean()或者!!

* number：除了0和NaN，其它都是true
* string：除了空字符串''，其它都是true
* null：false
* undefined：false
* object：全都是true，数组和函数都是true

总共有5个falsy值：0、NaN、''、null、undefined；其它全都是true。

#### 转成数字

Number()或者parseInt()或者parseFloat()或者'1'-0或者+'1'

### 内存图

数字是64位的，字符是16位的

Stack栈内存

Heap堆内存

简单数据类型直接存到Stack里，复杂数据类型（object）存Heap地址到Stack里（数据放到Heap里，Stack里只放一个地址）。

### GC 垃圾回收

如果一个对象没有被引用，他就是垃圾，将被回收（还给浏览器/操作系统）。

内存泄漏：由于浏览器的一些bug，使得该被标记为垃圾的东西没有被标记为垃圾，内存就会被永久的占用着。

### 深拷贝 vs 浅拷贝

浅拷贝：b复制了a的值之后，b的变化会导致a的变化，就是浅拷贝。

```js
var a = {name: 'tom'}
var b = a
b.name = 'jim'
console.log(a.name) // jim
```

深拷贝：深拷贝也就是拷贝出一个新的实例，新的实例和之前的实例互不影响。

### others

[javascript 连等赋值问题](https://segmentfault.com/q/1010000002637728)

`.` 运算优先于 `=` 赋值运算，先算`.`再算`=`

赋值运算从右往左

[前端面试](https://leohxj.gitbooks.io/front-end-database/interview/)

[前端基础进阶：详细图解 JavaScript 内存空间](https://juejin.im/entry/589c29a9b123db16a3c18adf)

[JavaScript中的浅拷贝和深拷贝](https://segmentfault.com/a/1190000008637489)

### 面向对象

全局对象为`global`

浏览器里的全局对象是`window`

```js
global.parseInt
global.parseFloat
global.Number
global.String
global.Boolean
global.Object
```

```js
window.alert
window.prompt
window.comfirm
window.console.log
window.console.dir
window.document
window.document.createElement
window.document.getElementById
```

7种类型，5个falsy，内存图

### 原型

```js
var n = new Number(123)
var s = new String('abc')
var b = new Boolean(true)
var o = new Object()
```

```js
var o = new Object()
o.name = 'oliva'
o.age = 22
console.log(o)
// {name: "oliva", age: 22}
//     age: 22
//     name: "oliva"
//         __proto__: Object
```

o被叫做实例，name和age是自己的属性，实例有一个__proto__，指向所有对象共用的属性。

当你写o.toString()的时候，要找toString方法，在自己身上没有找到的话，就去__proto__里找toString()，也就是去对象的共用属性里去找。

Object的共用属性，即Object的原型，就是Object的prototype，这个就叫原型

```js
o.__proto__ === Object.prototype // true
n.__proto__ === Number.prototype
```

此时，n.`__proto__`.`__proto__`就是Number.prototype.`__proto__`，指向的是Object.prototype

```js
n.__proto__.__proto__ === Object.prototype
```

最顶端就是Object，Object的__proto__没有指向了，是null

```js
s.__proto__ === String.prototype
s.__proto__.__proto__ === Object.prototype
b.__proto__ === Boolean.prototype
b.__proto__.__proto__ === Object.prototype
```