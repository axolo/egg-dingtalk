'use strict';

const cacheManager = require('cache-manager');
const DingtalkSdk = require('@axolo/node-dingtalk');

/**
 * **egg-dingtalk default config**
 *
 * Config client or clients as you like:
 *
 * 1. dingtalk corp app:
 *
 * ```js
 * {
 *   client: { appKey, appSecret, agentId }
 * }
 * ```
 *
 * 2. dingtalk isv suite with single app:
 *
 * ```js
 * { client: { suiteKey, suiteSecret, appId } }
 * ```
 *
 * 3. dingtalk isv suite with multiple apps:
 *
 * ```js
 * {
 *   client: {
 *     suiteKey,
 *     suiteSecret,
 *     apps: [ { appId }, { appId } ]
 *   }
 * }
 * ```
 *
 * 4. dingtalk isv suite with multiple apps per app:
 *
 * ```js
 * {
 *   clients:
 *     { app1: { suiteKey, suiteSecret, appId },
 *     { app2: { suiteKey, suiteSecret, appId },
 * }
 * ```
 *
 * @member Config#dingtalk
 * @property {Object} DingtalkSdk - @axolo/node-dingtalk
 * @property {Object} cacheManager - cache-manager
 * @property {Object} cache - cache-manager config
 * @property {Number} jsapiTicketTtl - jsapiTicket ttl
 * @property {String} appMode - `corp` or `isv`, default `corp`
 * @property {String} appType - `eapp` or `h5`, default `eapp`
 * @property {String} agentId - agentId of Dingtalk Application
 * @property {String} appKey - appKey of Dingtalk Application
 * @property {String} appSecret - appSecret of Dingtalk Application
 * @property {String} appId - appId of Dingtalk Application
 * @property {String} suiteId - suiteId of Dingtalk Application
 * @property {String} suiteKey - suiteKey of Dingtalk Application
 * @property {String} suiteSecret - suiteSecret of Dingtalk Application
 * @property {String} eventToken - eventToken of Dingtalk HTTP Event Callback
 * @property {String} eventAesKey - eventAesKey of Dingtalk HTTP Event Callback
 */
exports.dingtalk = {
  default: {
    DingtalkSdk,
    cacheManager,
    cache: { store: 'memory', prefix: 'dingtalk' },
    jsapiTicketTtl: 7200,
  },
  // client: {
  //   appMode: 'corp',
  //   appType: 'eapp',
  //   agentId: 'AGENT_ID',
  //   appKey: 'APP_KEY',
  //   appSecret: 'APP_SECRET',
  //   appId: 'APP_ID',
  //   suiteId: 'SUITE_ID', // required for Dingtalk Cloud Push
  //   suiteKey: 'SUITE_KEY',
  //   suiteSecret: 'SUITE_SECRET',
  //   eventToken: 'EVENT_TOKEN', // required for HTTP Event Callback
  //   eventAesKey: 'EVENT_AES_KEY', // required for HTTP Event Callback
  // },
};
