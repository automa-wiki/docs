---
title: 触发模块
---

# 触发模块
触发模块是工作流开始执行的起点，你可以配置应如何触发工作流。

## 触发类型
### 手动
通过点击播放（▶️）按钮手动触发工作流。

### 间隔
以间隔执行工作流，你可以在提供的输入中定义间隔和执行工作流之前的延迟时间。

### 在特定日期
在特定日期和时间执行工作流。

### 在特定天
在特定天和时间执行工作流。

### 在浏览器启动时
当安装有此扩展的浏览器配置文件启动时，执行工作流。

### Cron 作业
使用cron表达式来安排工作流执行。

![Cron](/images/blocks/192127832-38b73b5f-1bd0-458c-8a1c-311d85e2446b.png)

### 上下文菜单
通过上下文菜单（右键单击）执行工作流。通过上下文菜单执行工作流时，将注入几个变量：

- `$ctxElSelector`：你右键点击的元素的选择器
- `$ctxTextSelection`：选中的文本
- `$ctxMediaUrl`：媒体元素（图片、视频或音频）的源URL
- `$ctxLink`：如果你右键点击一个链接，则为该链接的URL

但是要使用此触发器，你必须授权 Automa 使用`contextMenu`权限。此触发器有两个选项

- 上下文菜单中的工作流名称
- `Will appear in`，你可以使用它来设置工作流何时出现在上下文菜单中。如果没有选择这些选项，每次显示上下文菜单时都会出现。

### 访问网站时
当你访问与你输入的URL或[ReGex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)匹配的网站时执行工作流。
当你勾选`Use regex`复选框时，你输入的值将按照[ReGex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)处理。

### 键盘快捷键
使用键盘快捷键执行工作流。你可以通过点击录制（⏺️）按钮并按下你想要使用的键来指定键盘快捷键。

默认情况下，当光标位于输入元素上时，快捷键不起作用，因此要防止这种行为，你可以勾选"Active while in input"复选框。

::: tip 注意
键盘快捷键仅当你在网站上时起作用。如果网站URL以`chrome://` 或 `chrome-extension://`开头，键盘快捷键将不起作用。
:::

## 使用 JS CustomEvent 触发
你可以使用JavaScript [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)以编程方式触发工作流，该CustomEvent可嵌入到你的网站中。举例来说，
```js
// 使用工作流 Id
window.dispatchEvent(new CustomEvent('automa:execute-workflow', {
	detail: { id: 'workflow-id' }
}));

// 使用工作流 publicId
window.dispatchEvent(new CustomEvent('automa:execute-workflow', {
	detail: { publicId: 'public-id' }
}));
```
在`detail`属性中，你必须定义你想要执行的工作流的`id`或`publicId`。你可以在工作流设置中定义工作流的`publicId`。

![Workflow public ID](/images/blocks/NVIDIA_Share_rWFjFA6ooQ_h3rtoq.png)

要将变量添加到该工作流，请在[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)属性内添加`data`属性。
```js
// 使用工作流 Id
window.dispatchEvent(new CustomEvent('automa:execute-workflow', {
	detail: { 
		id: 'workflow-id',
		data: {
			variables: {
				name: 'John Doe',
				search: 'Hello world'
			}
		} 
	}
}));
```

:::tip 注意
如果`automa:execute-workflow`事件无效，你可以将其替换为`__automaExecuteWorkflow`
:::

## 通过URL触发
从版本v1.28.26开始，您将能够通过URL执行Automa工作流程。要执行此操作，您只需在浏览器中创建一个新标签，并输入以下URL：
`chrome-extension://infppggnoaenmfagbfknfkancpbljcca/execute.html#/workfloId`，将 `workflowId` 替换为您想要执行的工作流的ID。

您还可以通过在URL中添加查询来将变量传递给工作流。例如：`chrome-extension://infppggnoaenmfagbfknfkancpbljcca/execute.html#/workflowId?variableA=value&variableB=10`

## 参数
参考：[工作流参数](../workflow/parameters.md)
