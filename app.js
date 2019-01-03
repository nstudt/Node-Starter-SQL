const express = require("express");
const app = express();
const error_controller =  require('./controllers/error_controller');
const User = require('./models/user_model');
const csrf = require("csurf");
const flash = require("connect-flash");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const bodyParser = require("body-parser");
const path = require("path");
//using handlebars hbs with partials. Not npps express-handlebars
const hbs = require("hbs");
//declare your routes here
const index_routes = require("./routes/index_routes");
const admin_routes = require("./routes/admin_routes");
const auth_routes = require("./routes/auth_routes");
const csrfProtection = csrf();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DO NOT CHANGE THIS - REQUIRED TO RUN BOOTSTRAP LOCALLY
app.use(express.static(__dirname));

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
//usefull utility for handlbars. Call from onclick to javascript function in a view.
hbs.registerHelper("json", function (obj) {
    return new hbs.SafeString(JSON.stringify(obj));
});

//can use mongo, redis or a memory store for session data.
app.use(session({
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'keyboard cat'
}))

app.use(csrfProtection);
app.use(flash());
app.use((req, res, next) => {
    User.findById(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });

app.use('/admin', admin_routes);
app.use("/auth", auth_routes);
app.use("/", index_routes);
// app.use(error_controller.get404);

module.exports = app;