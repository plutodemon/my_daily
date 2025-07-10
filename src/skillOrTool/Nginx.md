---
outline: deep
---

# Nginx

## 安装

```bash
sudo apt install -y nginx
```

## 常用命令

启动nginx

```bash
sudo systemctl start nginx
```

停止nginx

```bash
sudo systemctl stop nginx
```

重载nginx配置

```bash
sudo systemctl reload nginx
```

重启nginx

```bash
sudo systemctl restart nginx
```

查看nginx状态

```bash
sudo systemctl status nginx
```

查看nginx版本

```bash
nginx -v
```

查看nginx配置是否正确

```bash
nginx -t
```

查看nginx配置文件路径

```bash
nginx -T
```

## 配置

修改默认配置 `/etc/nginx/sites-available/default` 文件

<!--@include: server_cfg.md{41,}-->

## 配置SSL

### 自动化配置

可以使用 [Certbot](https://certbot.eff.org/) 工具自动化申请和配置SSL证书。[Let's Encrypt](https://letsencrypt.org/) 免费证书。

### 手动配置(Nginx)

1. 申请SSL证书
2. 将证书文件放在服务器上，例如 `/etc/nginx/certs/your_domain.crt` 和 `/etc/nginx/private/your_domain.key`
3. 修改Nginx配置文件 `/etc/nginx/sites-available/default`

<!--@include: server_cfg.md{1,40}-->