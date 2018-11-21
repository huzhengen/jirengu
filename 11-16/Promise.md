# Promise

```js
$.ajax({
    url: '/xxx',
    method: 'get',
    success: ()=>{},
    error: ()=>{}
}).then(success, fail)

function success(){}
function fail(){}
```

$.ajax({})返回一个Promise

```js
$.ajax({
    url: '/xxx',
    method: 'get',
    success: ()=>{},
    error: ()=>{}
}).then(
    ()=>{console.log('success')},
    ()=>{console.log('fail')}
)
```

```js
window.jQuery.ajax = function(options){    
    return new Promise(function(resolve, reject){ // window.Promise
        let url
        if(arguments.length === 1){
            url = options.url
        }else if(arguments.length === 2]){
            url = arguments[0]
            options = arguments[1]
        }
        
        // 解构赋值
        let {method, body, headers} = options

        let request = new XMLHttpRequest()
        request.open(method, url)
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

window.$ = windwo.jQuery
```

`return new Promise(function(resolve, reject){}`