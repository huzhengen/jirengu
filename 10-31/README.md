# jQuery

```html
<ul>
    <li id="item1">1</li>
    <li id="item1">2</li>
    <li id="item1">3</li>
    <li id="item1">4</li>
    <li id="item1">5</li>
</ul>
```

封装第一个函数

```js
function getSiblings(node){
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for(let i=0; i<allChildren.length; i++){
        if(allChildren[i] !== node){
            array[array.length] = allChildren[i]
            array.length +=1
        }
    }
    return array
}
console.log( getSiblings(item3) )
```

封装第二个函数

```js
function addRemoveClass(node, classes){
    for(let key in classes){
        var value = classes[key]
        if(value){
            node.classList.add(key)
        }else{
            node.classList.remove(key)
        }
    }
}
addClass(item3, {a: true, b: false, c:true})
```

封装第三个函数

```js
function addRemoveClass(node, classes){
    for(let key in classes){
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}
addClass(item3, {a: true, b: false, c:true})
```

```js
function addClass(node, classes){
    classes.forEach( (value)=> node.classList.add(value) )
}
```

命名空间

```js
window.ffdom = {}
ffdom.getSiblings = getSiblings
ffdom.addRemoveClass = addRemoveClass
ffdom.addClass = addClass

ffdom.getSiblings(item3)
ffdom.addRemoveClass(item3, {a: true, b: false, c: true})
ffdom.addClass(item3, ['a', 'b', 'c'])
```

完成第一版

```js
window.ffdom = {}
ffdom.getSiblings = function (node){
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for(let i=0; i<allChildren.length; i++){
        if(allChildren[i] !== node){
            array[array.length] = allChildren[i]
            array.length +=1
        }
    }
    return array
}
ffdom.addRemoveClass = function (node, classes){
    for(let key in classes){
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}
ffdom.addClass = function (node, classes){
    classes.forEach( (value)=> node.classList.add(value) )
}

ffdom.getSiblings(item3)
ffdom.addRemoveClass(item3, {a: true, b: false, c: true})
ffdom.addClass(item3, ['a', 'b', 'c'])
```

完成第二版

```js
Node.prototype.getSiblings = function (node){
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for(let i=0; i<allChildren.length; i++){
        if(allChildren[i] !== node){
            array[array.length] = allChildren[i]
            array.length +=1
        }
    }
    return array
}
Node.prototype.addRemoveClass = function (node, classes){
    for(let key in classes){
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}
Node.prototype.addClass = function (node, classes){
    classes.forEach( (value)=> node.classList.add(value) )
}

item3.getSiblings()
item3.addRemoveClass({a: true, b: false, c: true})
item3.addClass(['a', 'b', 'c'])
```