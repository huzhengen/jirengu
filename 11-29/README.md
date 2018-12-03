# 面向对象

知乎：[如何用一句话说明什么是面向对象思想？](https://www.zhihu.com/question/19854505)

知乎：[JS 的 new 到底是干什么的？](https://zhuanlan.zhihu.com/p/23987456)

MDN：[JavaScript面向对象简介](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

面向对象，以对象为主

Object-oriented programming OOP

### 术语

* Namespace
* Class
* Object
* Property
* Method
* Contructor
* Inheritance
* Encapsulation
* Abstraction
* Polymorphism

```js
// 全局命名空间
var MYAPP = MYAPP || {}
```

> 6个falsy值：false、undefined、null、''、0、NaN

### this

this 是 call() 的第一个参数

## new

```js
// 你用了new，下面注释的代码就会帮你写出来
function fn(id){
    // var temp = {}
    // this = temp
    // fn.prototype = { contrustor: fn }
    // this.__proto__ = fn.prototype
    this.id = id
    // return this
}
fn.prototype = {
    name: 'abc',
    walk: function(){}
}

new fn()
```

```js
var object = new Object() 的时候，做了什么？

object自有属性为空

object.__proto__ === Object.prototype
```