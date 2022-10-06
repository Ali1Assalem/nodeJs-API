const authRoute = require('./auth.route');
const profileRoute = require('./profile.route');
const blogRoute = require('./blog.route');

module.exports = (app)=>{
    app.get('/',function(req,res){
        res.send({
            'message':'our first endPoint'
        });
    });

    app.use('/auth',authRoute);
    app.use('/profile',profileRoute);
    app.use('/blogs',blogRoute);


}