---
title: 全局变量
---

# 全局变量

以下是一些全局变量，你在编写扩展自定义脚本时可以使用

## `$helper.getWorkflows`
`$helper.getWorkflows(workflowId?: string): Promise<Workflow | undefined>`

获取特定的工作流或扩展的所有工作流。

**参数：**
- `workflowId`：工作流的ID

**示例**
```js
// 获取所有工作流
$helper.getWorkflows().then((workflows) => {
  console.log(workflows);
});

// 获取特定工作流
$helper.getWorkflows('workflow-id').then((workflow) => {
  console.log(workflow);
});
```

## `$helper.executeWorkflow`
`$helper.executeWorkflow(workflowData: Workflow | string, options?: Options): void`

执行一个工作流。

**参数：**
- `workflowData`：工作流数据或需要执行的工作流ID
- `options`：执行工作流时的选项

**示例**
```js
(async () => {
  // 使用工作流ID
  $helper.executeWorkflow('workflow-id');

  // 使用工作流对象
  const workflow = await $helper.getWorkflow('workflow-id');
  $helper.executeWorkflow(workflow);

  // 为工作流传递变量和全局数据选项
  const globalData = [{ key: 'value', name: 'John Doe' }];
  const variables = { variableName: 'Variable value', number: 10 };
  $helper.executeWorkflow('workflow-id', {
    data: {
      variables,
      globalData,
    }
  });
})()
```

## `$helper.storage.variables`

访问或操纵存储在[存储](../reference/storage.md#variables)中的变量。

**示例**
```js
(async () => {
  // 获取所有变量
  const variables = await $helper.storage.variables.get(null);
  console.log(variables) // { name: 'John Doe', email: 'johndoe@example.com', username: 'john_doe' }

  // 获取特定的变量
  const variables = await $helper.storage.variables.get('name'); 
  console.log(variables) // { name: 'John Doe' }

  // 获取多个变量
  const variables = await $helper.storage.variables.get(['name', 'email']);
  console.log(variables) // { name: 'John Doe', email: 'johndoe@example.com' }

  // 添加或更新变量
  await $helper.storage.variables.set({
    country: 'US',
    name: 'Jonathan Doe',
    email: 'jonathan_doe@example.com',
  });

  // 删除一个变量 
  await $helper.storage.variables.delete('name');

  // 删除多个变量
  await $helper.storage.variables.delete(['name', 'email']);

  // 删除所有变量
  $helper.storage.variables.clear();
})();
```

## `chrome`

访问浏览器API。可以在[Chrome开发者文档](https://developer.chrome.com/docs/extensions/reference/)上查看所有可用的API。

**示例**
```js
(async () => {
    // 获取所有标签页
    const tabs = await chrome.tabs.query({});

    // 获取当前活动的标签页
    const tab = await chrome.tabs.query({ active: true, currentWindow: true });
})();
```