---
标题：表单模块
---

# 表单模块

获取或填充表单元素（输入框、选择框、复选框和单选框）的值。

- **元素选择器** <br>
  [元素选择器](../workflow/element-selector.md)。

## 获取表单值
获取表单元素的值。

- **分配至变量** <br>
  是否将值分配到[变量](../workflow/variables.md)中。

- **变量名称** <br>
  分配值的变量名。

- **插入至表** <br>
  是否将值插入到[表](../workflow/table.md)中。

- **选择列** <br>
  将值插入到哪一列中。


## 表单类型

### 文本字段

- **值** <br>
  文本字段元素，如 \<input> 和 \<textarea>，或具有 `contenteditable` 属性的元素的值。

- **清除表单值** <br>
  在插入新值之前清除文本字段元素的值。

- **打字延迟** <br>
  插入值的每个字符时添加延迟。当设置为0时，值立即插入。

### 选择框

- **值** <br>
  \<select> 元素的值。要为选择框元素选择特定选项，你可以输入你想选择的选项的值。你可以使用 [Automa 元素选择器](../workflow/element-selector.md) 或 [Chrome DevTools](https://developer.chrome.com/docs/devtools/) 来找到选项值。

  ![Chrome DevTools](https://res.cloudinary.com/chat-story/image/upload/v1642419001/automa/chrome_JQ9AV5L07X_fmvf5u.png)

### 复选框 & 单选框

- **已选** <br>
  复选框或单选框元素是否被选中。

<!--@include: ../parts/blocks-interaction-note.md-->