# 黑神话悟空实时关键数据显示 MOD 手册

该手册基于 [VuePress](https://vuepress.vuejs.org/zh/) 制作。

若希望本地构建此项目，需本机安装 [Node.js](https://nodejs.org)。环境搭建完毕后，在根目录执行：

```bash
$ npm install
$ npm run dev
```

即可通过 `http://localhost:8080` 访问。

## 备注

### 关于 `NODE_OPTIONS`

Node 提供了 `NODE_OPTIONS` 环境变量，用于临时处理一些 Workaround，例如常见的将 OpenSSL 提供者设置为旧版本以保证 VuePress 正常工作。参考[这篇文章](https://blog.csdn.net/weixin_44175041/article/details/131506194)。

我们一般在 `package.json` 的脚本预定义里临时设置环境变量，例如：

``` json
  "scripts": {
    "dev": "export NODE_OPTIONS=--openssl-legacy-provider & vuepress dev docs",
  }
```

但是上述代码只能在 Linux 下工作，因为 Windows 下设置环境变量的命令是 `set` 而不是 `export`：

``` json
  "scripts": {
    "dev": "set NODE_OPTIONS=--openssl-legacy-provider & vuepress dev docs",
  }
```

为了解决跨平台问题，我们使用 `dotenv` 包，它提供了可以从 `.env` 文件中读取环境变量配置的功能，省去了做跨平台适配的麻烦，参见[这篇文章](https://blog.csdn.net/qq_51574759/article/details/131496233)。最终成果如下：

``` json
  "scripts": {
    "dev": "dotenv -e .env vuepress dev docs",
  }
```

其中 `.env` 指代根目录下的 `.env` 文件。在文件内部定义环境变量即可。

> 注：[cross-env](https://www.npmjs.com/package/cross-env) 是没办法处理 `NODE_OPTIONS` 环境变量的，经测试只能处理 `NODE_ENV` 环境变量。

### 导出 PDF

在 Windows 下导出 PDF 可能会遇到如下类似的报错：

``` powershell
Error: net::ERR_ADDRESS_INVALID at http://0.0.0.0:8080/
```

经查询 issue，问题已解决，详见[这里](https://github.com/SnowdogApps/vuepress-plugin-pdf-export/issues/9)。

### GitHub CI

由于生成的 PDF 文档是带中文字体的，而 GitHub CI 的 Docker 的 Ubuntu 镜像默认是没有中文字体的，所以使用 Ubuntu 打出来的 PDF 会缺失中文字体，在 PDF 中就是方格代替，文件大小也会小很多。因此使用 Windows 系统跑 CI。

