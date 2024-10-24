---
title: 模块
---

# 模块
Automa 中有六类模块:
- **常规**: 在工作流中执行常规操作，例如发出 HTTP 请求或执行其他工作流。
- **浏览器**: 控制浏览器。
- **Web交互**: 与工作流的活动选项卡进行交互。在使用此类别中的块之前，您需要使用 [新建标签页](../blocks/new-tab.md) 或 [活动标签页](../blocks/active-tab.md) 模块。
- **控制流**: 向工作流添加逻辑。
- **在线服务**: 与Automa集成的服务。
- **数据**: 修改或操作工作流变量或表。

## 模块设置
这些模块带有可配置的菜单和设置。

### 菜单
请将鼠标悬停在编辑器画布中的模块上，它将出现在模块的顶部。

- **删除**: 删除当前模块
- **模块设置**: 打开当前模块设置界面
- **移动模块到模块组**: 通过拖动此图标将块移动到模块组
- **启用/禁用模块**: 切换停用模块
- **运行**: 从当前块运行工作流
- **编辑**: 编辑模块，也可以通过双击模块打开编辑界面

您还可以右键单击该块以显示更多菜单。

![Block menu](/images/workflow/block-menu_lq1vig.gif)

### 设置
模块设置允许您配置模块执行、错误处理和外观。

- **常规**
  - [**调试模式**](./debug-mode.md): 使用 CSP 执行模块。此选项仅适用于某些模块，如“单击元素”和“表单”。
- **出错时**
  - **启用**: 启用块的错误处理程序
  - **重试操作**: 如果模块发生错误，则重新执行该模块
  - **抛出错误**: 该模块会抛出错误
  - **继续流程**: 工作流将继续执行
  - **执行回退**: 工作流将回退到连接输出的模块
  - **插入数据**: 在 [表](./table.md) 或者 [变量](./variables.md) 中插入数据
- **线段**
  - **选择线段**: 选择要连接的块
  - **线段标签**: 为连接增加标签
  - **动画**: 为连接增加动画
  - **线段颜色**: 更改连接线颜色

![Block settings](/images/workflow/block-settings_ppatjo.gif)

## 选择块
要选择块， 你可以按住 `ctrl` 键并点击模块或者按住 `shift` 键拖动鼠标。

![Selecting blocks](/images/workflow/selecting-blocks_vecdy3.gif)

## 连接块
有几种方法可以将一个块连接到另一个块：

- **手动**: 将模块输出口拖动到另外一个模块的输入口中。
::: details 例子
![connect block manually](/images/workflow/connect-block_advdve.gif)
:::

- **将模块放入另外一个模块的输出口**: 将模块拖放到另外一个模块的输出口中。 
::: details 例子
![drop to output example](/images/workflow/connect-block-ouput_nn5nx7.gif)
:::

- **单击模块的输出口和输入口** <br>
::: details 例子
![Clicking the block output and input example](/images/workflow/connect-block2_slxrpv.gif)
:::

- **将一个模块拖放到另一个模块中** <br>
::: details 例子
![drop to another block example](/images/workflow/drop_in_a_block_zzrtaw.gif)
:::