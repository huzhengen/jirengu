冒泡排序（体育委员两两摸头法）的流程图：

>每次两两相邻的做对比

```flow
st=>start: Start
op1=>operation: a = [4,6,3,2,1]
op2=>operation: 轮数 = 1
cond1=>condition: 轮数 < a.length
op7=>operation: index = 0
cond2=>condition: index <= a.length - 1 - 轮数
cond3=>condition: a[index] < a[index+1]
op4=>operation: index = index + 1
op5=>operation: t = a[index]; a[index] = a[index+1]; a[index+1] = t
op6=>operation: 轮数 = 轮数 + 1
op8=>operation: print a
e=>end: End

st->op1->op2->cond1
cond1(yes)->op7->cond2
cond1(no)->op8->e
cond2(yes)->cond3
cond2(no)->op6->cond1
cond3(yes)->op4->cond2
cond3(no)->op5->op4->cond2
```