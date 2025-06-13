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

```nginx
server {
        listen 7073;
        listen [::]:7073;

        root /var/www/vitepress/dist;

        index index.html;

        server_name _;

        location / {
                try_files $uri $uri/ /index.html;
        }
}
```