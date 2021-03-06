# 虚拟DOM

[会动的简历DEMO](https://huzhengen.github.io/jirengu/12-04/%E4%BC%9A%E5%8A%A8%E7%9A%84%E7%AE%80%E5%8E%86highlightjs.html)

[皮卡丘DEMO](https://huzhengen.github.io/jirengu/12-04/Pikachu.html)

[画皮卡丘的过程](https://huzhengen.github.io/jirengu/12-04/%E7%94%BB%E7%9A%AE%E5%8D%A1%E4%B8%98%E7%9A%84%E8%BF%87%E7%A8%8B.html)

### ES6

```js
class VNode {
    constructor(tag, children, text){
        this.tag = tag
        this.children = children
        this.text = text
    }

    render(){
        if(this.tag === '#text'){
            return document.createTextNode(this.text)
        }
        let el = document.createElement(this.tag)
        this.children.forEach( vChild => {
            el.appendChild(vChild.render())
        } )
        return el
    }
}

function v(tag, children, text){
    if(typeof children === 'string'){
        text = children
        children = []
    }
    return new VNode(tag, children, text)
}
```

### ES5

```js
function vNode(tag, children, text){
    this.tag = tag
    this.children = children
    this.text = text
}

vNode.prototype.render = function(){
    if(this.tag === '#text'){ // 如果tag是text的话
        return document.createTextNode(this.text)
    }
    let el = document.createElement(this.tag)
    this.children.forEach( vChild => {
        el.appendChild(vChild.render())
    } )
    return el
}

function v(tag, children, text){
    if(typeof children === 'string'){
        text = children
        children = []
    }
    return new vNode(tag, children, text)
}

let vNode1 = v('div', [
    v('p', [
        v('span', [v('#text', 'google.com')])
    ]),
    v('span', [
        v('#text', 'yandex.com')
    ])
])

let vNode2 = v('div', [
    v('p', [
        v('span', [v('#text', 'google.com')])
    ]),
    v('span', [
        v('#text', 'yandex.com')
    ])，
    v('p', [
        v('span', [v('#text', 'naver.com')])
    ]),
])

console.log(vNode1.render())
console.log(vNode2.render())
```

### patch

```js
function patchElement(parent, newVNode, oldVNode, index=0){
    if(!oldVNode){
        parent.appendChild(newVNode.render())
    }else if(!newVNode){
        parent.removeChild(parent.childNodes[index])
    }else if(newVNode.tag !== oldVNode.tag || newVNode.text !== oldVNode.text){
        parent.replaceChild(newVNode.render(), parent.childNodes[index])
    }else{
        for(let i=0; i<newVNode.length || i<oldVNode.children.length; i++){
            patchElement(parent.childNodes[index], newVNode.children[i], oldVNode.children[i], i)
        }
    }
}

let vNode1 = v('div', [])
let vNode2 = v('p', [])
patchElement(root, vNode1)
```

### 结构

```js
let nodesData = {
    tag: 'div',
    children: [
        {
            tag: 'p',
            children: [
                {
                    tag: 'span',
                    children: [
                        {
                            tag: '#text',
                            text: 'google.com'
                        }
                    ],
                },
            ],
        },
        {
            tag: 'span',
            children: [
                {
                    tag: '#text',
                    text: 'yandex.com'
                }
            ]
        }
    ],
}
```


### 异步

异步：**不等结果**，直接进行下一步

怎么拿到结果？回调，回调可以拿到异步的结果

回调是拿到异步结果的一种方式

回调也可以拿到同步结果