---
title: 创建元素模块
---

# 创建元素模块

创建一个元素并将其插入到页面中。

- **元素选择器** <br>
  针对目标元素的[元素选择器](../workflow/element-selector.md)。

- **插入元素**<br>
  表示相对于目标元素的位置。
	- **作为第一个子元素**<br>
	  将它插入为目标元素的第一个子元素。

	- **作为最后一个子元素**<br>
	  将它插入为目标元素的最后一个子元素。

	- **作为前一个同级元素**<br>
	  将它插入为目标元素的前一个同级元素。

	- **作为后一个同级元素**<br>
	  将它插入为目标元素的后一个同级元素。

	- **替换目标元素**<br>
	  用所创建的元素替换目标元素。

- **HTML**<br>
  您要创建的元素的HTML

- **CSS**<br>
  将被注入页面的CSS

- **JavaScript**<br>
  将被注入页面的JavaScript
	- **`automaRefData(keyword, path?)` 函数**<br>
	  使用此函数来[引用数据](../workflow/expressions.md)。<br>
	  更多详情请打开[JavaScript模块页面](/blocks/javascript-code.html#automarefdata-keyword-path)

	- **`automaExecWorkflow(detail)` 函数**<br>
	  用于执行工作流的函数。<br>
	  `detail` 参数是您输入工作流详情的地方，比如工作流的id或者您想要执行的工作流的`publicId`。例如，
	  ```js
      // 根据其id执行工作流
      automaExecWorkflow({ id: 'workflow-id' });

      // 根据其publicId执行工作流
      automaExecWorkflow({ publicId: 'workflow-public-id' });
      ```
	  您还可以输入变量，这些变量将在工作流运行时被注入。
	  ```js
      automaExecWorkflow({
          id: 'workflow-id',
          data: {
              variables: {
                  varA: '变量A的值',
                  postCode: 1212,
                  numbers: [1, 2, 3, 4],
              }
          }
      })
      ```
- **预加载脚本**<br>
  在注入元素之前加载脚本或样式。

<!--@include: ../parts/blocks-interaction-note.md-->