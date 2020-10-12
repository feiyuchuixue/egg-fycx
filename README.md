# egg-fycx

基于eggjs 搭建的基础框架

# TODO

- [x] mysql连接及增删改查
- [x] mongo连接及增删改查
- [x] redis及发布订阅
- [x] jwt认证(rsa非对称性加密)
- [x] forbidden_ip中间件(ip黑名单)
- [x] reqRepLog中间件(请求、返回日志)
- [x] agent.js 的应用（[agent、ipc](https://github.com/eggjs/egg/blob/master/docs/source/zh-cn/core/cluster-and-ipc.md)通道进行redis事件订阅）

## QuickStart

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
