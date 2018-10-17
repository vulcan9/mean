module.exports.set = function (app) {

    (function () {
        const routerModule = require('./router');

        //------------
        // web-server
        //------------

        const router_web = routerModule.get().web(global.ROOT.server + '/routes/route.web').run();
        app.use('/web', router_web);

        //------------
        // api-server
        //------------

        const router_api = routerModule.get().api(global.ROOT.server + '/routes/route.api').run();
        app.use('/api', router_api);

        //------------
        // 404 Page
        //------------

        app.use('/', routerModule.get().run());

    })();

};
