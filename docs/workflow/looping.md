---
title: 循环
---

# 循环

循环允许您重复执行相同的操作，只有在循环遍历所有项目之后才会停止。

循环在以下情况下非常有用：当您想要处理多个类似的项目时，例如填写表单，其中的值来自Google表格。在 Automa 中有几种循环的方式：

1. 使用 [循环数据](../blocks/loop-data.md) 来遍历 [变量](./variables.md)、[表格](./table.md)、[Google表格](../blocks/google-sheets.md) 或自定义 JSON 数组。
2. 使用 [循环元素](../blocks/loop-elements.md) 来遍历页面上的元素。
3. 使用 [重复任务](../blocks/repeat-task.md) 来重复执行动作指定的次数。

## 使用循环数据模块或循环元素模块

当使用 [循环数据](../blocks/log-data.md) 或 [循环元素](../blocks/loop-elements.md) 时，工作流中必须包含 [循环断点](../blocks/loop-breakpoint.md)。循环断点用于告诉工作流循环的范围在哪里。在循环断点中，您还必须输入循环块的循环ID。

![带有断点的循环](/images/workflow/chrome_7wEPnPfNRQ_e1ee2l.png)

上面的工作流将根据项目的数量重复执行表单和获取文本模块。在循环所有项目之后，工作流将继续执行导出数据模块。

如果不使用循环断点模块来定义循环范围，则循环将不起作用。

![不带断点的循环](/images/workflow/chrome_csX5PLkZBq_h5hu0k.png)

上面的工作流将执行表单和获取文本模块一次，然后继续执行导出数据模块。

### 访问循环项

您可以使用 [表达式](./expressions.md) 在循环范围内访问当前循环迭代的数据。例如，<code v-pre>{{loopData.loopId}}</code>；将 `loopId` 替换为您在循环数据或循环元素模块中输入的循环ID。

![访问循环项](/images/workflow/chrome_Z1IwOcaATY_gxfn6k.png)

表达式 <code v-pre>{{loopData.loopId}}</code> 将返回：
```json
{
  "data": ...,
  "$index": 1
}
```
因此，如果要访问循环的索引，可以使用 [表达式](./expressions.md) 类似 <code v-pre>{{loopData.loopId.$index}}</code>；要获取循环值，您无需编写 `data` 属性，例如 <code v-pre>{{loopData.loopId.data}}</code>；Automa 将自动将其分配给表达式。但是，如果使用 [JavaScript 表达式](./expressions.md#javascript-expressions)，您必须包括 `data` 属性，例如 <code v-pre>!!{{loopData.loopId.data}}</code>

## 使用重复任务模块

使用 [重复任务](../blocks/repeat-task.md) 是执行循环的最简单方式。您只需要定义重复执行操作的次数以及从何处开始重复执行。

![重复任务](/images/workflow/chrome_LWjlxa5ZMT_t2jrr2.png)

上述工作流将从点击元素模块开始重复执行，执行三次后，工作流将继续执行新标签页模块。
