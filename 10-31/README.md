# jQuery

```html
<ul>
    <li id="item1">1</li>
    <li id="item2">2</li>
    <li id="item3">3</li>
    <li id="item4">4</li>
    <li id="item5">5</li>
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

封装第三个函数


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
Node.prototype.getSiblings = function (){
    var allChildren = this.parentNode.children
    var array = {
        length: 0
    }
    for(let i=0; i<allChildren.length; i++){
        if(allChildren[i] !== this){
            array[array.length] = allChildren[i]
            array.length +=1
        }
    }
    return array
}
Node.prototype.addRemoveClass = function (classes){
    for(let key in classes){
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        this.classList[methodName](key)
    }
}
Node.prototype.addClass = function (classes){
    classes.forEach( (value)=> this.classList.add(value) )
}

item3.getSiblings()
item3.addRemoveClass({a: true, b: false, c: true})
item3.addClass(['a', 'b', 'c'])
```

完成第三版

```js
window.jQuery = function(nodeOrSelector){
    let node
    if(typeof nodeOrSelector === 'string'){
        node = document.querySelector(nodeOrSelector)
    }else{
        node = nodeOrSelector
    }
    return {
        getSiblings: function(){
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
        },
        addRemoveClass: function (classes){
            for(let key in classes){
                var value = classes[key]
                var methodName = value ? 'add' : 'remove'
                node.classList[methodName](key)
            }
        },
        addClass: function (classes){
            classes.forEach( (value)=> node.classList.add(value) )
        },
    }
}

jQuery('#item3').getSiblings();
jQuery('#item3').addRemoveClass({a: true, b: false, c: true})
jQuery('#item3').addClass(['a', 'b', 'c']);
```

完成第四版

```js
window.$ = function(nodeOrSelector){
    let nodes = {}
    if(typeof nodeOrSelector === 'string'){
        let temp = document.querySelectorAll(nodeOrSelector)
        for(let i=0; i<temp.length; i++){
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    }else if(nodeOrSelector instanceof Node){
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }

    nodes.addClass = function (classes){
        classes.forEach( (value)=> {
          for(let i = 0; i<nodes.length; i++){
            nodes[i].classList.add(value)
          }
        } )
    }
    nodes.getText = function(){
        let texts = []
        for(let i = 0; i<nodes.length; i++){
            texts.push(nodes[i].textContent)
        }
        return texts
    }
    nodes.setText = function(text){
        for(let i=0; i<nodes.length; i++){
            nodes[i].textContent = text
        }
    }
    nodes.text = function(text){
        if(text === undefined){
            let texts = []
            for(let i = 0; i<nodes.length; i++){
                texts.push(nodes[i].textContent)
            }
            return texts
        }else{
            for(let i=0; i<nodes.length; i++){
                nodes[i].textContent = text
            }
        }
    }

    return nodes
}
$('li').addClass(['a', 'b', 'c']);
$('li').getText();
$('li').setText('hello');
$('li').text();
$('ul>li').text('hello');
```