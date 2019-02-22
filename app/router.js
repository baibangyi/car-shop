
module.exports = app => {
    const { router, controller } = app;
    router.get('/api/car/list', controller.car.getCarList);
    router.post('/api/car/create', controller.car.createCar);
    router.post('/api/car/update', controller.car.updateCar);
    router.get('/ping', controller.common.healthCheck);
    app.get('/api/article/list', app.controller.app.list);
    app.get('/api/article/:id', app.controller.app.detail);
    app.get('/*', app.controller.app.index);
};
