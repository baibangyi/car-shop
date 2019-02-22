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
    // const data = await service.car.getCarList(1, 20);
    // ctx.body = 'many car is go';
  }

  async createCar() {
    const { ctx, service } = this;
    console.log(ctx.request.body, 'sjkdhfksd');
    ctx.validate({
        id: { type: 'number', required: true },
        manufacturers: { type: 'string', required: true },
        carmodel: { type: 'string', required: true }
    });
    const data = await service.car.createCar(ctx.request.body);
    ctx.body = data;
  }

  async updateCar() {
    const { ctx, service } = this;
    ctx.validate({
      carId: { type: 'string', required: true },
      manufacturers: { type: 'string', required: true },
      model: { type: 'string', required: true },
    });
    const data = await service.car.updateCar(ctx.request.body);
    ctx.body = data;
  }
}

module.exports = CarController;
