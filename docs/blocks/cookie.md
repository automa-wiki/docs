---
title: Cookie模块
---

# Cookie模块

获取、设置或删除cookies。

- **获取cookie** <br>
	- **获取所有cookies** <br>
	  选择是检索一个或所有cookies。

	- **URL** <br>
	  与要检索的cookie关联的URL。当你启用"获取所有cookies"时，这个字段是可选的。

	- **名称** <br>
	  要检索的cookies的名称

	- **路径** <br>
	  cookies的路径

	- **域名** <br>
	  cookies必须与之关联的域名（要么与这个确切的域名关联，要么与它的一个子域名关联）

- **设置cookie** <br>
	- **URL** <br>
	  表示与cookie关联的请求-URI。这个值可以影响创建的cookie的默认域和路径值。

	- **名称** <br>
	  cookie的名称

	- **路径** <br>
	  cookies的路径

	- **值** <br>
	  cookies的值

	- **域名** <br>
	  表示cookie的域名

	- **sameSite** <br>
	  表示cookie的SameSite状态的值。可能的值有`lax`、`strict`，或你可以留空。

	- **过期日期** <br>
	  以秒数表示的cookie的过期日期

- **删除cookies** <br>
	- **URL** <br>
	  与cookie关联的URL表示

	- **名称** <br>
	  要删除的cookies的名称
