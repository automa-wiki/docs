---
title: JavaScript 执行上下文
---

# JavaScript 执行上下文
执行上下文是指 JavaScript 代码将要执行的环境。
在 Automa 中，您可以选择两种环境：活动标签页和后台。

## 活动标签页

工作流将把 JavaScript 代码注入到工作流的活动标签页中。当您想进行 DOM 操作或想要获取元素的属性或文本时，请选择此环境。
但是，对于某些网站，不允许注入 JS 代码。这是因为它们有内容安全策略（CSP），这会使得不能注入第三方代码。要检查是否允许第三方代码，您可以通过按 `ctrl+shift+i` 打开 Chrome 开发者工具；在 `console` 标签页粘贴下面的代码：
```js
const script = document.createElement('script');
script.textContent = 'alert("Hello world!")';
document.body.appendChild(script);
```

如果您看到 `由于违反以下内容安全策略指令而拒绝执行内联脚本...` 错误，这意味着不能注入第三方代码。

![CSP 错误](/images/reference/chrome_hIZ8wpD5CC_dh5nfw.png)

## 后台

工作流在一个沙盒内执行您的 JS 代码。如果您的代码与 DOM 无关，请选择这个环境作为执行上下文。并且它不需要一个活动的标签页也能工作。

如果您想进行调试，比如使用 `console.log` 方法。您可以通过在 Automa 仪表板上打开 Chrome 开发者工具来找到输出。