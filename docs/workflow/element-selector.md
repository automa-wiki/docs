---
title: 元素选择器
---

# 元素选择器

元素选择器用于在交互或从页面中提取数据时标识页面上的元素，
例如，如果您希望工作流使用 [表单模块](../blocks/forms.md) 填充页面上的特定表单输入，则需要知道要填写哪些输入元素。 通过使用 `input.form-name` 选择器，它会告诉工作流用 `form-name` [classes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)类填充 [`<input />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)元素。

在Automa，你可以使用 [CSS选择器](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) 或者 [XPath表达式](https://www.w3schools.com/xml/xpath_syntax.asp)来选择元素。

## 模块选择器选项
在编辑需要元素选择器才能工作的模块时您会发现这些选项，例如 [点击元素](../blocks/event-click.md) 和 [获取文本模块](../blocks/get-text.md)。

### 多选
匹配多个元素时。默认情况下Automa只匹配第一个元素。

例如，当使用 [获取文本模块](/blocks/get-text.md) 并将 `p` 作为选择器时，Automa将从所有匹配的元素中匹配所有包含 `p` 节点的文本内容。

### 标记元素
标记已选择的元素。这意味着如果该元素之前已被同一模块选中，则不会被选中。

例如，当您有这样的工作流时

![Workflow example](/images/workflow/B2cPsIplxO_m06lfr.png)

使用 [获取文本模块](/blocks/get-text.md) 以 `.text` 作为选择节点。

```html
<div>
  <p class="text" id="1">Text</p>
  <p class="text" id="2">Text</p>
  <p class="text" id="3">Text</p>
  <p class="text" id="4">Text</p>
</div>
```
当 [获取文本模块](/blocks/get-text.md) 正在执行时，它会获取与选择器匹配的第一个元素 `<p class="text" id="1">Text</p>` 并且由于启用了标记元素选项，它将标记该元素并如下所示 `<p class="text" id="1" block--block-id>Text</p>`。

```html
<div>
  <p class="text" id="1" block--block-id>Text</p>
  <p class="text" id="2">Text</p>
  <p class="text" id="3">Text</p>
  <p class="text" id="4">Text</p>
</div>
```
当第二次执行 [获取文本模块](/blocks/get-text.md) 时，它将重新执行相同的操作，但不会选择元素 `<p class="text" id="1" block--block-id>Text</p>` ，而是选择元素 `<p class="text" id="2">Text</p>` 因为第一个元素已被标记。

### 等待选择器
等待节点 `selector` 出现在页面上。如果检测到 `selector` 元素，该模块将会立即执行，如果 `selector` 元素没有在设置的选择器超时 `timeout` 时间里出现，工作流将会抛出错误。

## 生成选择器
如果您不知道如何编写自己的选择器，可以使用 Automa 元素选择器或模块上的“选择”按钮。

在Automa面板，点击侧边栏的 <v-remixicon name="riFocus3Line" /> 按钮，Automa 会将元素选择器注入到当前页面中。你可以单击或按下 `Space` 键选择元素，它将自动为所选元素生成一个选择器。

![Element picker](/images/workflow/chrome_Kd5yzW80tf_sq2oxp.png)

在编辑模块时你可以看到 "选择一个元素" 按钮，当点击它时，它会将元素选择器注入到当前网页，选择一个元素，然后点击元素选择器中的“选择元素”按钮。

![Select an element button](/images/workflow/chrome_xQ16a4tU8v_etyuxh.png)

## 自定义选择器语法
除了支持标准的 [CSS选择器](https://www.w3.org/TR/selectors-4/) 和XPath表达式外，Automa 还支持非标准语法：
- `iframe-selector |> element-selector`: 允许在 [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 元素中选择元素。例如 `iframe.result |> button.primary-btn`
- `:contains(TEXT)`: 根据元素的文本选择元素。例如 `p.description:contains("cat")`
- `shadow-dom-selector >> element-selector`: 选择 [shadow DOM](https://web.dev/shadowdom-v1/) 中的元素。例如 `div.app-container >> h1.title`