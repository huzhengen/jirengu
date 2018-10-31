# DOM API

Document Object Model 文档模型

Node分为: Element、Text、Document、Comment

### Node的接口

6个知识点

nextSibling、previousSibling会获取到文本节点

innerText和textContent的区别是什么 // 面试

nodeType需要记两个值，1表示元素，3表示文本 // 面试

cloneNode分深拷贝和浅拷贝

isEqualNode和isSmameNode不一样

normalize是什么意思

#### 属性

* childNodes

document.body.childNodes

* children
* firstChild
* lastChild
* firstElementChild
* lastElementChild
* previousSibling
* previousElementSibling
* nextSibling
* nodeName

document.documentElement.nodeName

* nodeType // 1 3

document.body.firstChild.nodeType

* nodeValue
* ownerDocument
* parentElement
* parentNode
* textContent
* innerText
* outerText

#### 方法

* appendChild()
* cloneNode([true])
* contains()
* hasChildNodes()
* insertBefore()
* isEqualNode()
* isSameNode()
* removeChild()
* replaceChild()
* normalize()

### Document 接口

#### 属性

* anchors
* body
* characterSet
* childElementCount
* children
* doctype
* documentElement
* domain
* fullscreen
* head
* hidden
* images
* links
* location
* origin
* plugins
* readyState
* referrer
* scripts
* scrollingElement
* styleSheets
* title
* visibilityState

#### 方法

* close()
* createDocumentFragment()
* createElement()
* createTextNode()
* execCommand()
* exitFullscreen()
* getElementById()
* querySelector()
* registerElement()
* write()
* writeln()

### Element 接口

#### 属性

* accessKey
* attributes
* childElementCount
* children
* classList
* className
* clientHeight
* innerHTML
* tagName

#### 方法

* querySelector()















