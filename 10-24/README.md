# JS基础

ES5新增特性汇总：https://zhuanlan.zhihu.com/p/24336831

ES 6 新特性汇总（一图全览）：https://zhuanlan.zhihu.com/p/24570791

### JS的7种数据类型

JS的7种数据类型：数字、字符串、布尔、符号、null、undefined、对象

JS的7种数据类型：number、string、boolean、symbol、null、undefined、object

JS的数据类型不包括：array、function，这俩都属于object

基本类型：number、string、boolean、symbol、null、undefined

复杂类型：object。复杂类型是由简单类型组成的。

* number：十进制（11）、二进制（0b11）、八进制（011）、十六进制（0x11）

* string：'nihao'、"nihao"、''、' '、
    转义符\
    多行字符串

* boolean：true、false
    &&、|| 与、或

* null：一个值null

* undefined：一个值undefined
    * null和undefined的区别：
        1、如果一个变量没有赋值，它就是undefined
        2、如果有一个对象object，现在还不想赋值，推荐给它null；如果是非对象，推荐初始化值为undefined。（惯例）

* object：对象，哈希表
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