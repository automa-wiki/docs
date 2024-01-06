---
title: HTTP 请求模块
---

# HTTP 请求模块

发起一个HTTP请求。

- **方法**	<br>
  请求的方法（`GET`、`POST`等）

- **URL** <br>
  请求的URL地址。

- **内容类型** <br>
  请求的[`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)头

- **头部** <br>
  请求的[头部信息](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

- **正文** <br>
  请求的数据负载

- **备选方案** <br>
  HTTP请求失败或出错时执行。

## 响应
处理请求的响应。

- **响应类型** <br>
  响应的类型，默认为`JSON`。

- **数据路径** <br>
  响应数据的点标记法路径。例如，当响应返回以下数据时：
  ```json
  {
      "status": 200,
      "data": {
          "name": "Prices",
          "values": [
              { "id": 1, "value": 4000 },
              { "id": 2, "value": 24000 }
          ]
      }
  }
  ```
  要获取`values`数组，请写`data.values`作为路径。要获取`values`数组的第一个值，请写`data.values.0`。

  ::: 信息
  如果你想获取所有的HTTP响应，如`status`、`statusText`、`data`等，请输入`$response`。
  :::

- **指定给变量** <br>
  是否将值指定给一个[变量](../workflow/variables.md)。

- **变量名称** <br>
  要指定值的变量名称。

- **插入到表** <br>
  是否将值插入到[表中](../workflow/table.md)。

- **选择列**
  值将被插入的列。

## 表单数据
当使用`multipart/form-data`作为头部时，请求体将作为[FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)被发送。因此，当编写请求体时必须按照下面的格式：

```json
[
	["name", "value"],
	["name 2", "value 2"]
]
```

在值字段中，你可以编写文件在你本地电脑上的绝对路径或你想上传的文件的URL。例如，
```json
[
	["audio", "C:\\Downloads\\files\\music.mp3"],
	["image", "https://example.com/image.png"]
]
```

## 在正文中编写表达式
在正文中编写表达式来访问数据，如[变量](../workflow/variables.md)、[表](../workflow/table.md)等有点棘手，因为最终结果必须是有效的JSON。为了防止出现“Content body is not valid JSON”的错误，请遵循以下规则：

- **字符串值** <br />
  如果你引用的数据值是字符串，你必须将mustache标签包裹在双引号(")内。例如，
```json
{
	"name": "{{variables.name}}",
	"email": "{{variables.email}}"
}
```

- **多行字符串值** <br />
  如果你引用的数据值是一个包含换行的字符串，你必须在编写数据关键字之前加一个感叹号(!)。例如，
```json
{
	"longText": {{!variables.article}}
}
```
::: 信息
使用[JavaScript表达式](../workflow/expressions.md#javascript-expressions)时不需要这样做。
:::

- **其他** <br />
  如果你引用的数据值是对象、数组等，你可以直接在正文中编写mustache标签。例如，
```json
{
	"profile": {{variables.userProfile}}, // { name: 'John Doe', email: 'john@example.com' }
	"stats": {{variables.stats}} // [10, 200, 87, 21]
}
```
如果你在使用[JavaScript表达式](../workflow/expressions.md#javascript-expressions)，你需要将表达式包裹在[`$stringify`](../workflow/expressions.md#stringifyvalue)函数内。

```json
{
	"profile": {{$stringify(variables.userProfile)}},
"stats": {{$stringify(variables.stats)}}
}
```