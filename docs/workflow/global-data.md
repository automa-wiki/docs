---
title: 全局数据
---

# 全局数据

使用全局数据在工作流中定义全局变量。
例如，你有多个新建标签页需要输入相同的域名，如 "https://dribbble.com"。 您可以像下面这样定义一个全局变量来使用它而不是每次逐个输入值。

```json
{
  "url": "https://dribbble.com"
}
```
并使用 [表达式](./expressions.md) 来调用全局数据。例如，<code v-pre>{{globalData.url}}</code>

![URL Input](https://res.cloudinary.com/chat-story/image/upload/v1642160825/automa/chrome_d3PsYXgOKK_weyqwy.png)
