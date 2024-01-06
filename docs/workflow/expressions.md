---
title: 表达式
---

# 表达式

::: tip 注意
如果您使用 v1.21.x 或更低版本， <code v-pre>{{ keyword@path }}</code> 语法仍然在v1.22.x中得到支持。
:::

该功能允许你根据来自以下数据的信息为模块设置动态值：
| 名称 | 描述 | 访问项目 |
| --- | --- | --- |
| `table` | 从 [表](./table.md) 中获取数据 | `table` |
| `variables` | 从 [变量](./variables.md) 中获取数据 | `variables.<variableName>` |
| `loopData` | 获取 [循环数据](/blocks/loop-data.html#accessing-data) 模块的当前迭代数据 | `loopData.<loopId>` |
| `prevBlockData` | 获取上一个模块的数据 | `prevBlockData` |
| `globalData` | 获取工作流的全局数据 | `globalData` |
| `googleSheets` | 获取 [Google 表格](/blocks/google-sheets.md) 的数据 | `googleSheets.<referenceKey>` |
| `activeTabUrl` | 获取当前标签页的url | `activeTabUrl` |
| `workflow` | 获取由 [执行工作流](/blocks/execute-workflow.md) 模块执行的工作流的数据 ([表格](./table.md) 和 [变量](./variables.md)) | `workflow.<executeId>` |

Automa使用Mustache模板，并通过以上的数据和函数进行扩展。

## 书写表达式

要编写表达式，必须遵循以下格式 "<code v-pre>{{ keyword }}</code>"; 并将 `keyword` 替换为上述数据源之一，它允许 Automa 区分静态和动态数据。

假设您在工作流中有一个变量，变量名为 `socials`，它的值为数组或者对象，您希望使用 [HTTP请求](../blocks/webhook.md) 将此变量发送到 API。

```json
[
  { "name": "GitHub", "url": "https://github.com/AutomaApp" },
  { "name": "Twitter", "url": "https://twitter.com/AutomaApp" },
  { "name": "Discord", "url": "https://discord.gg/C6khwwTE84" }
]
```

您可以在 [HTTP请求](../blocks/webhook.md) 正文中使用以下表达式：
```
{{variables.socials}}
```
![HTTP Request block body](https://res.cloudinary.com/chat-story/image/upload/v1666171308/automa/chrome_FbRbTGuOXy_j8frph.png)

但是如果您想使用数组第一个元素上的 `url` 属性作为 [新标签页](../blocks/new-tab.md) URL内的值，该怎么办? 为此，可以使用以下表达式：
```
{{variables.socials.0.url}}
```
![New tab block URL](https://res.cloudinary.com/chat-story/image/upload/v1666232856/automa/chrome_8d0k1lZqUn_lxnycp.png)

在该表达式中，`0` 表示数组的第一个元素，如果你想获取数组的第二个元素，将其替换为 `1`，`2` 表示第三个元素，`3` 表示第四个元素；依此类推。

### 访问表达式内部的其他数据

要访问表达式内部的其他数据，必须使用方括号 (`[]`) 将用于访问数据的表达式括起来。例如，当你想要使用 [`$increment`](#incrementvalue-incrementby) 函数递增一个变量或基于循环的当前索引获取表格行时，你可以编写如下的表达式：
```
{{$increment([variables.variableName]}}

{{table.[loopData.loopId.$index].columnName}}
```

## 函数

所有内置函数都以前缀`$`开头，例如，`$funcName(param)`；以下是Automa中可用函数的参考列表。

### `$date(date, dateFormat?)`

获取或格式化日期。此函数接受两个参数，其中第二个参数是可选的。

如果你想格式化当前日期，你可以直接将`dateFormat`作为第一个参数传递，例如<code v-pre>{{ $date('DD-MMMM-YYYY') }}</code>，将会输出`14-January-2022`。在[day.js页面](https://day.js.org/docs/en/display/format#list-of-all-available-formats)上查看所有可用的日期格式。

对于`date`参数，请查看 [MDN页面](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#examples)上的有效日期格式。

**例子**
```js
$date("DD MMMM YYYY") // 14 January 2022
$date("DD-MM-YYYY, hh:mm A")  // 14-01-2022, 02:24 PM
$date("relative") // A few seconds ago
$date("timestamp") // 1651118110948

$date("2005-06-07", "DD MMMM YYYY") // 07 June 2005
$date("1977-04-01T14:00:30", "DD-MM-YYYY, hh:mm A")  // 01-04-1977, 02:00 PM
$date("14 January 2021", "relative") // A year ago
$date("14 January 2021", "timestamp") // 1610553600000
```

### `$randint(min?, max?)`

生成一个随机数。你可以通过输入`min`和`max`参数来改变随机数的范围。

**例子**
```js
$randint() // 30
$randint() // 14

$randint(0, 10) // 4
$randint(0, 10) // 7
```

### `$getLength(str)`

获取字符串或数组的长度。

**例子**
```js
// 获取字符串长度
$getLength("testing") // 7

// 获取表长度
$getLength([table]) // 14

// 获取第二行 "text" 列的长度
$getLength([table.1.text]) // 5
```

### `$randData(expression)`
一个用于生成随机数据的函数，你只需要将一个表达式传递给它的参数。例如，`$randData("?l")`将生成一个随机的小写字母，如`a`。支持的表达式：

- `?l`: 小写
- `?u`: 大写
- `?d`: 数字
- `?f`: 大写 + 小写
- `?s`: 符号
- `?m`: 大写 + 数字
- `?n`: 小写 + 数字
- `?a`: 任意字符

你还可以组合这些表达式，比如`$randData("?u?l?l?l?l?d?d@gmail.com")`，将生成`Apond89@gmail.com`。

**例子**
```js
$randData("?d?d") // 89

$randData("?l?l?l?d?d@gmail.com") // wal29@gmail.com

$randData("?d?u?s?l?l?s?a?m") // 4C%ee^MF9
```

### `$multiply(value, multiplyBy)`
用于两个值相乘。

**例子**
```js
$multiply(5, 2) // 10

// 乘以一个变量
$multiply([variables.variableName], 0.3) //20.7
```

### `$increment(value, incrementBy)`
用于两个值相加。

**例子**
```js
$increment(10, 2) // 12

$increment(72, 2) // 74
```

### `$divide(value, incrementBy)`
用于两个值相除。

**例子**
```js
$divide(22, 7) // 3.142857142857143

$divide(10, 2) // 5
```

### `$subtract(value, incrementBy)`
用于两个值相减。

**例子**
```js
$subtract(80, 7) // 73

$subtract(11, 2) // 9
```

### `$replace(value, search, replace)`
用于将字符串中的某个值替换为要替换的字符串。

**例子**
```js
$replace("hello world!", "world", "everyone") // hello everyone!

$replace("hello world!", "hello", "hi") // hi world!
```

### `$replaceAll(value, search, replace)`
用于替换所有匹配的字符串值，将其替换为要替换的字符串。

**例子**
```js
$replace("hello world!", "o", "0") // hell0 w0rld

$replace("The temperature is 25 degrees today", " ", "") // Thetemperatureis25degreestoday
```

### `$toLowerCase(value)`
转换为小写。

**例子**
```js
$toLowerCase("HELLO WORLD!") // hello world!

$toLowerCase("hELLO wORLD!") // hello world!
```

### `$toUpperCase(value)`
转换为大写。

**例子**
```js
$toUpperCase("hello world!") // HELLO WORLD!

$toUpperCase("hELLO wORLD!") // HELLO WORLD!
```

### `$modulo(num, divisor)`
取模运算。

**例子**
```js
$modulo(13, 5) // 3

$modulo(-13, 5) // -3

$modulo(4, 2) // 0

$modulo(-4, 2) // -0
```

### `$filter(data, syntax)`
筛选/查询 javascript 对象。Automa 使用 [JSONPath](https://github.com/dchester/jsonpath) 库进行查询。

- `data`: 要查询的 Javascript 对象
- `syntax`: [JSONPath语法](https://github.com/dchester/jsonpath#jsonpath-syntax)

**例子**

查询`colors`变量，其值为这些。
```json
[
	{ color: "red", value: "#f00" },
	{ color: "green", value: "#0f0" },
	{ color: "blue", value: "#00f" },
	{ color: "cyan", value: "#0ff" },
	{ color: "magenta", value: "#f0f" },
	{ color: "yellow", value: "#ff0" },
	{ color: "black", value: "#000" }
]
```
```js
{{ $filter([variables.colors], "$..color") }}
// ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black']

{{ $filter([variables.colors], "$..value") }}
// ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0', '#000']
```

使用 [JS 表达式](#javascript-expressions)

```js
!!{{ $filter(variables.colors, "$..color") }}
// ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black']

!!{{ $filter(variables.colors, "$..value") }}
// ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0', '#000']
```

### `$stringify(value)`
将 JavaScript 值转换为 JSON 字符串。

## 例子

本节提供了有关如何编写表达式的示例，以及数据源的数据结构。

### [表](./table.md)
该表以对象数组的形式存储，其中表列是对象的键。

```json
[
  { "color": "blue", "value": "#00f" },
  { "color": "cyan", "value": "#0ff" },
  { "color": "magenta", "value": "#f0f" },
  { "color": "yellow", "value": "#ff0" },
  { "color": "black", "value": "#000" }
]
```
- 获取第一行数据 <br>
  表达式：<code v-pre>{{ table.0 }}</code> <br>
  输出：`{ "color": "blue", "value": "#00f" }`

- 获取第二行数据 <br>
  表达式：<code v-pre>{{ table.1 }}</code> <br>
  输出：`{ "color": "cyan", "value": "#0ff" }`

- 获取最后一行数据 <br>
  表达式：<code v-pre>{{ table.$last }}</code> <br>
  输出：`{ "color": "black", "value": "#000" }`

- 获取第一行列为 `color` 的值 <br>
  表达式：<code v-pre>{{ table.0.color }}</code> <br>
  输出：`blue`

- 获取第一行列为 `value` 的值 <br>
  表达式：<code v-pre>{{ table.0.value }}</code> <br>
  输出：`#00f`

### [变量](./variables.md)
变量以对象的形式存储，其中变量名是对象的键。
```json
{
  "url": "https://automa.site",
  "numbers": [100, 500, 300, 200, 400]
}
```
- 获取属性 `url` 的值 <br>
  表达式：<code v-pre>{{ variables.url }}</code> <br>
  输出：`https://automa.site`

- 获取属性 `numbers` 的值 <br>
  表达式：<code v-pre>{{ variables.numbers }}</code> <br>
  输出：`[100, 500, 300, 200, 400]`

- 获取属性 `numbers` 值的第一个值 <br>
  表达式：<code v-pre>{{ variables.numbers.0 }}</code> <br>
  输出：`100`

## JavaScript表达式

::: tip 注意
仅支持基于 Chromium 的浏览器
:::

Automa还支持在表达式中使用JavaScript，但是要写JavaScript，你必须在块的文本字段中的第一个值上添加`!!`字符。例如，从<code v-pre>The number is: {{variables.number}}</code> 到 <code v-pre>!!The number is: {{variables.number}}</code>。

![JS表达式](https://res.cloudinary.com/chat-story/image/upload/v1666237164/automa/TV_-_2_2_r3emea.png)

你可以像使用JavaScript函数一样使用内置函数。

**例子**

- 使用内置函数
```js
{{$getLength(table)}} //10

{{$randData("?d?d")}} // 89
```
- 获取表的最后一行
```js
{{table[table.length - 1].columnName}}
```

- 获取当前时间戳
```js
{{Date.now()}} //1666237704022

```
- 循环数据和索引
```js
// Loop data
{{loopData.loopId.data}}

// Loop index
{{loopData.loopId.$index}}
```