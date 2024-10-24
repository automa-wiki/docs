---
title: 切换标签页模块
---

# 切换标签页模块

在标签页之间切换


## 查找标签页依据

### 匹配模式
标签页的 URL 模式。例如，`https://google.com/*` Automa 将切换到拥有 `google.com` 域名的标签页。
您可以在 [MDN 页面](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples) 上看到更多匹配模式的示例。

#### 无匹配时创建
如果没有与模式匹配的标签页 URL，Automa 将基于输入的 URL 创建新标签页。

### 下一个标签页
切换到活动标签页的下一个标签页

### 前一个标签页
切换到活动标签页的前一个标签页

### 标签页索引
根据标签页的索引位置切换。例如，浏览器窗口中有 4 个标签页（Google, GitHub, Chess 和 Microsoft），

![tabs](/images/blocks/tabs_ctqmdm.png)

要切换到 Google 标签页，可以输入 `0`，切换到 GitHub 标签页输入 `1`，依此类推。

### 标签页标题
根据标签页的标题进行切换。

## 活动标签页
标签页是否应成为窗口中的活动标签页。