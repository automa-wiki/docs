---
title: 等待连接模块
---

# 等待连接模块

在继续执行下一个模块之前，等待所有连接到此模块的模块执行结束。

当您在工作流中有分支模块时，使用此模块。

![等待连接](/images/blocks/chrome_ZJm8cwo6Z5_xeqekg.png)

- **超时（毫秒）** <br>
  设置模块等待所有流程执行完毕的时间，默认为10000ms（10秒）。一旦达到超时时间，工作流将继续执行下一个模块。

## 只继续特定的流程
是否只继续特定的流程。

当您有如上图所示作为分支的模块时，Automa将为每个新分支创建一个新的“Worker”，其任务是执行该分支上的模块。

![分支](/images/blocks/chrome_gcNslvkyzZ_yqeco7.png)

如果不启用此选项合并分支，每个worker将执行相同的模块，并且模块将多次执行。

![特定流程禁用](/images/blocks/not-specific-flow_gsawj3.gif)

为了防止这种情况，启用此选项并选择一个特定的流程以继续。

![特定流程启用](/images/blocks/specific-flow_hpfqsb.gif)