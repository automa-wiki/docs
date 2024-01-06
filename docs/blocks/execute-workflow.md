---
标题：执行工作流模块
---

# 执行工作流模块

执行另一个工作流。

## 选择工作流
选择要执行的工作流。

## 全局数据
覆盖选定工作流的[全局数据](../workflow/global-data.md)。

## 执行ID
当您在[表达式](../workflow/expressions.md)中需要访问已执行的工作流时，用以标识的ID。已执行工作流将返回其[表](../workflow/table.md)和[变量](../workflow/variables.md)。例如，
```
{{ workflow.executeId.table }}
```
把`executeId`换成您输入的ID。

## 插入所有当前工作流变量
将当前工作流的所有变量插入到将要执行的工作流中。

## 插入当前工作流变量
将当前工作流的特定变量插入到将要执行的工作流中。使用逗号分隔变量名称。