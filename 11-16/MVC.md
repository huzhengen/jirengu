# MVC

Model 操作数据

View 表示视图

Controller 是控制器

Model 和服务器交互，Model 将得到的数据交给 Controller，Controller 把数据填入 View，并监听 View
用户操作 View，如点击按钮，Controller 就会接受到点击事件，Controller 这时会去调用 Model，Model 会与服务器交互，得到数据后返回给 Controller，Controller 得到数据就去更新 View

### 可以无视下面的

V只负责看得见的东西 view

M只负责跟数据相关的操作 model

C负责关联 Controller

MVC是把所有代码分成2块，View表示展示的页面，Model表示数据有哪些操作（增删改查），Controller负责其他所有事情。

MVC是组织代码的思想

按功能划分代码

视图View

逻辑Controller

数据Model

Controller监听View的事件，Controller调用Model，Model从服务器获取数据返回Controller，Controller就更新View