# Vue

### Vue.js的特性：

* 轻量级的框架
* 双向数据绑定
* 指令
* 插件化

低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。

可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写

易用灵活高效

### MVVM

MVVM是把MVC里的Control和MVP里的Presenter改成了ViewModel。即Model+View+ViewModel。View的变化会自动更新到ViewModel，ViewModel的变化也会自动同步到View上显示。这种自动同步是因为ViewModel中的属性实现了Observer，当属性变更时都能触发对应的操作。

ViewModel是业务逻辑层，用来负责同时监控View和Model两边的数据，View是视图层，Model是数据层，视图层更新的时候会把数据同步到数据层，数据层更新的时候会吧数据同步到视图层

MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，ViewModel 是一个同步View 和 Model的对象。

在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到Model中，而 Model 数据的变化也会立即反应到View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

### 生命周期钩子

created - 实例创建完成，还未挂载的时候

mounted - el挂载到实例上后，一般我们的第一个业务逻辑会在这里开始

beforeDestroy - 实例销毁之前