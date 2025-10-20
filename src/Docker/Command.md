---
outline: deep
---

# 常用命令

- 查看Docker版本
  ```bash
  docker --version
  ```
- 查看Docker信息
  ```bash
  docker info
  ```
- 查看Docker容器列表
  ```bash
  docker ps
  ```
- 查看所有容器（包括未运行的）
  ```bash
  docker ps -a
  ```
- 查看Docker镜像列表
  ```bash
  docker images
  ```
- 删除Docker容器
  ```bash
  docker rm <container_id>
  ```
- 删除Docker镜像
  ```bash
    docker rmi <image_id>
  ```
- 查看Docker网络列表
  ```bash
  docker network ls
  ```
- 启动Docker容器
  ```bash
  docker start <container_id>
  ```
- 停止Docker容器
  ```bash
  docker stop <container_id>
  ```
