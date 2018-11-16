# 深入AJAX

JS可以设置任意请求header吗

JS可以获取任意响应header吗

```js
let request = new XMLHttpRequest()
request.open('post', '/') // 请求header第一部分
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') // 请求header第二部分
request.send('postdata') // 请求header第四部分
request.onreadystatechange = ()=>{
    console.log(request.readyState)
    if(request.readyState === 4){
        if(request.status >= 200 && request < 300){
            console.log(request.status) // 响应header第一部分
            console.log(request.statusText) // 响应header第一部分
            console.log(request.getResponseHeader('Content-Type')) // 响应header第二部分
            console.log(request.getAllResponseHeaders()) // 响应header第二部分
            console.log(request.responseText) // 响应header第四部分
            let string = request.responseText;
            //把符合JSON语法的字符串转换成JS对应的值
            let object = window.JSON.parse(string)
            console.log(object)
        }else if(request.status >= 400){
            console.log('fail')
        }
    }
}
```