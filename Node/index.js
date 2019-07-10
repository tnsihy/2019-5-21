var server = require('./Nodejs路由');
var router = require('./router');
server.start(router.route);