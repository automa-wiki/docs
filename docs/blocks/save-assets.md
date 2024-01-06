---
title: 保存资产模块
---

# 保存资产模块
从一个元素或URL保存资产（图片、视频、音频或文件）。

- **类型** <br>
  资产来源，是从URL获取，还是从媒体元素如[image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)、[audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)或[video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)获取。

- **URL** <br>
  资产的URL。例如，`https://example.com/image.png`

- **元素选择器** <br>
  [元素选择器](../workflow/element-selector.md)。

- **文件名** <br>
  资产的文件名。如果您不想重命名资产，请将输入留空。

- **冲突时** <br>
  指定如果资产文件的名称与现有文件冲突应该怎么做。
	- `"uniquify"` <br>
	  浏览器会修改文件名以确保其唯一性。

	- `"overwrite"` <br>
	  浏览器会用新下载的文件覆盖旧文件。

	- `"prompt"` <br>
	  浏览器会提示用户，询问他们是选择uniquify还是overwrite。

- **保存项目的下载ID** <br />
  将下载的资产的下载ID保存到一个变量或工作流表中。它会返回一个整数数组。

  如果您想获取下载的资产的文件路径，可以将此下载ID传递给[处理下载模块](./handle-download.md)。

<!--@include: ../parts/blocks-interaction-note.md-->