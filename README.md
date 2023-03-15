# React-admin Demo



- 使用的模版

- 下载模版源码

```
cp -rf Dockerfile.ci tsconfig.node.json README.md package.json vite.config.ts dist packages yarn.lock public docker index.html src nginx tsconfig.json ../hello-reactjs-with-map
```

- 安装包

```
yarn install
```




- 拉镜像

```
docker pull r2day/super-merchant-dash
```

- 停止并删除旧容器

```
docker stop super_merchant_dash && docker rm super_merchant_dash
```

- 运行

```
docker run -d --name super_merchant_dash  -p4566:8000 -e NODE_ENV=production r2day/super-merchant-dash
```


- 运行

```
docker logs -f super_merchant_dash
```

## 本地nginx代理

```
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To restart nginx after an upgrade:
  brew services restart nginx
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/nginx/bin/nginx -g daemon off;
```