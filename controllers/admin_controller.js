const User = require("../models/user_model");
const faker = require('faker');


module.exports.getUsers = (req, res, next) => {
    User.fetchAll(users => {
        res.render('admin/users', {
            users: users,
            pageTitle: 'Admin Users',
            path: '/admin/users'
        });
    });
};

module.exports.getAddUser = (req, res, next) => {
    res.render('admin/add-user', {
        pageTitle: 'Add User',
        path: '/admin/add-user'
    });
}

module.exports.postAddUser = (req, res, next) => {
    const user = new User(req.body);
    user.save()
    .then((result) => {
        console.log('result of postAddUser', result)
    })
    .catch((err) => {
        console.log('error during postAddUser ', err)
    });
}

//make sample Users
//TODO: implement Faker with records in params
module.exports.makeUsers = (req, res, next) => {
    let i;
    for (i = 0; i < 10; i++) {
        obj = new User();
        const user = makeFakeUser(obj);
        user.save()
            .then(result => {
                console.log('User created', result);
                res.render("index");
            })
            .catch((err) => {
                console.log('error creating user', err);
            });
    }
   
}

function makeFakeUser(obj) {
    obj.id = faker.random.uuid();
    obj.username = faker.internet.userName();
    obj.email = faker.internet.email();
    obj.password = faker.internet.password();
    obj.profilePic = faker.image.imageUrl();

    return obj
}
