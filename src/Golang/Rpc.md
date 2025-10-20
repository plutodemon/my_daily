---
outline: deep
---

# RPC

- 安装 教程有下面几个可以参考  
    - [RPC教程1](https://www.liwenzhou.com/posts/Go/gRPC/) 
    - [RPC教程2](https://chai2010.cn/advanced-go-programming-book/ch4-rpc/ch4-02-pb-intro.html)
    - 安装官方的 [protoc](https://github.com/google/protobuf/releases)
    - 获取grpc依赖 `go get google.golang.org/grpc@latest`
    - 然后安装 go 的插件 `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`
    - 然后安装 grpc 的插件 `go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest`
- 检查
    - `protoc --version` `protoc-gen-go --version` `protoc-gen-go-grpc --version`
    - 如果提示不是可执行文件 可以在环境变量中添加GOPATH的bin目录
- 编写proto文件
    - 编写proto文件 生成go文件  
      `protoc --go_out=. --go_opt=paths=source_relative \ --go-grpc_out=. --go-grpc_opt=paths=source_relative \ helloworld.proto`
    - 生成的文件中有一个pb.go文件 这个文件是生成的go文件