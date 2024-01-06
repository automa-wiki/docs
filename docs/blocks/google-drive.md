---
title: Google Drive
---

# Google Drive

将文件上传至您的Google Drive。

您必须将[Google Drive与您的Automa帐户连接](../integrations/google-drive.md)才能使用此模块。

## 上传文件
将一个或多个文件上传至您的Google Drive。

- **文件位置** <br />
  您文件的位置。
  - **网址** <br>
    文件的网址。例如，`https://example.com/file.zip`
  - **本地计算机** <br>
    文件的绝对路径。例如，`C:\users\downloads\file.zip` 或 `/Users/Josh/Desktop/docs.pdf`。<br>
    要使用此选项，您必须[允许Automa访问文件网址](./upload-file.md#requirements)。
  - **下载id** <br>
    已下载文件的下载id。例如，`1010`

- **文件名（可选）** <br />
  文件的名称。编写文件名时，您还必须包括文件的扩展名，如 `movie.mp4` 或 `a-music.mp3`。