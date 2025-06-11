---
outline: deep
---

# Golang

官网下载解压到某个自定义文件夹中后 配置环境变量等

## 配置

- 现在go的版本通过go mod管理依赖 所以不需要再配置GOPATH了  
  但是一些老的项目 或者go install的时候不配置会下载到系统盘 所以还是配置一下吧
- 配置 GOROOT 系统环境变量: 变量名: `GOROOT` 变量值: go的安装路径bin目录
- 配置GOPATH系统环境变量: 新建文件夹 此文件夹下新建 `bin pkg src` 三个文件夹 变量名: `GOPATH` 变量值:
  自定义文件夹路径
    - 这样的gopath是全局的 若用gopath的模式 需要在不同项目中 切换不同的gopath(不推荐)
- go env:
    - 设置gopath: `go env -w GOPATH=D:\Golang1.19\gopath`(修改后 GOMODCACHE也会跟着修改)
    - 开启go mod: `go env -w GO111MODULE=on`
    - 设置代理: `go env -w GOPROXY=https://goproxy.io,direct`
    - 设置构建缓存: `go env -w GOCACHE=D:\Golang1.19\gopath\go-build-cache`
        - 恢复自己设置的go env: 删除 `C:\Users\%UserName%\AppData\Roaming\go\env`  