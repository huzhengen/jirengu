# AJAX

XMLHttpRequest

AJAX 异步的JavaScript和XML

1、使用XMLHttpRequest发请求

2、服务器返回XML格式的字符串

3、JS解析XML，并更新局部页面

请使用原生JS来发送AJAX请求

```js
let request = new XMLHttpRequest()
request.onreadystatechange = ()=>{
    console.log(request.readyState)
    if(request.readyState === 4){
        if(request.status >= 200 && request < 300){
            console.log('请求成功')
            console.log(request.responseText)
            let string = request.responseText;
            //把符合JSON语法的字符串转换成JS对应的值
            let object = window.JSON.parse(string)
            console.log(object)
        }else if(request.status >= 400){
            console.log('请求失败')
        }
    }
}
request.open('GET', '/')
request.send()
```

JSON vs JavaScript

1、JSON没有function和undefined

2、JSON的字符串首尾必须是双引号

同源策略

只有 `协议+域名+端口` 一模一样才允许发AJAX请求

突破同源策略 === 跨域

CORS

Cross-Origin Resource Sharing

```js
response.setHeader('Access-Control-Allow-Origin', 'http://jack.com:8002') // 响应头
```