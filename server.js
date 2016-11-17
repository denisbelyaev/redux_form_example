var koa = require('koa');
var app = koa();

app.use(function *(){
    console.log(this.method);
    //this.body = 'Hello World';

});

app.listen(4444);