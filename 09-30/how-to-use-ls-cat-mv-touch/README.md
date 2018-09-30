### 如何使用ls、cat、mv、touch

我用的是windows，装的git bash，用Linux或者Mac的话，命令都差不多。

**ls**

全拼是list directory，列出当前目录里的文件及文件夹。

（目前我知道的命令有）

* ls
* ls -a
* ls -l
* ls -al

![ls.png](./ls.png)

**cat**

我知道的cat功能有：

1、显示文件内容

2、合并文件

显示文件：cat filename

合并文件：cat file1 file2 > target_file

**mv**

移动、剪切、重命名

mv filename target

**touch**

1、创建文件

2、改变文件更改时间

touch filename

**关于explainshell.com这个网站**

[https://explainshell.com/explain?cmd=ls+-la](https://explainshell.com/explain?cmd=ls+-la)

打开网站，例如输入“ls -la”

会出现下图

![explainshell.png](./explainshell.png)

鼠标放到命令上，对应的解释会高亮。

* ls就表示列出目录内容

* -l表示显示文件的所有属性

* -a,-all表示显示开头是.的文件或文件夹