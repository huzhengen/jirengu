# Session

服务器通过Cookie给用户一个 SessionId

SessionId对应服务器里的一小块内存

每次用户访问服务器的时候，服务器就通过SessionId读取对应的Session，就知道用户的信息了。

### Session

1、将SessionID（随机数）通过Cookie发给客户端

2、客户端访问服务器时，服务器读取SessionID

3、服务器有一块内存（哈希表）保存了所有Ssession

4、通过SessionID我们可以得到对应用户的隐私信息，如id、email

5、这块内存（哈希表）就是服务器上的所有 Session

### LocalStorage

HTML5提供的API

```js
window.localStorage
```

Session 是基于Cookie实现的，那么可以不基于Cookie吗？