# 算法 数据结构

数据结构

* 哈希，对象是哈希，数组也是哈希，只要满足key: value的
* 队列
* 栈
* 链表
* 树

排序

* 冒泡排序 - 体育委员两两摸头法
* 插入排序
* 计数排序
* 桶排序
* 基数排序
* 堆排序

https://visualgo.net/bn/sorting

hash

计数排序

桶排序

基数排序

堆排序

队列 shift() 先进先出

栈 pop() 先进后出

数组是哈希，如果是先进先出，就是队列；如果是先进后出，就是栈。

链表

树

如果是完全二叉树或者满二叉树，就可以用数组表示。

流程图：

```flow
st=>start: Start
op1=>operation: a = [4,6,3,2,1]
op2=>operation: min = a[0]
op3=>operation: index = 0
cond1=>condition: index < a.length
cond2=>condition: a[index] < min
op4=>operation: min = a[index]
op5=>operation: index = index + 1
op6=>operation: print min
e=>end: End

st->op1->op2->op3->cond1
cond1(yes)->cond2
cond1(no)->op6->e
cond2(yes)->op4->op5
cond2(no)->op5->cond1
```