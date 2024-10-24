---
title: 工作流参数
---

# 工作流参数
定义一个工作流参数。
假设您有一个工作流，可以在多个搜索引擎中自动搜索关键字，并且每次运行时关键字都不同。这时可以通过设置参数，在每次运行工作流时输入关键字。

## 添加参数

你可以这样添加参数到工作流:

1. 打开工作流
2. 单击触发器块上的编辑按钮
3. 点击“参数”按钮
4. 点击“添加参数”按钮

您可以重命名参数、选择参数类型或输入默认值。

![Add parameter](/images/workflow/chrome_1VtcrxMGH7_d7puxa.png)

当您运行工作流时，将出现一个弹出窗口，您可以在其中输入参数的值。

![Input parameter](/images/workflow/chrome_7p2d3nvu9w_funwit.png)

这些参数将作为 [变量](./variables.md) 插入到工作流中，变量名称与参数名称相同。 例如，您可以访问参数的值 `keyword`，像这样 <code v-pre>{{ variables.keyword }}</code>
