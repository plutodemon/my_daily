---
outline: deep
---

# DNS泄露

[一些视频](https://www.youtube.com/watch?v=fqREM6b25SY&list=PL1ZgI6MG4S2QsGWlvZfzUGuv_bgiWzGRH&index=2)  
[如何防止DNS泄露](https://idcflare.com/t/topic/51773)

## 什么是DNS泄露

DNS泄露是指在使用VPN或代理服务时 用户的DNS请求未通过VPN隧道传输  
而是直接发送到ISP的DNS服务器 导致用户的真实IP地址和浏览活动可能被暴露给ISP或其他第三方

## 一些操作

- 查询操作系统dns缓存
  ```bash
  ipconfig /displaydns
  ```
  
- 