---
title: 表
---

# 表

表用于存储从网站检索到的数据。它类似于电子表格。但在表中，每一列都是严格的数据类型。

## 添加表列

数据插入表之前，您必须为表定义一个列。

打开工作流，在右上角点击表图标 (<v-remixicon name="riTable2" />)。 输入列的名称并点击添加按钮。 在已添加的列旁边，可以选择列数据类型。

您可以选择四种数据类型 `Text`、`Number`、`Boolean`、`Array` 和 `Any`。

![Workflow table](https://res.cloudinary.com/chat-story/image/upload/v1666068922/automa/chrome_e9ZIOvxldR_pbauzp.png)

## 插入数据
您可以用于从网站提取数据的模块（例如“[获取文本](../blocks/get-text.md)”模块和“[属性值](../blocks/attribute-value.md)”模块）将数据插入到表中。要使用该块插入数据，请单击编辑按钮，启用“插入到表”选项，然后选择其中一列。

![Select column](https://res.cloudinary.com/chat-story/image/upload/v1666076448/automa/chrome_05KtZ48UEI_oyrlmp.png)

每次将数据插入表中时，数据都会被追加到列的末尾行。例如，当您用这样的数据填充表时。

| `title`    | `price` | `urls`                                       | `available` |
|------------|---------|----------------------------------------------|-------------|
| Car        | 4000    | ["https://en.wikipedia.org/wiki/Car"]        | true        |
| Motorcycle | 2000    | ["https://en.wikipedia.org/wiki/Motorcycle"] | false       |

当工作流执行“获取文本”模块时，它将数据插入到 `title` 列中，插入后数据如下所示。

| `title`    | `price` | `urls`                                       | `available` |
|------------|---------|----------------------------------------------|-------------|
| Car        | 4000    | ["https://en.wikipedia.org/wiki/Car"]        | true        |
| Motorcycle | 2000    | ["https://en.wikipedia.org/wiki/Motorcycle"] | false       |
| Boat       |         |                                              |             |

在工作流中，该表是以一个对象数组的形式进行储存。

```json
[
  {
    "name": "Car",
    "price": 4000,
    "urls": ["https://en.wikipedia.org/wiki/Car"],
    "available": true
  },
  {
    "name": "Motorcycle",
    "price": 2000,
    "urls": ["https://en.wikipedia.org/wiki/Motorcycle"],
    "available": false
  },
  {
    "name": "Boat"
  }
]
```

## 导出表数据
使用 [导出数据](../blocks/export-data.md) 将表导出到一个文件。 你可以选择将表导出为 "Text", "CSV" 还是 "JSON" 文件。