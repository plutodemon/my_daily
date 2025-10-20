---
outline: deep
---

# RustDesk-Server 部署

## docker 部署

- 拉取镜像
  ```bash
  docker pull rustdesk/rustdesk-server
  ```
- 创建数据目录
  ```bash
  mkdir -p ~/rustdesk-data
  cd ~/rustdesk-data
  ```
- 启动hbbs（ID服务器）
  ```bash
  docker run --name rustdesk-hbbs \
    -v ~/rustdesk-data:/root \ 
    -td --net=host \
    rustdesk/rustdesk-server \
    hbbs -r <你的服务器IP>:21117
  ```
- 启动hbbr（中继服务器）
  ```bash
  docker run --name rustdesk-hbbr \
    -v ~/rustdesk-data:/root \
    -td --net=host \
    rustdesk/rustdesk-server \
    hbbr
  ```
- 检查服务状态
  ```bash
  docker ps
  ```
- 查看日志
  ```bash
  docker logs rustdesk-hbbs
  ```
  ```bash
  docker logs rustdesk-hbbr
  ```

### 常用命令

- 停止服务
  ```bash
  docker stop rustdesk-hbbs rustdesk-hbbr
  ```
- 重启服务
  ```bash
  docker start rustdesk-hbbs rustdesk-hbbr
  ```

### 备份与恢复

- 删除服务（需重新部署时）
  ```bash
  docker rm -f rustdesk-hbbs rustdesk-hbbr
  ```
- 备份数据
  ```bash
  cp -r ~/rustdesk-data ~/rustdesk-backup
  ```
- 恢复数据
  ```bash
  docker run --name rustdesk-hbbs -v ~/rustdesk-backup:/root -td --net=host rustdesk/rustdesk-server hbbs
  docker run --name rustdesk-hbbr -v ~/rustdesk-backup:/root -td --net=host rustdesk/rustdesk-server hbbr
  ```