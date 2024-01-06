---
title: 上传文件模块
---

# 上传文件模块

将文件上传到一个 `<input type="file">` 元素中。

- **元素选择器** <br>
  用于 `<input type="file">` 元素的[选择器](../workflow/element-selector.md)。

- **文件路径** <br>
  文件上传的绝对路径、URL 或 base64 编码。<br>
  **示例**
	- 绝对路径
		- Windows: `C:\Users\Public\Documents\testing.docx`
		- MacOS: `/Users/Josh/Desktop/docs.pdf`
	- URL
		- `https://example.com/files/document.pdf`
		- `https://example.com/words.txt`
	- Base64<br>
	  要上传 [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64) 编码的文件，需要按照以下格式：`文件名|文件 MIME 类型|base64`
		- `landscape.png|image/png|data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA...`
		- `my file.json|application/json|eyJleHRWZXJzaW9uIjoiMS4xNi4yIiwibmFtZSI6...`

## 要求
为了使该模块工作，你必须允许 Automa 访问文件，通过启用“允许访问文件 URL”选项来实现。
- 打开 `chrome://extensions`
- 找到 Automa 并点击“详情”按钮
- 向下滚动并启用“允许访问文件 URL”

## 查找上传文件的选择器

在大多数情况下，上传文件的元素是隐藏的，这意味着你可以使用元素选择器来选择该元素。因此，你可以使用录制功能来查找上传文件的元素。

1. [开始录制](../guide/quick-start.md#recording-actions)
2. 上传文件并停止录制
3. 清除其他不必要的模块，例如使网站打开文件选择器窗口的点击元素模块。因为在使用上传文件模块时不需要这些操作。

<!--@include: ../parts/blocks-interaction-note.md-->