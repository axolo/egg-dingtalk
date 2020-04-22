# egg-dingtalk

## 安装

```bash
npm i @axolo/egg-dingtalk --save
```

## 开启插件

```js
// config/plugin.js
exports.dingtalk = {
  enable: true,
  package: '@axolo/egg-dingtalk',
};
```


## 详细配置

```js
// {app_root}/config/config.default.js
exports.dingtalk = {};
```

请到 <https://github.com/axolo/node-dingtalk> 获取更多配置说明。
请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

您可按喜好配置客户端，包括但不限于以下形式：

### 钉钉企业应用:

```js
{ client: { appKey, appSecret, agentId } }
```

### 钉钉ISV套件单一应用:

```js
{ client: { suiteKey, suiteSecret, appId } }
```

### 钉钉ISV套件多个应用:

```js
{
  client: {
    suiteKey,
    suiteSecret,
    apps: [ { appId }, { appId } ],
  }
}
```

### 钉钉ISV多个应用同一套件:

```js
{
  clients: {
    app1: { suiteKey, suiteSecret, appId },
    app2: { suiteKey, suiteSecret, appId },
  },
}
```

## 例子

```js
const Controller = require('egg').Controller;

class DingtalkController extends Controller {
  async index() {
    const { app, ctx } = this;
    const { dingtalk } = app;
    const corpId = 'CORP_ID';
    const params = { id: 1 };
    const result = await dingtalk.execute('/department/get', { params }, { corpId });
    ctx.body = result;
  }
}

module.exports = DingtalkController;
```

## 提问交流

请到 <https://github.com/axolo/egg-dingtalk/issues> 异步交流。

## License

[MIT](LICENSE)
