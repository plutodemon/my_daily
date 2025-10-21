---
outline: deep
---

# Linux 常用操作

## 生成公钥私钥

先切换目录到 `~/.ssh` 没有则创建

```bash
mkdir -p -m 700 ~/.ssh && cd ~/.ssh
```

```bash
ssh-keygen -t rsa -b 4096 -C "email" -f ~/.ssh/id_rsa
```

---

### 通过ssh登录Linux

需要在Linux服务器上添加公钥

```bash
cat ~/.ssh/id_rsa.pub
```

将输出的公钥内容复制到Linux服务器的 `~/.ssh/authorized_keys` 文件中

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub user@hostname
```

或者追加写入

```bash
cat ~/.ssh/id_rsa.pub | ssh user@hostname
cat >> ~/.ssh/authorized_keys
```

```bash
cat id_rsa_github.pub >> authorized_keys
```

## 配置开机启动

编写 `startup.sh` 脚本

```bash
#!/bin/bash
# 启动脚本内容
docker start rustdesk-hbbs rustdesk-hbbr
```

赋予执行权限

```bash
chmod +x startup.sh
```

写一个 systemd 服务文件 `my_startup.service`

```ini
[Unit]
Description=Startup Containers
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
ExecStart=/usr/local/bin/startup.sh
RemainAfterExit=true

[Install]
WantedBy=multi-user.target
```

启用服务

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl enable my_startup.service
```

查看日志

```bash
systemctl status lemon_restart.service -l
```

查看详细日志

```bash
journalctl -xeu lemon_restart.service
```

rg命令(代替grep)