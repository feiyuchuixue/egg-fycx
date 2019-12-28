// app.js or agent.js
// eslint-disable-next-line strict
class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  // 配置文件即将加载，这是最后动态修改配置的时机
  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    console.log('configWillLoad');
  }
  // 配置文件加载完成
  configDidLoad() {
    // Config, plugin files have been loaded.
    console.log('configDidLoad');
  }
  // 文件加载完成
  async didLoad() {
    // All files have loaded, start plugin here.
    console.log('didLoad.......................');
  }
  // 插件启动完毕
  async willReady() {
    // All plugins have started, can do some thing before app ready
    console.log('willReady');
  }
  // 应用启动完成
  async didReady() {
    const { model } = this.app;
    // 初始化数据库
    model.sync({ force: false });
    console.log('插件启动完毕');
    // Worker is ready, can do some things
    // don't need to block the app boot.
    console.log('didReady');
  }
  async serverDidReady() {
    // Server is listening.
    console.log('serverDidReady');
  }
  // 应用即将关闭
  async beforeClose() {
    // Do some thing before app close.
    console.log('configWillLoad');
  }
}
module.exports = AppBootHook;
