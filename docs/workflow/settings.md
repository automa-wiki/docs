---
title: 工作流设置
---

# 工作流设置

可以为每个工作流设置自定义设置，位置在画布右上角有个**设置**图标。

![workflow settings](https://res.cloudinary.com/chat-story/image/upload/v1666082112/automa/chrome_K7BmBkZ2gZ_o7k6fi.png)

工作流设置共分为三个部分。

## 1. 常规

它包含以下设置：
- **工作流出错时**: 选择工作流发生错误的时候要执行的操作
- **工作流执行**: 是否以弹窗形式运行工作流还是在后台运行
- **工作流通知**: 在工作流执行结束时是否显示通知
- [**调试模式**](./debug-mode.md): 使用 Chrome DevTools 协议执行工作流
- **自动完成**: 在模块的输入中启用自动完成
- **重用上一个工作流状态**: 使用上次执行的状态数据（表、变量和全局数据）
- **保存工作流日志**: 保存工作流日志
- **在网页上显示已执行的模块**: 显示工作流当前在网页上执行的模块，此设置仅显示“Web交互”类别中的块，例如“单击元素”和“表单”块
- **工作流公开Id**: 工作流的公共ID，在使用 Javascript CustomEvent 执行工作流时可以使用此公共 ID

### 工作流执行
在运行工作流时选择“弹出窗口”或“后台运行”时不可用的一些功能和优势:

| 名称/特效                                                             | `弹窗` | `后台`  |
|-------------------------------------------------------------------|:----:|:-----:|
| 最大运行时间                                                            | 无限制  | ~5 分钟 |
| 必须弹出窗口                                                            |  ✅   |   ❌   |
| [JS后台执行](../reference/javascript-execution-context.md#background) |  ✅   |   ❌   |
| [JavaScript表达式](./expressions.md#javascript-expressions)          |  ✅   |   ❌   |
| [剪贴板模块](../blocks/clipboard.md)                                   |  ✅   |   ❌   |


## 2. 表格

它包含以下设置：

- **插入到默认列中**: 如果模块中未选择任何列或该列不存在，则将数据插入默认列
- **默认列名字**: 默认列的名字

## 3. 模块

它包含以下设置：

- **块延迟**: 在执行每个模块之前添加延迟
- **标签页加载超时**: 标签页加载的最长时间（以毫秒为单位）

## 4. 工作流事件

工作流事件将在工作流执行时触发。

### 可用事件
- **完成（成功）**: 当工作流完成执行并显示成功状态时触发。
- **完成（失败）**: 当工作流完成执行且为失败时触发。

### 可用操作
- **HTTP请求**: 发送HTTP请求
- **执行JS代码**: 执行JavaScript代码

### 可用数据

您可以在表达式中使用 `workflow` 关键字或在操作中使用 `automaRefData` 函数访问工作流日志、状态、错误消息等数据。

**数据类型**
```ts
interface Workflow {
  status: "success" | "error";
  logs:
    | {
        type: "error" | "success";
        description: string;
        name: string;
        blockId: string;
        timestamp: number;
        activeTabUrl: string;
        duration: number;
        id: number;
      }[]
    | null;
  errorMessage: string | null;
}
```

**例子**
```js
// Expression
{{ workflow.logs }}

// automaRefData
console.log(automaRefData('workflow', 'logs'))
console.log(automaRefData('workflow', 'status'))
```

![Workflow data](https://res.cloudinary.com/chat-story/image/upload/v1693204373/automa/Screenshot_2023-08-28_143223_swcorv.png)