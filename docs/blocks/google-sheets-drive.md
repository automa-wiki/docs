---
title: Google Sheets（GDrive）
---

# Google Sheets（GDrive）

Google Sheets（GDrive）模块的作用与[Google Sheets模块](./google-sheets.md)相同。不同之处在于，使用该模块之前，您需要先[连接Google Drive](../integrations/google-drive.md)到您的Automa账户，并且它具有其他的功能，如创建电子表格。

因此，要查看如何获取、更新或清除Google表格中的值的文档，请打开[Google Sheets模块页面](./google-sheets.md)。

## 连接电子表格

要在Google Sheets中获取、更新或清除值，您需要点击表选择旁的"连接"按钮来连接一个电子表格。然后，选择电子表格文件。

![连接电子表格](/images/blocks/Frame_3_2_h8miwx.png)

## 创建电子表格
您可以使用它来创建一个电子表格。

- **分配给变量** <br>
  是否将创建的电子表格ID分配给[变量](../workflow/variables.md)。

- **变量名** <br>
  分配创建的电子表格ID的变量名称。

- **插入到表中** <br>
  是否将创建的电子表格ID插入到[表](../workflow/table.md)中。

- **选择列** <br>
  将创建的电子表格ID插入到的列。

## 何时使用此模块？
当您的工作流需要在短时间内对电子表格进行大量更新时，可以使用此模块。例如，在[循环](../workflow/looping.md)的每次迭代中更新一行。