# HTML CSS

简历预览：https://huzhengen.github.io/jirengu/10-10/resume.html

html spec

http-server -c-1

---

<a href="javascript:;"></a>

a[href=""]

* //baidu.com  http://baidu.com
* #top     ?name=tom
* javascript:;

---

form

POST

Content-Type: application/x-www-form-urlencoded

button不写type默认是一个提交按钮，可以提交。

select radio checkbox textarea

```html
<textarea style="resize:none;"></textarea>
```

---

table>((thead>tr>th)+(tbody>tr>td)+(tfoot>tr>td))

table>((colgroup>col)+(thead>tr>th)+(tbody>tr>td)+(tfoot>tr>td))

# CSS

Cascading Style Sheets

css spec

inherit 继承

[前端开发中文文档导航](http://cndevdocs.com/)

子元素加float:left，父级加clearfix

div的高度是由其内部文档流元素的高度总和决定的（并不一定相等）

文档流：文档内元素流动的方向

内联元素从左往右流动

块级元素从上往下流动，每一块占一行

word-break: break-all;

<del>display: inline-block;</del>

line-height （Google 方应杭 css line-height）

脱离文档流

添加fixed，宽度缩小了

### 立即执行函数

1、我们不想要全局变量

2、我们要使用局部变量

3、ES5里面，只有函数有局部变量

4、于是我们声明一个function fn()，然后fn.call()

5、这时，fn是全局变量（全局函数）

6、所以我们不能给这个函数名字

7、function(){}.call()，这样写，但是chrome报错，语法错误

8、所以，试出来一种方法可以不报错：!function(){}.call()