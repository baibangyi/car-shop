const Controller = require('egg').Controller;

class CommonController extends Controller {
    async healthCheck() {
        this.ctx.body = '白帮议啦啦啦';
    }
}

module.exports = CommonController;