---
标题：数据映射模块
---

# 数据映射模块

映射变量或表中的数据。

- **数据源** <br>
  数据映射的源头可以是一个变量或表。

- **数据映射** <br>
  数据映射是您通过输入点标记匹配源字段与目标字段的地方。一个源可以映射多个目标。例如，当您有如下数据
  ```json
  [
      {
          "address": "2204 Volutpat Rd.",
          "name": "Palmer Porter",
          "phone": "(251) 595-5203",
          "email": "phasellus.dolor@aol.org",
          "postalZip": "8517",
          "country": "United States"
      },
      {
          "address": "2741 Dis Rd.",
          "name": "Byron Bowers",
          "phone": "(563) 717-9312",
          "email": "mattis.ornare@outlook.couk",
          "postalZip": "5612",
          "country": "Costa Rica"
      },
      {
          "address": "Ap #923-7718 Sed Rd.",
          "name": "Joseph Waller",
          "phone": "1-897-102-6811",
          "email": "cras.pellentesque@outlook.edu",
          "postalZip": "38-251",
          "country": "Belgium"
      }
  ]
  ```
  并有一个像这样的数据映射。

  ![数据映射](/images/blocks/Screenshot_2022-07-06_134530_pyuvbm.png)

  数据将转换为
  ```json
  [
      {
          "email": "phasellus.dolor@aol.org",
          "full_name": "Palmer Porter",
          "address": {
              "street": "2204 Volutpat Rd.",
              "postalZip": "8517",
              "country": "United States"
          },
      },
      {
          "email": "mattis.ornare@outlook.couk",
          "full_name": "Byron Bowers",
          "address": {
              "street": "2741 Dis Rd.",
              "postalZip": "5612",
              "country": "Costa Rica"
          },
      },
      {
          "email": "cras.pellentesque@outlook.edu",
          "full_name": "Joseph Waller",
          "address": {
              "street": "Ap #923-7718 Sed Rd.",
              "postalZip": "38-251",
              "country": "Belgium"
          }
      }
  ]
  ```

- **指派给变量** <br>
  是否将映射后的数据指派给一个[变量](../workflow/variables.md)。

- **变量名** <br>
  要指派映射数据的变量名。

- **插入表格** <br>
  是否将映射的数据插入到[表](../workflow/table.md)中。

- **选择列** <br>
  将映射数据插入的列。