# HTTP缓存

### Cache-Control

```js
response.setHeader('Cache-Control', 'max-age=30')
```

### Expires

```js
// 本地时间
response.setHeader('Expires', 'Sun, 24 Feb 2018 14:11:06 GM')
```

### Last-Modified

（自己研究）

精确度比 ETag 要低，所以这是一个备用机制

### ETag

MD5

```js
let fileMd5 = md5(string)
response.setHeader('ETag', fileMd5)
if(request.headers['if-none-match'] === fileMd5){
    response.statusCode = 304
}else{
    response.write(string)
}
response.end()
```

用Cache-Control是直接不请求（这种比较好）

用ETag是直接不下载，有请求，响应体是空的