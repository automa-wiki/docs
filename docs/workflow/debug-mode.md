---
title: 调试模式
---

# 调试模式
当开启调试模式时，Automa会使用Chrome Devtools Protocol API (简称“CDP”) 来模拟用户的操作，比如点击和输入，而不是使用JavaScript API。

调试模式仅在Automa的chromium版本中可用。

## 激活调试模式
有两种方法可以激活调试模式，第一种是在工作流设置，第二种是在模块里设置。当您在工作流设置中启用调试模式时，Automa将在所有模块上使用CDP API。

![workflow settings](https://res.cloudinary.com/chat-story/image/upload/v1666082112/automa/chrome_K7BmBkZ2gZ_o7k6fi.png)

如果您只想在特定模块中使用调试模式，则可以在模块设置中启用它。

## 何时使用
当您想在网站上输入文本时，您可以使用调试模式，但文本字段使用所见即所得的编辑器，例如当需要在节点属性为contenteditable的编辑框输入文本时。

![Block settings](https://res.cloudinary.com/chat-story/image/upload/v1666146988/automa/chrome_EJW6qAdZCn_hqacml.png)

或者，当您想使用 X 和 Y 坐标执行单击操作时，使用 [触发事件](../blocks/trigger-event.md) 模块。

![Trigger event block](https://res.cloudinary.com/chat-story/image/upload/v1666147104/automa/chrome_z5Ib6JPWpR_ykdl3x.png)

Automa 无法使用 JavaScript API 模拟键入或单击以上这些情况。因此需要使用调试模式。