module.exports.set = function (app) {

    const routerModule = require('./router');
    const ENV = app.get('ENV');

    //------------
    // api-server
    //------------

    if(ENV.api){
        const router_api = routerModule.get()
            .api(ENV.api.routes)
            .run();

        var requestUrl = ENV.api.url || '';
        app.use(requestUrl, router_api);

        console.log(`* REST API : http://${ENV.api.host}:${ENV.api.port + requestUrl}`);
    }

    //------------
    // web-server
    //------------

    if(ENV.web){
        var requestUrl = ENV.web.url || '';
        console.log(`* WEB : http://${ENV.web.host}:${ENV.web.port + requestUrl}`);

        const router_web = routerModule.get()
            .web(ENV.web.routes, ENV.web.root)
            .run(ENV.web.notFound);
        app.use(requestUrl, router_web);
    }

    //------------
    // 404 Page
    //------------

    app.use('/', routerModule.get().run());

};
