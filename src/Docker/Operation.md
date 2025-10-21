---
outline: deep
---

# Docker常用操作

## 示例

### 在容器中执行命令

- #### 执行echo命令
    ```bash
    docker run ubuntu:15.10 /bin/echo "Hello world"
    ```
- #### 进入交互式终端
    ```bash
    docker run -it ubuntu:15.10 /bin/bash
    ```
    - `-t`：在新容器内指定一个伪终端或终端
    - `-i`：允许你对容器内的标准输入 (STDIN) 进行交互
    - `/bin/bash`：在容器内启动 bash shell

### 后台运行容器

- #### 后台运行Ubuntu容器
    ```bash
    docker run --name hello-docker -d ubuntu:15.10 /bin/sh -c "while true; do sleep 30; done;"
    ```
    - `--name hello-docker`：为容器指定名称为 hello-docker
    - `-d`：让容器在后台运行
    - `/bin/sh -c "command"`：在容器中执行 shell 命令
    - `while true; do ... done`：创建一个无限循环，每秒输出一次 "hello world"

### 容器生命周期管理

- #### 创建容器但不启动
    ```bash
    docker create --name my-ubuntu ubuntu:15.10
    ```
    - 会创建一个容器但不会启动它  
      创建后的容器处于 "created" 状态
- #### 启动容器
    ```bash
    docker start my-ubuntu
    ```
    - 启动一个已创建或已停止的容器  
      启动后的容器处于 "running" 状态
- #### 暂停和恢复容器
    ```bash
    docker pause my-ubuntu
    ```
    ```bash
    docker unpause my-ubuntu
    ```
    - 暂停容器会冻结容器中的所有进程, 但不会释放资源  
      暂停的容器处于 "paused" 状态
- #### 停止容器
    ```bash
    docker stop my-ubuntu
    ```
    - 这个命令会发送 SIGTERM 信号给容器中的主进程  
      如果进程在一定时间内（默认 10 秒）没有退出 Docker 会发送 SIGKILL 信号强制终止进程  
      停止后的容器处于 "exited" 状态
- #### 强制停止容器
    ```bash
    docker kill my-ubuntu
    ```
    - 这个命令会立即发送 SIGKILL 信号给容器中的主进程, 强制终止容器  
      这可能会导致数据丢失，应该只在容器无法正常停止时使用
- #### 删除容器
    ```bash
    docker rm my-ubuntu
    ```
    - `-f`：强制删除正在运行的容器
    - `docker container prune`：删除所有已停止的容器


- #### 运行并删除容器
    ```bash
    docker run --rm ubuntu:15.10 /bin/echo "Hello world"
    ```