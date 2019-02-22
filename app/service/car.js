const { Service } = require('egg');

class CarService extends Service {
    //获取
    async getCarList(currentPage, pageSize) {
        // const { exception } = this.app;
        const { model } = this.ctx;
        try {
          const skipPageNum = (currentPage - 1) * pageSize;
          const [ totalNum = 0, list ] = await Promise.all([
            this.getTotalNum(),
            model.Car.aggregate()
              .sort({ id: 1 })
              .skip(skipPageNum)
              .limit(pageSize)
              .exec(),
          ]);
          return { list, totalNum };
        } catch (err) {
        //   throw exception.helpers.createDBError(err, { currentPage, pageSize }, 'Get project list faild:');
        }
      }

      async getTotalNum() {
        const { model } = this.ctx;
        // const { exception } = this.app;
    
        try {
          const [ result ] = await model.Car.aggregate()
            .group({ _id: null, count: { $sum: 1 } })
            .exec();
          return result ? result.count : 0;
        } catch (err) {
        //   throw exception.helpers.createDBError(err, {}, 'Get projectList counts faild:');
        }
      }
      //新建
      async createCar({ id, manufacturers, carmodel }) {
        const { model } = this.ctx;
        // const { exception } = this.app;
    
        try {
          const checkCarManufacturers = await model.Car.findOne({ name: manufacturers });
          const checkCarModel = await model.Car.findOne({ name: carmodel });
          if (checkCarManufacturers && checkCarModel) {
            // throw exception.helpers.createParamError(`invalid projectName, projectName '${projectName}' is existed`);
            console.error(`invalid projectName, projectName '${manufacturers}' is existed`);
          }
          if (id || id === 0) {
            const checkCarId = await model.Car.findOne({ id });
            if (checkCarId) {
              // throw exception.helpers.createParamError(`invalid projectId, projectId '${id}' is existed`);
              console.error(`invalid projectId, projectId '${id}' is existed`);
            }
          } else {
            const CarList = await model.Car.find();
            for (let i = 0; i < 10000; i++) {
              if (CarList.find(item => item.id === i) === undefined) {
                id = i;
                break;
              }
            }
          }
          const car = new model.Car({
            manufacturers,
            id,
            carmodel,
          });
          await car.save();
          return car;
        } catch (error) {
          // throw exception.helpers.createDBError(error, { projectId, projectName, memberList });
          console.error(error, { id, manufacturers, carmodel })
        }
      }
      // 更新
      async update({ id, manufacturers, carModel }) {
        const { model } = this.ctx;
        // const { exception } = this.app;
    
        try {
          const car = await model.Car.findOneAndUpdate({ id: id }, {
            manufacturers,
            id,
            model: carModel
          });
          return car;
        } catch (error) {
          throw exception.helpers.createDBError(error, { carId, manufacturers, carModel });
        }
      }
}

module.exports = CarService;
