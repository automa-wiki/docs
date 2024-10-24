---
title: Storage
---

# 存储
存储用于保存表和变量的数据。存储在这里的数据将会被**持久化**。

## 表
要将一个[表](../workflow/table.md)添加到存储中，点击“添加表”按钮，然后定义表的名称和列。

![添加存储表](/images/reference/NVIDIA_Share_ZYqbANNey2_cvmvt1.png)

要在工作流中使用这个表，打开工作流表并点击“连接到存储表”按钮。

![连接存储表](/images/reference/NVIDIA_Share_qWlIzKSYIx_cvxe6w.png)

::: tip 注意
了解更多关于表的信息，请访问[表页面](../workflow/table.md)
:::

## 变量
你可以从存储的变量页面添加变量，也可以从工作流中添加。每次你想要赋值或读取变量的值时，变量名必须以两个美元符号(`$$`)开头。这是为了区分存储变量和工作流变量。例如，从一个块中添加或更新一个变量。

![赋值存储变量](/images/reference/NVIDIA_Share_lGV2S0XYJE_y6qs8h.png)

在一个块中访问变量。

![访问存储变量](/images/reference/NVIDIA_Share_XTiF5TkhOX_wxfkgd.png)

::: tip 注意
了解更多关于变量的信息，请访问[变量页面](../workflow/variables.md)
:::

## 凭据
用于存储凭据。存储在这里的凭据将会被加密。添加凭据后，你将无法查看或编辑它们。

要在工作流中访问这些凭据，使用 mustache 标签中的 `secrets` 关键字。例如，<code v-pre>{{ secrets@credentialName }}</code>。