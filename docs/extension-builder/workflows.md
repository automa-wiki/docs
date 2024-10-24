---
title: "扩展：工作流"
---

# 扩展：工作流

此页面用于添加、更新或删除扩展中的 Automa 工作流。如果您想了解如何创建一个 Automa 工作流，请打开[此文档](../workflow/overview.md)。

每当您在此页面上添加、更新或删除一个工作流时，更新将自动应用于所有安装了扩展的用户。

## 添加工作流

要向扩展添加一个工作流，请点击“+ 工作流”按钮，选择是从 JSON 文件添加工作流还是从 Automa 扩展添加，然后选择要添加的工作流。

对于工作流 JSON 文件，您可以通过从 Automa 扩展[导出工作流](../workflow/overview.md#export-and-import-a-workflow)来获取。

![添加工作流](/images/extension-builder/NVIDIA_Share_mqfTPWmLcJ_z0eczs.png)

::: tip 注意
“来自 Automa 扩展”选项只能在您使用 Automa v1.24.0 或更新版本时使用。
:::

## 更新工作流
您可以通过点击您想要更新的工作流上的更新图标来更新工作流。之后，点击“来自 JSON 文件”或“来自 Automa 扩展”，并选择工作流。

![更新工作流](/images/extension-builder/chrome_j3pk8zBstl_jorgmn.png)

## 删除工作流

要删除一个工作流，您可以点击您想要删除的工作流上的删除按钮。

![删除工作流](/images/extension-builder/chrome_cmge12BVxE_adzlrp.png)

如果您想要删除多个工作流，点击工作流旁边的复选框，然后点击“删除所选”按钮。

![删除多个工作流](/images/extension-builder/NVIDIA_Share_dUepZN5bIB_egirro.png)

## 隐藏
当您在工作流上启用隐藏复选框时，用户安装扩展后，该工作流在扩展中将不可见。这意味着用户无法手动运行工作流（通过在扩展上点击运行按钮）。

