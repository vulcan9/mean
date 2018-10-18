module.exports.set = function (app) {

    const routerModule = require('./router');
    const ENV = app.get('ENV');

    //------------
    // web-server
    //------------

    const router_web = routerModule.get().web(
        ENV.server.root + '/routes/route.web',
        ENV.web.root
    ).run();
    app.use('/web', router_web);
    console.log('Web Page : ', '~/web/index.html');

    //------------
    // api-server
    //------------

    const router_api = routerModule.get().api(
        ENV.server.root + '/routes/route.api',
        ENV.api.root
    ).run();
    app.use('/api', router_api);

    //------------
    // 404 Page
    //------------

    app.use('/', routerModule.get().run());

};
