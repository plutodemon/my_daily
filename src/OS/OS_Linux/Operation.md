---
outline: deep
---

# 一些常用操作

## 设置 Swap 虚拟内存

### 查看硬盘读写速度

- 查看硬盘类型
    - ROTA: 0为SSD 1为机械硬盘
  ```bash
  lsblk -d -o name,rota,size,model
  ```

- 测试顺序写入速度(简单测试)
  ```bash
  dd if=/dev/zero of=testfile bs=1G count=1 oflag=direct
  ```

- 测试顺序读取速度
  ```bash
  dd if=testfile of=/dev/null bs=1G iflag=direct
  ```

- 更专业测试
  ```bash
  fio --name=randrw --ioengine=libaio --rw=randrw --bs=4k --size=1G --numjobs=1 --runtime=60 --group_reporting
  ```

- 删除测试文件
  ```bash
  rm -f testfile
  ```

### 设置 Swap

1. 创建 2G swap 文件
    ```bash
    fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
    ```

2. 设置安全权限（必须）
    ```bash
    chmod 600 /swapfile
    ```

3. 格式化为 swap
    ```bash
    chmod 600 /swapfile
    ```

4. 启用 swap
    ```bash
    swapon /swapfile
    ```

5. 设置开机自动挂载
    ```bash
    grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
    ```

6. 设置服务器推荐 swappiness（更稳）
    ```bash
    echo 'vm.swappiness=10' > /etc/sysctl.d/99-swap.conf
    ```
    ```bash
    sysctl -p /etc/sysctl.d/99-swap.conf
    ```

7. 显示结果确认 `swapon --show` `free -h`

## 启用代理

1. 下载对应版本 解压后放入文件夹内`/opt/clash` 随后更改权限
      ```bash
      chmod 755 mihomo
      ```
2. 下载配置文件`config.yaml` 放入`/opt/clash`
3. 开启系统 IP 转发, 编辑`/etc/sysctl.conf` 更改 `net.ipv4.ip_forward=1`
     ```bash 
     sysctl -p
     ```
4. 注册为 systemd 服务, 创建 `/etc/systemd/system/mihomo.service`
     ```ini
     [Unit]
     Description=mihomo Daemon
     After=network.target NetworkManager.service systemd-networkd.service iwd.service
     [Service]
     Type=simple
     LimitNPROC=500
     LimitNOFILE=1000000
     CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH
     AmbientCapabilities=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH
     Restart=always
     ExecStartPre=/usr/bin/sleep 1s
     ExecStart=/opt/clash/mihomo -d /opt/clash
     ExecReload=/bin/kill -HUP $MAINPID
     [Install]
     WantedBy=multi-user.target
     ``` 
5. 启动服务
      ```bash
      systemctl enable mihomo
      ```
      ```bash
      systemctl start mihomo
      ```
      ```bash
      systemctl stop mihomo
      ```
      ```bash
      systemctl status mihomo
      ```
    - 查看日志
      ```bash
      journalctl -u mihomo -f
      ```
6. web ui面板 修改对应配置
      ```bash
      git clone https://github.com/metacubex/metacubexd.git -b gh-pages /opt/clash/ui
      ```
   

## 安装zsh 和ohmyzsh 并配置 powerlevel10k
wget -q https://github.com/ryanoasis/nerd-fonts/releases/latest/download/JetBrainsMono.zip
unzip -o JetBrainsMono.zip -d ~/.local/share/fonts/JetBrainsMono
fc-cache -fv
fc-list | grep "JetBrains"
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

ZSH_THEME="powerlevel10k/powerlevel10k"

重新配置 p10k configure