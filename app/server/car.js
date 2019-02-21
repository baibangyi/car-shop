const { Service } = require('egg');

class CarService extends Service {
    async getList(currentPage, pageSize) {
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
        const { exception } = this.app;
    
        try {
          const [ result ] = await model.Project.aggregate()
            .group({ _id: null, count: { $sum: 1 } })
            .exec();
          return result ? result.count : 0;
        } catch (err) {
        //   throw exception.helpers.createDBError(err, {}, 'Get projectList counts faild:');
        }
      }

    //   a 
}

module.exports = VersionService;
