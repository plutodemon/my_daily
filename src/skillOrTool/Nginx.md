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

修改默认配置 `/etc/nginx/sites-available/default` 文件 或 `/etc/nginx/conf.d/your_domain.conf`

<!--@include: server_cfg.md{41,}-->

## 配置SSL

### 自动化配置

可以使用 [Certbot](https://certbot.eff.org/) 工具自动化申请和配置SSL证书。[Let's Encrypt](https://letsencrypt.org/) 免费证书。

- 安装Certbot

```bash
sudo snap install core
```

```bash
sudo snap refresh core
```

```bash
sudo snap install --classic certbot
```

这一步是为了确保 certbot 命令能全局使用

```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### 手动配置(Nginx)

1. 申请SSL证书 可以使用 [ZeroSSL](https://app.zerossl.com/certificate/new) 或其他CA机构申请免费证书
    - 验证域名所有权:将验证文件放到 `/var/www/pki-validation/` 下, nginx添加配置
    ```nginx
    location ^~ /.well-known/pki-validation/ {
        alias /var/www/pki-validation/;
        allow all;
    }
    ```
2. 将证书文件放在服务器上，例如 `/etc/nginx/certs/your_domain.crt` 和 `/etc/nginx/private/your_domain.key`
3. 修改Nginx配置文件 `/etc/nginx/sites-available/default` 或 `/etc/nginx/conf.d/your_domain.conf`

<!--@include: server_cfg.md{1,40}-->