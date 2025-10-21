---
outline: deep
---

# 常用命令

### 查看信息

- #### 查看Docker版本
  ```bash
  docker --version
  ```
- #### 查看Docker信息
  ```bash
  docker info
  ```
- #### 查看Docker容器列表
  ```bash
  docker ps
  ```
    - 输出字段说明：
        - CONTAINER ID：容器ID
        - IMAGE：容器使用的镜像
        - COMMAND：容器启动时执行的命令
        - CREATED：容器创建时间
        - STATUS：容器当前状态
        - PORTS：容器映射的端口信息
        - NAMES：容器名称
    - 容器状态说明：
        - `created`：已创建但未启动
        - `restarting`：正在重启
        - `running` 或 `up`：正在运行
        - `removing`：迁移中
        - `paused`：已暂停
        - `exited`：已停止
        - `dead`：死亡（无法启动）

- #### 查看所有容器（包括未运行的）
  ```bash
  docker ps -a
  ```
- #### 查看Docker镜像列表
  ```bash
  docker images
  ```
- #### 查看Docker网络列表
  ```bash
  docker network ls
  ```
- #### 查看容器日志
  ```bash
  docker logs <container_id>
  ```
    - `-f`：实时查看日志输出
    - `--tail N`：显示最后N行日志
    - `container_id`可用容器名称代替

### 容器操作

- #### 重启Docker服务
  ```bash
  sudo systemctl daemon-reload
  ```
  ```bash
  sudo systemctl restart docker
  ```
- #### 启动Docker容器
  ```bash
  docker start <container_id>
  ```
- #### 停止Docker容器
  ```bash
  docker stop <container_id>
  ```
- #### 删除Docker容器
  ```bash
  docker rm <container_id>
  ```
- #### 删除Docker镜像
  ```bash
    docker rmi <image_id>
  ```
