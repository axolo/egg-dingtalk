'use strict';

const Dingtalk = require('@axolo/node-dingtalk');

const createDingtalk = config => {
  const dingtalk = new Dingtalk(config);
  return dingtalk;
};

module.exports = app => {
  app.addSingleton('dingtalk', createDingtalk);
};
