# JSONP

请求方：A网站的前端 - 浏览器

响应方：B网站的后端 - 服务器

1、请求方创建script，src指向响应方，同时传一个查询参数`?callbackName=abc`

2、响应方根据查询参数，构造一个响应，类似这样

```js
abc.call('undefined', '数据')
```

3、浏览器接收到响应，就会执行对应的函数

4、请求方就知道了他要的数据

约定：

1、callbackName -> callback

2、abc -> 随机数

```js
let script = document.createElement('script')
let functionName = 'frank' + parseInt(Math.random()*100000, 10)
window[functionName] = function(result){
    if(result === 'success'){
        amount.innerText -= 1
    }else{
        console.log('error')
    }
}
script.src = 'http://jack.com:8082/pay?callback=' + functionName
document.body.appendChild(script)
script.onload = function(e){
    e.currentTarget.remove()
    delete window[functionName]
}
script.onerror = function(e){
    console.log('fail')
    e.currentTarget.remove()
    delete window[functionName]
}
```

jQuery

```js
$.ajax({
    url: 'http://jack.com:8082/pay'
    dataType: 'jsonp'
    success: function(response){
        if(response === 'success'){
            amount.innerText -= 1
        }
    }
})
```

JSONP为什么不支持POST请求？

1、因为JSONP是通过动态创建script实现的

2、动态创建script的时候，只能用GET，没法用POST