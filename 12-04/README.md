# 虚拟DOM

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