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
