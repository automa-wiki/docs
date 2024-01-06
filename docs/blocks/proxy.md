---
title: 代理模块
---

# 代理模块

设置浏览器的代理设置。

- **方案** <br>
  代理服务器的方案（协议），默认为 `https`。

- **端口** <br>
  代理服务器的端口。如果没有定义端口，则根据方案推导端口。
  | 方案 | 端口 |
  |---| --- |
  | http | 80 |
  | https | 443 |
  | socks4 | 1080 |
  | socks5 | 1080 |

- **主机** <br>
  代理服务器的主机名或 IP 地址。

- **绕过列表** <br>
  从代理中排除的网站，请使用逗号分隔 URL 或 URL 模式。例如，`google.com, *.google.com`。请参阅 [chrome 页面](https://developer.chrome.com/docs/extensions/reference/proxy/#bypass-list)上的所有有效的 URL 或模式。