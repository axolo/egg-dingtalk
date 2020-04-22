'use strict';

const createDingtalk = config => {
  const { DingtalkSdk } = config;
  const dingtalk = new DingtalkSdk(config);
  return dingtalk;
};

module.exports = app => {
  app.addSingleton('dingtalk', createDingtalk);
};
