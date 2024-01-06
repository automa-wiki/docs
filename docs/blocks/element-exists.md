---
title: 元素存在模块
---

# 元素存在模块

检查一个[元素](https://developer.mozilla.org/en-US/docs/Web/API/Element)是否存在于[文档](https://developer.mozilla.org/en-US/docs/Web/API/Document)中。

如果元素存在，工作流将执行连接到第一个输出的模块。如果不存在，它将执行`fallback`输出。

- **元素选择器** <br>
  [元素选择器](../workflow/element-selector.md)。

- **尝试次数** <br>
  根据选择器定义检查元素的次数。

- **超时** <br>
  尝试之间的延迟，默认为500毫秒。

- **备选方案** <br>
  当元素不存在时的备选方案。

- **如果不存在则抛出错误** <br />
  如果不存在元素，抛出错误而不是执行备选方案。