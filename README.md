# ts-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目标
ant + vuex + router + less + node（后续）

### 步骤
1. 升级@vue/cli -> 创建工程 -> 设置选项
2. 加入elment
3. 加入less  npm install less less-loader --save-dev，可能会elementui报错，重新安装一下，2.13.1 -> 2.13.2
4. 加入 vuex-module-decorators  npm install -D vuex-module-decorators
### 问题记录
1：启动项目报错，node版本需要升级到8.10.0 ``` nvm i v8.10.0 ```
https://github.com/typescript-eslint/typescript-eslint/issues/1608
2：目录结构说明
https://www.cnblogs.com/gxp69/p/11302095.html
3：可借鉴项目
https://www.lizenghai.com/archives/63349.html
4:
Failed to load plugin '@typescript-eslint' declared in '.eslintrc.js » @vue/eslint-config-typescript/recommended » ./index.js': Cannot convert undefined or null to object
解决： nvm use 12.16.1