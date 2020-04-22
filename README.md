# egg-dingtalk

node-dingtalk plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-dingtalk --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dingtalk = {
  enable: true,
  package: '@axolo/egg-dingtalk',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.dingtalk = {};
```

see <https://github.com/axolo/node-dingtalk> for more help.
see [config/config.default.js](config/config.default.js) for more detail.

Config client or clients as you like:

### dingtalk corp app:

```js
{ client: { appKey, appSecret, agentId } }
```

### dingtalk isv suite with single app:

```js
{ client: { suiteKey, suiteSecret, appId } }
```

### dingtalk isv suite with multiple apps:

```js
{
  client: {
    suiteKey,
    suiteSecret,
    apps: [ { appId }, { appId } ],
  }
}
```

### dingtalk isv suite with multiple apps per app:

```js
{
  clients: {
    app1: { suiteKey, suiteSecret, appId },
    app2: { suiteKey, suiteSecret, appId },
  },
}
```

## Example

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

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
