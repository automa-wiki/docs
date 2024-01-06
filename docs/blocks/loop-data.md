---
title: 循环数据模块
---

# 循环数据模块

![循环示例](https://res.cloudinary.com/chat-story/image/upload/v1642310619/automa/loop_bd2por.gif)

当您想要通过数据进行循环时，您可以使用这个模块。

## 循环遍历
选择你想要循环的数据，你可以在[表](../workflow/table.md)、数字、[Google Sheets](./google-sheets.md)、元素、[变量](../workflow/variables.md)或自定义之间选择。

使用自定义数据选项时，请确保你用[JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)语法书写[array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)数据类型。

**例子**
```json
["one", "two", 3, 4, { "key": "value" }]
```

当你选择`elements`选项时，Automa将返回一个选择器数组，这些选择器匹配你输入的`selector`。你可以像下面这样使用循环数据模块。

![循环元素](https://res.cloudinary.com/chat-story/image/upload/v1657078995/automa/Loop_elements_a4btqz.png)

## 循环ID
标识循环的ID。当您想在[表达式](../workflow/expressions.md)中访问循环数据或使用[循环断点](./loop-breakpoint.md)模块时，使用此ID。

## 最大数据
设置循环数据的限制。

<hr />

另请参见：[循环](../workflow/looping.md#using-the-loop-data-or-loop-elements-block)