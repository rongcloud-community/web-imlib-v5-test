# 新 api test v5

## SDK 依赖

```html
  <script src="https://cdn.ronghub.com/RongIMLib-5.38.0.prod.js"></script>
```

## 使用说明

1. 使用 App Key 和 Token 登录

2. 点击相应 API 按钮输入相关参数配置即可

## 参数说明

### AppKey 获取

[可在融云开发者后台 - 应用管理](https://console.rongcloud.cn/agile/apps/list) 中创建一个应用，填入应用对应的 `appkey`

### Token 获取

[可在融云开发者后台 - 北极星 - IM - Server API - 获取 Token](https://console.rongcloud.cn/agile/formwork/imServerApi/index) 中，输入 `userId`，从提交后返回的数据中取 `token` 字段值

## 私有云用户特殊配置

私有云用户需要单独配置 `navi` 地址以连接到私有云的 IM 服务

> 私有云用户需联系商务获取私有云 sdk 的 cdn 文件