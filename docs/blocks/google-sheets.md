---
title: 谷歌表格模块
---

# 谷歌表格模块

读取或写入谷歌表格（Google Sheets）的数据。

## 访问表格
在使用这个模块之前，你需要先给Automa访问表格的权限。有两种方法可以实现：

1. 将表格设为公开。
2. 将表格与Automa服务账户共享。

当你将表格设置为公开时，Automa只有读取权限。<br>如果你打算更新表格的单元格值，你需要将表格与Automa服务账号共享。为此，请打开你想共享的表格，点击右上角的共享按钮，并输入`service@automa2.iam.gserviceaccount.com`。

![服务账户](/images/blocks/chrome_9iHTFjxWEn_lzavjy.png)

## 表格ID
表格ID包含字母、数字、连字符或下划线。你可以在谷歌表格的URL中找到它。

<code>
	https://docs.google.com/spreadsheets/d/<mark>10FGdgjWhkFeJ8m-M5WC0zDIMnSqRFuctuZ1CkOr38mY</mark>/edit
</code>

![表格ID](/images/blocks/chrome_OuX2wQzOe4_lyd8tv.png)

## 范围
你想获取或更新的单元格值的范围，可以使用[A1表示法](https://developers.google.com/sheets/api/guides/concepts#expandable-1)定义单元格范围，如`Sheet1!A1:B2`，或[R1C1表示法](https://developers.google.com/sheets/api/guides/concepts#expandable-2)，如`Sheet1!R1C1:R2C2`。

## 获取表格值
获取表格的单元格值。

- **引用键**<br>
  用于识别谷歌表格数据的键。

- **使用第一行作为键**<br>
  使用表格的第一行作为对象键。例如，当你有一个表格如下所示：

  | name | age |
  	| --- | --- |
  | foo | 22 |
  | bar | 23 |

```json
// 选项禁用
[["name", "age"], ["foo", 22], ["bar", 23]]

// 选项启用
[{ "name": "foo", "age": 22 }, { "name": "bar", "age": 23 }]
```

### 访问表格数据
要从一个模块的输入中访问表格值，可以使用如<code v-pre>{{ googleSheets.referenceKey.path }}</code>语法的表达式。

阅读更多：[表达式](../workflow/expressions.md)

## 更新表格值
更新表格的单元格值。

- **值输入选项**<br>
  决定如何解释输入数据，默认为`RAW`。

  | 值 | 描述 |
  	| --- | --- |
  | `RAW` | 用户输入的值将不会被解析，会按原样存储 |
  | `USER_ENTERED` | 输入的值会如同用户在界面中键入的一样被解析。数字会保持为数字，但字符串可能会转换为数字、日期等，遵循在谷歌表格用户界面中输入文本时应用的相同规则。 |

  在[谷歌开发者页面](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption)上阅读更多信息

- **数据来源**<br>
  更新表格所用的数据来源，默认为[table](../workflow/table.md)。
  使用自定义选项时，输入的数据必须是有效JSON语法的数组中的数组数据类型。

  **示例**
  ```json
  [["name", "age"], ["foo", 22], ["bar", 23, "text"]]
  ```

- **将键作为第一行**<br>
  将列用作表格的第一行。