const Controller = require('egg').Controller;

class CarController extends Controller {
  async getCarList() {
    const { ctx, service } = this;
    ctx.validate({
      currentPage: { type: 'string', required: false },
      pageSize: { type: 'string', required: false },
    }, ctx.query);
    const { currentPage, pageSize } = ctx.query;
    const data = await service.car.getCarList(Number(currentPage), Number(pageSize));
    ctx.body = data;
  }
}

module.exports = CarController;
