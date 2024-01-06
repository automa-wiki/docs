---
title: 常见错误
---

# 工作流常见错误
运行工作流时的一些常见错误以及解决方法。

## 找不到带有“{selector}”选择器的元素 {#element-not-found}
此错误发生是因为元素选择器与页面上的任何元素都不匹配。针对这种情况，你可以使用“元素存在”（Element Exist）模块检查页面上是否存在元素，或者启用选择器选项中的“等待选择器”（Wait for selector）功能。

![等待选择器选项](https://res.cloudinary.com/chat-story/image/upload/v1663575029/automa/chrome_xzwsxBADvq_f5povx.png)

## 找不到带有“{pattern}”模式的标签页 {#no-match-tab}
你输入的匹配模式与任何标签页的URLs都不匹配。请查看如何在 [MDN页面](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples)上编写匹配模式的方法。

## 内容正文不是有效的JSON {#invalid-body}
[HTTP请求模块](/blocks/webhook.md)中的请求正文不符合 [JSON格式](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#json_structure)。

如果你试图在正文中引用数据，可以按照[这些指南](/blocks/webhook.md#referencing-data-inside-body)操作。

## 无法连接到标签页，请在使用“{name}”模块前使用“新标签页”或“活动标签页”模块。 {#no-tab}
发生此问题是因为你尝试使用的模块需要一个活动标签页才能工作。在此上下文中，活动标签页是指模块将要执行的标签页。

为解决此问题，你可以在尝试使用的模块前使用[新标签页模块](/blocks/new-tab.md)或[活动标签页模块](/blocks/active-tab.md)。

![无标签页](https://res.cloudinary.com/chat-story/image/upload/v1663569336/automa/chrome_D5csgMXyoj_okm03f.png)

## “{url}”是无效的URL {#invalid-active-tab}
当你输入的值不是有效的URL时将出现此错误。有效的URL必须以 `http` 或 `https` 开头，例如 “https://example.com”。