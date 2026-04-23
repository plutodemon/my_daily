---
outline: deep
---

# 一些vps的设置以及知识点

## [ip质量检测](https://idcflare.com/t/topic/18792)

### ip类型

- 住宅ip **ISP-Fixed Line ISP**
    - 固定线路互联网服务商 例如中国电信 AT&T等
- 数据中心ip **DCH-Data Center/Web Hosting/Transit**
    - 云服务商机房分配的IP 云服务器、VPS、CDN，例如AWS、GCP、阿里云等
- 移动IP **MOB-Mobile ISP**
    - 手机网络运营商 手机4G/5G网络 例如中国移动、Verizon Wireless等
- 商业IP **COM-Commercial**
    - 商业用途 企业网络
- 教育Ip **EDU-University/College/School**
    - 分配给教育机构的ip 一般认为是受信任的 在过学生优惠有奇效
- 一般原生ip好于广播ip
- 双isp: ASN所有者(AS Usage Type)和企业(Usage Type)都是双isp的现象
    - 一般而言，一个家宽ip应有的特征就是双ISP且最好二者完全一致

### ip检测

[参考](https://meowvps.com/)

- [检测脚本](https://github.com/xykt/IPQuality)
- [ip2location](https://www.ip2location.com/demo/)
    - 检测ip地址和家宽还是机房ip
    - 需要关注 `Region` `Usage Type` `AS Usage Type` `ASN`
- [ipqs](https://www.ipqualityscore.com/user/search)
    - ip的滥用情况
- [ping0](https://ping0.cc/)
    - ASN的检测
- [InternetShortcut](https://ipdata.co/)
    - 滥用标记
- [ip欺诈](https://scamalytics.com/)
    - 专门查垃圾邮件/abuse 低分不一定好 高分基本烂完
- [cloudflare](https://radar.cloudflare.com/)
    - 机器人与人类流量占比
