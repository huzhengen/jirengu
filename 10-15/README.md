# 算法 数据结构

数据结构

* 哈希，对象是哈希，数组也是哈希，只要满足key: value的
* 队列
* 栈
* 链表
* 树

排序

* 冒泡排序 - 体育委员两两对比法
* 选择排序 - 体育老师一指禅法
* 插入排序
* 计数排序
* 桶排序
* 基数排序
* 堆排序

https://visualgo.net/bn/sorting

1、O(n*n)。冒泡排序，每每相邻的两个元素进行比较，如果后面的比前面的小，则交换两个元素的位置。从最开始到结尾，每每相邻的两对比较完毕之后，则排序完成。

2、O(n log2 n)。快速排序，以一个元素x为基准分成2部分，左边的要全部比x小，右边的要全部比x大，然后以此类推，两边的再分成2部分这样排列，最终完成排序。

3、O(n + max)。基数排序，所有的元素先按个位数的数值大小排序，排完之后再按十位数的大小排序，以此类推排到最高位为止，完成排序。

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

打印出最小值流程图：

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