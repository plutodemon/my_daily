---
outline: deep
---

# 常用命令

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