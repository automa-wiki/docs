---
title: Javascript模块
---

# Javascript模块
在网站上执行您的Javascript代码。

## 超时
Javascript代码执行超时，默认为20000毫秒（20秒）。如果达到超时时间，工作流将继续执行下一个模块。

## 每个新标签页都执行
每次Automa创建新标签页或切换标签页时，都会执行Javascript代码。启用此选项后，Javascript模块不再需要一个活动标签页即可工作，并且内置函数如`automaRefData`、`automaNextBlock`等将不可用。例如

![每个新标签页都执行](https://res.cloudinary.com/chat-story/image/upload/v1651031286/automa/chrome_b0wdnqRYv1_vknvhm.png)

## 执行上下文
参考: [Javascript执行上下文](../reference/javascript-execution-context.md)

## JavaScript代码
您可以在代码中调用几个内置函数。

### `automaNextBlock(data, insert?)`
```ts
automaNextBlock(
	data?: Object | Object[], 
	insert?: boolean | { insert?: boolean; nextBlockId?: string; replaceTable?: boolean }
): void;
```

指示工作流继续执行下一个模块。

使用`data`参数将数据插入表中。此参数可以接受对象或对象数组数据类型。对象的键必须在[表](../workflow/table.md)中定义。

`insert`参数用来控制是否将`data`参数中的数据插入表中，默认为`true`。或者，您可以传递一个包含两个可选属性的对象：
- `insert`：是否将数据插入表中。
- `nextBlockId`：指定要导航到的下一个模块的ID的字符串。
- `replaceTable`：用传递的第一个参数的值替换工作流表的值。

**示例**
```js
automaNextBlock({ title: 'Something', count: 200 });

// 或者

automaNextBlock([{ title: 'Foo', count: 300 }, { title: 'Bar', count: 200 }])

// 继续执行到特定模块
automaNextBlock({ title: 'Hello' }, { nextBlockId: '4dxcxa3' })
```
![表](https://res.cloudinary.com/chat-story/image/upload/v1642474574/automa/chrome_7ehs03LPjU_i0ivn2.png)

### `automaSetVariable(name, value)`
设置工作流变量的值。

**示例**
```js
automaSetVariable('name', 'John Doe');

automaSetVariable('prices', [200, 1000, 4000, 900, 200]);

automaSetVariable('profile', { firstName: 'John', lastName: 'Doe' });
```

### `automaRefData(keyword, path)`
使用此函数访问工作流数据，如表、变量等。

阅读更多：[表达式](../workflow/expressions.md)

**示例**
```js
// 获取表的第一行
const firstRow = automaRefData('table', '0');

// 获取表的最后一行
const firstRow = automaRefData('table', '$last');

// 获取表第一行的"name"列
const firstRow = automaRefData('table', '0.name');

// 获取工作流的全局数据
const globalData = automaRefData('globalData');

// 获取循环数据模块的迭代数据
const data = automaRefData('loopData', 'loopId');

// 获取"text"变量的值
const value = automaRefData('variables', 'text');
```

### `automaFetch(type, resource)`

在扩展背景中进行HTTP请求，使用它来避免CORS。

- `type`：请求的响应类型。可能的值为`text`和`json`；
- `resource`：您希望获取的资源。

**示例**
```js
automaFetch('json', { url: 'https://api.example.com'}).then((result) => {
	console.log(result);
})

automaFetch('json', {
	url: 'https://api.example.com',
	method: 'POST',
	body: JSON.stringify({
		title: 'Hello world',
	}),
})
```

### `automaResetTimeout()`
重置执行超时。

## 预加载脚本
在执行Javascript代码之前加载一个Javascript文件。
- **URL** <br>
  Javascript文件的URL。