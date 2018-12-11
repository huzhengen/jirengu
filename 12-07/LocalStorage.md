# LocalStorage SessionStorage

Session 是服务器上的hash表

LocalStorage 是浏览器上的hash表

```js
localStorage.setItem('a', '1')
```

Session 耗内存

windows系统，LocalStorage 存在C盘的一个文件里

```js
let already = localStorage.getItem('已经提示了')
if(!already){
    alert('提示用户')
}else{
    localStorage.setItem('已经提示了', true)
}
```

### LocalStorage

1、 LocalStorage 与 HTTP 无关

2、HTTP 不会带上 LocalStorage 的值

3、只有相同域名的页面才能互相读取 LocalStorage （没有同源那么严格）

4、每个域名 LocalStorage 最大存储量为5M左右（每个浏览器不一样）

5、常用场景：记录没有用的信息，不能记录密码，比如记录有没有提示用户

6、 LocalStorage 永久有效，没法设置过期时间，除非用户清除缓存

### SessionStorage

1、2、3、4、5同 LocalStorage

6、会过期，在用户关闭页面后失效（会话结束后）

### 面试题

Cookie和Session的关系：Session是基于Cookie实现的，Session必须把SessionID放在Cookie里，再发给客户端


Cookie和LocalStorage的区别：每次请求的时候Cookie会带给服务器，LocalStorage不会，因为LocalStorage和HTTP无关。Cookie一般最大4K，LocalStorage最大5M左右。

LocalStorage和SessionStorage什么区别：SessionStorage在用户关闭页面的时候失效，