---
outline: deep
---

# Python

如果仅仅需要python环境 可以单独安装这个 建议直接安装Anaconda

## 环境安装

- Windows: 官网下载对应版本 `Use admin privileges 和 Add to PATH` 都要选择点击安装
- 自定义安装:
    - [ ] Documentation: 安装Python的文档和帮助文件 一般不安装 因为也不看
    - [X] pip: 安装Python包管理工具 一定要安装
    - tcl/tk and IDLE: 安装Python的GUI工具包和IDLE集成开发环境 一般不安装 因为也不用
    - [X] Python test suite: 安装Python的测试套件 后期会用到
    - [X] py launcher: 安装Python的py命令行工具 安装 可能会用到
    - advanced options:
        - [X] Associate files with Python: 将Python关联到.py文件 选择
        - [ ] Create shortcuts for installed applications: 为安装的应用程序创建快捷方式 不选择
        - [X] Add Python to environment variables: 将Python添加到环境变量 选择
        - [X] Precompile standard library: 预编译标准库 以提高标准库模块的导入速度
        - 路径: 不要带中文
    - 如果前面没有选择添加环境变量: 系统环境变量PATH中添加Python的安装路径
- 验证: `python --version` `pip --version` `py --version`
    - pip修改路径:
    - `python -m site` 查看路径  `pip show 安装包名字` 查看安装包路径
    - (可能不生效 尤其是再conda环境中) 在 `python/lib/site.py ` 文件中 修改
      `USER_SITE = "G:\anaconda\Lib\site-packages"`
      `USER_BASE = "G:\anaconda\Scripts"`
    - (不生效时使用) 配置环境变量: `PYTHONPATH` `PYTHONUSERBASE` `PYTHONUSERBASE`

## Anaconda

官网下载安装

- `I agree` 后 `install for all users`
- 创建开始菜单 base环境 清除包缓存 **_均勾选_**
- finish时 launch 等两个选项 **_不要选择_**
- 配置环境变量: path 中添加
    - `G:\anaconda`
    - `G:\anaconda\Scripts`
    - `G:\anaconda\Library\bin`
    - `G:\anaconda\Library\mingw-w64\bin`
    - `G:\anaconda\Library\usr\bin`
- 验证: `conda --version` `conda env list`
- 配置:
    - `conda config --set show_channel_urls yes` 设置搜索时显示通道地址
    - 修改 `~/.condarc` 文件:
  ``` text
  envs_dirs:
    - G:\anaconda_pkg\envs
  pkgs_dirs:
    - G:\anaconda_pkg\pkgs
  show_channel_urls: true
  channels:
    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
    - defaults
  ```
- 验证: `conda info`
- 删除镜像源恢复默认: `conda config --remove-key channels`  
  <br/>

- 配置激活环境:
    - `conda init` 初始化
    - `conda info -e` 查看环境
    - `conda create -n py39 python=3.9` 创建环境
    - `conda activate py39` 激活环境
    - `conda remove --name ENV_NAME --all` 删除环境  
      <br/>

- 修改pip下载位置:
    - 不要用pip下载 用conda下载

- 安装pytorch: 官网自己选择需要的版本
    - 创建虚拟环境后安装
    - cpu版本:
        - `conda install pytorch torchvision torchaudio cpuonly -c pytorch`
    - 验证: `import torch` `x = torch.rand(5, 3)` `print(x)` 输出 tensor 为成功
    - gpu版本:
        - 先安装cuda和cudnn
        - `conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia` 查看对应cuda版本
          下载torch对应版本
          <br/>