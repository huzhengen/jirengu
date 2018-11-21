# jQuery.ajax

```js
window.jQuery.ajax = function(url, method, body, successFn, failFn){
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined, request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

window.$ = windwo.jQuery
```

```js
window.jQuery.ajax = function(options){
    let url
    if(arguments.length === 1){
        url = options.url
    }else if(arguments.length === 2]){
        url = arguments[0]
        options = arguments[1]
    }
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers

    let request = new XMLHttpRequest()
    request.open(method, url)
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined, request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

window.$ = windwo.jQuery
```