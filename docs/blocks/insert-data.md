---
title: 插入数据模块
---

# 插入数据模块

将额外数据插入到[表](../workflow/table.md)或[变量](../workflow/variables.md)中

## 导入文件
将文件内容插入到一个变量或表的列中。要使用此功能，必须允许Automa访问文件URL，操作如下：

1. 转到 `chrome://extensions`
2. 找到Automa扩展并点击 **"详情"** 按钮
3. 向下滚动，启用 **"允许访问文件URL"** 选项

在值文本字段中，可以输入文件的绝对路径或文件的URL。例如，

- 绝对路径
	- Windows: `C:\Users\Public\Documents\testing.docx`
	- MacOS: `/Users/Josh/Desktop/docs.pdf`
- URL
	- `https://example.com/files/document.pdf`
	- `https://example.com/words.txt`

![导入文件内容](/images/blocks/insner_2_mrslmt.png)

## 插入多个表行
要将多个表行插入到列中，请使用双竖线 (`||`) 分隔每个值。例如：

```
值 1 || 值 2 || 值 3
```
![多行](/images/blocks/fieqmvqf5kb5seudggp4.png)