---
outline: deep
---

# VsCode 的一些配置和插件

## 推荐插件

- 图标: Material Icon Theme
- 主题: JetBrains Darcula Theme
- 代码格式化: Clang-Format, Prettier - Code formatter
- 代码运行: Code Runner
- 代码拼写检查: Code Spell Checker
- Go 语言支持: Go
- Protobuf 支持: Protobuf VSC
- Excel 文件查看: Excel Viewer
- md 文件增强: markdownlint

## VsCode 配置:

```
{
    //  安全与工作区
    "security.workspace.trust.untrustedFiles": "open", // 不可信文件直接打开
    "extensions.ignoreRecommendations": true, // 不显示扩展推荐
    "workbench.startupEditor": "none", // 不显示欢迎页
    "window.restoreFullscreen": true, // 启动恢复全屏
    "extensions.autoUpdate": false, // 关闭扩展自动更新
    "explorer.confirmDragAndDrop": false, // 拖动确认

    //  工作台外观 & 主题
    "workbench.colorTheme": "JetBrains Darcula Theme", // 颜色主题
    "workbench.iconTheme": "material-icon-theme", // 图标主题
    "workbench.preferredDarkColorTheme": "Visual Studio Dark", // 黑暗主题偏好
    "workbench.tree.indent": 20, // 文件树缩进

    //  文件与项目排除
    "files.exclude": {
        ".idea": true, // 忽略 JetBrains IDE 目录
        ".vscode": true // 忽略 VSCode 配置目录
    },
    "files.autoSave": "afterDelay", // 自动保存（延迟方式）
    "files.associations": {
        // 文件关联
        "*.md": "markdown",
        "*.proto": "proto"
    },

    //  编辑器行为
    "editor.guides.bracketPairs": true,
    "editor.formatOnSave": true, // 保存时自动格式化
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.minimap.enabled": false,
    "editor.minimap.showSlider": "always",
    "editor.minimap.size": "fit",
    "editor.defaultFormatter": "xaver.clang-format", // 全局默认使用 clang-format

    //  各语言特殊 formatter
    "[go]": {
        "editor.defaultFormatter": "golang.go"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode" // JSON 使用 Prettier（能保留空行）
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode" // JSONC 使用 Prettier（推荐）
    },
    "[yaml]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode" // YAML 使用 Prettier
    },
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode" // Markdown 使用 Prettier（markdownlint 是 lint，不冲突）
    },

    //  Clang-Format 设置
    "clang-format.executable": "F:/vscode/format/clang-format.exe",
    "clang-format.style": "file",

    //  Prettier 配置
    "prettier.useTabs": false,
    "prettier.tabWidth": 4,
    "prettier.printWidth": 120,
    "prettier.singleQuote": false,
    "prettier.trailingComma": "none",
    "prettier.bracketSpacing": true,
    "prettier.arrowParens": "avoid",
    "prettier.proseWrap": "preserve", // 不强制换行
    "prettier.endOfLine": "lf",
    "prettier.useEditorConfig": false,

    //  补全提示相关设置
    "javascript.inlayHints.parameterNames.enabled": "all",
    "typescript.inlayHints.parameterNames.enabled": "all",

    //  Code Runner 运行配置
    "code-runner.executorMap": {
        "javascript": "node",
        "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "python": "python -u",
        "go": "go run",
        "lua": "lua",
        "powershell": "powershell -ExecutionPolicy ByPass -File",
        "bat": "cmd /c",
        "shellscript": "bash",
        "csharp": "scriptcs",
        "typescript": "ts-node",
        "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
        "v": "v run",
        "proto": "F:/vscode/format/run_build.exe"
    },
    "code-runner.runInTerminal": true,

    //  拼写检查
    "cSpell.userWords": ["CSGM", "SCGM", "fyne", "glfw", "goroutines", "kbinani", "llog", "nfnt"],

    //  Git
    "git.confirmSync": false,
    "git.enableSmartCommit": true,

    //  Copilot
    "github.copilot.enable": {
        "*": true
    },
    "github.copilot.nextEditSuggestions.enabled": true,

    //  Go 工具
    "go.toolsManagement.autoUpdate": false,

    // Protobuf VSC 插件设置（完全关闭 diagnostics）
    "protobuf.diagnostics.enabled": false, // 关闭所有 diagnostics
    "protobuf.formatOnSave": false,

    // Excel Viewer 设置
    "excel-viewer.showInfo": false // 关闭信息显示
}

```

## Clang-Format 配置

- 下载llvm(只用其中的clang-format.exe) 或直接下载 clang-format.exe
- vscode下载插件Clang-Format
- 修改用户空间的setting.json
    - "editor.defaultFormatter": "xaver.clang-format",
    - "clang-format.executable": "exe所在路径",
    - "clang-format.style": "file",
- 修改工作空间的.vscode/settings.json
    - "clang-format.style": "file"
-
-

### proto 格式化

- 修改"[proto3]"配置:
  ```
  "[proto3]": {
      "editor.defaultFormatter": "xaver.clang-format",
      "editor.formatOnSave": true
  }
  ```
- 在项目根目录下创建_clang-format文件: 最后一行需保留一行空行
  ```yaml
  ---
  Language: Proto
  # 使用 Google 官方基础风格
  BasedOnStyle: Google
  # 缩进宽度为 4 空格
  IndentWidth: 4
  # 制表符显示宽度（配合 UseTab: Never，只用于对齐逻辑）
  TabWidth: 4
  # 禁止使用 Tab，全部换成空格
  UseTab: Never
  # 单行最大长度限制
  ColumnLimit: 2048
  # 不自动重排（折行）注释内容
  ReflowComments: false
  # 行末注释放置时前面留 1 个空格
  SpacesBeforeTrailingComments: 1
  # 花括号紧贴前一行，不换行（如：`if () {`）
  BreakBeforeBraces: Attach
  # case 标签不要写成 `case X: stmt;` 的单行形式
  AllowShortCaseLabelsOnASingleLine: false
  # 禁止 `{ ... }` 的短代码块压成单行
  AllowShortBlocksOnASingleLine: Never
  # 模板角括号 `< >` 内不加空格
  SpacesInAngles: Never
  # 连续变量声明对齐
  AlignConsecutiveDeclarations: true
  # 连续赋值语句对齐
  AlignConsecutiveAssignments: true
  # 行尾注释对齐
  AlignTrailingComments: true
  ...
  ```