#### 完整配置

```nginx
server {
    listen 80;
    server_name lemonshuo.cn www.lemonshuo.cn;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name lemonshuo.cn www.lemonshuo.cn;

    ssl_certificate     /etc/nginx/cert/scs1752030400543_lemonshuo.cn_server.crt;
    ssl_certificate_key /etc/nginx/cert/scs1752030400543_lemonshuo.cn_server.key;

    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    # 这个root可能要放到外面
    # root /var/www/vitepress/dist; 
    location / {
        root /var/www/vitepress/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # location /app2/ {
    #     proxy_pass http://127.0.0.1:7074/;
    #     proxy_set_header Host $host;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #     proxy_set_header X-Forwarded-Proto $scheme;
    # }
}
```

#### 默认配置

```nginx
server {
    listen 7073;
    listen [::]:7073;

    root /var/www/vitepress/dist;

    index index.html;

    server_name _;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```