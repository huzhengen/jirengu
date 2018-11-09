# DOM事件模型 - DOM EVENTS

### DOM Level 0

onclick onerror onload onmouseover

### DOM Level 1

### DOM Level 2

### DOM Level 3

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>title</title>
</head>
<body>
<button id="x" onclick="print">A</button>
<button id="y" onclick="print()">B</button> <!--正确-->
<button id="z" onclick="print.call()">C</button> <!--正确-->
<!--eval()-->

<script>
x.onclick = print // 正确
y.onclick = print() // print()返回值是undefined
z.onclick = print.call() // print.call()返回值是undefined

function print(){
    console.log('hi')
}
<script>
</body>
</html>
```

```js
function f1(){
    console.log(1)
}
function f2(){
    console.log(2)
}
x.addEventListener('click', f1)
x.addEventListener('click', f2)
x.removeEventListener('click', f1)
x.addEventListener('click', f3)
x.removeEventListener('click', f3)
```

事件模型：捕获 冒泡

```js
grand1.addEventListener('click', function fn1(){
    console.log('爷爷')
})
parent1.addEventListener('click', function fn1(){
    console.log('父亲')
})
child1.addEventListener('click', function fn1(){
    console.log('儿子')
})
// 不传第三个参数
// 点击儿子，log顺序是“儿子->父亲->爷爷”

grand1.addEventListener('click', function fn1(){
    console.log('爷爷')
}， true)
parent1.addEventListener('click', function fn1(){
    console.log('父亲')
}， true)
child1.addEventListener('click', function fn1(){
    console.log('儿子')
}， true)
// 传第三个参数为true
// 点击儿子，log顺序是“爷爷->父亲->儿子”
```