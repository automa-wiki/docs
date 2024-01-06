---
title: 链接模块
---

# 链接模块

打开[锚定元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)（\<a>）所含的URL。

有时，锚定元素具有[`target="_blank"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)属性，当使用[点击元素模块](/blocks/event-click.md)进行点击时，例如，它将在新标签页中打开。由于它在新标签页中打开，Automa将无法在新标签页上执行下一个模块。

因此，为了解决这个问题，你需要使用链接模块。它将从锚定元素中取出URL，并在同一个标签页上打开它。

- **元素选择器** <br>
  [元素选择器](../workflow/element-selector.md)。

<!--@include: ../parts/blocks-interaction-note.md-->