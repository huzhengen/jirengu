# Session

服务器通过cookie给用户一个sessionId

sessionId对应服务器里的一小块内存

每次用户访问服务器的时候，服务器就通过sessionId读取对应的session，就知道用户的信息了。

### Session

1、将SessionID（随机数）通过Cookie发给客户端

2、客户端访问服务器时，服务器读取SessionID

3、服务器有一块内存（哈希表）保存了所有session

4、通过SessionID我们可以得到对应用户的隐私信息，如id、email

5、这块内存（哈希表）就是服务器上的所有session

### LocalStorage

HTML5提供的API

```js
window.localStorage
```