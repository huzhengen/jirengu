# cookie

请求头

有了cookie的时候，请求头会带上cookie

响应头

### Cookie 特点

1、服务器通过 Set-Cookie 响应头设置 Cookie（服务器通过 Set-Cookie 头给客户端一串字符串）

2、浏览器得到 Cookie 之后，每次请求都要带上 Cookie（客户端每次访问相同域名的网页时，必须带上这段字符串）

3、服务器读取 Cookie 就知道登录用户的信息

4、客户端要在一段时间内保存这个 Cookie

### Cookie存在哪？

Windows存在C盘的一个文件里

### Cookie 有效期

默认有效期：20分钟左右

后端可以强制设置有效期

### 注册登录过程

用户打开注册页面注册，发post请求，post email和密码，服务器收到，写入数据库，然后告诉用户注册成功了。

用户打开登录页面，发post，登录，给email和密码，如果在数据库中，则设置cookie，（这时候用户访问首页的话，会带上cookie，服务器会读cookie，根据cookie的email可以找到该用户，则能找到该用户的email、password等信息，这时就可以在首页填入该用户的这些信息。）