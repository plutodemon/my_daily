---
outline: deep
---

# [Docker](https://docs.docker.com/ "Docker官方文档")

## [Docker安装](https://docs.docker.com/engine/install/ubuntu/ "Docker官方安装教程")

## 卸载

- ### 先卸载所有冲突的软件包
  ```bash
  for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
  ```

## apt 安装

- ### apt更新
  ```bash
  sudo apt-get update
  ```
- ### 安装必要的包
  ```bash
  sudo apt-get install ca-certificates curl
  ```
- ### 创建目录
  ```bash
  sudo install -m 0755 -d /etc/apt/keyrings
  ```
- ### 添加Docker的GPG公钥
  ```bash
  sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  ```
- ### 修改文件权限
  ```bash
  sudo chmod a+r /etc/apt/keyrings/docker.asc
  ```
- ### 将 Docker 的官方 APT 软件源配置写入
  ```bash
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  ```
- ### 更新APT包索引
  ```bash
  sudo apt-get update
  ```
- ### 安装Docker等
  ```bash
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  ```
- ### 测试
  ```bash
  sudo docker run hello-world
  ```

## [换源](https://blog.csdn.net/Lichen0196/article/details/137355517)

- ### 修改或创建 `/etc/docker/daemon.json` 文件
  ```bash
  vim  /etc/docker/daemon.json
  ```
- ### 添加以下内容
  ```json
  {
    "registry-mirrors": [
      "https://registry.docker-cn.com",
      "https://docker.mirrors.ustc.edu.cn",
      "https://hub-mirror.c.163.com",
      "https://mirror.baidubce.com",
      "https://ccr.ccs.tencentyun.com"
    ]
  }
  ```
- ### 重启Docker服务
  ```bash
  sudo systemctl daemon-reload
  ```
  ```bash
  sudo systemctl restart docker
  ```
- ### 验证是否生效
  ```bash
  docker info
  ```