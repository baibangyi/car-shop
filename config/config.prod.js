/**
 * 生产环境配置
 *
 * 最终生效的配置为 prod + default（前者覆盖后者）
 */


module.exports = app => {
  const exports = {};

  exports.mongoose = {
    url: 'mongodb://localhost:27017/carShop',
    options: {
      connectTimeoutMS: 2000,
      socketTimeoutMS: 1000,
      maxPoolSize: 100,
      minPoolSize: 20,
    },
  };

  return exports;
};
