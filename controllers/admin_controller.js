const User = require("../models/user_model");
const faker = require('faker');
const uuidv4 = require("uuidv4");


module.exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.render('users', {
                users: users,
                pageTitle: 'All Products',
               
            });
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports.getAddUser = (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Add User',
        
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
module.exports.makeUsers = (req, res) => {
    let q = req.query.records || 5;
    let i;
    for (i = 0; i < q; i++) {
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
    // obj.id = faker.random.uuid();
    obj.id = uuidv4();
    obj.lastName = faker.name.lastName();
    obj.firstName = faker.name.firstName();
    obj.email = faker.internet.email();
    obj.password = faker.internet.password();
    obj.profilePic = faker.image.imageUrl();

    return obj;
};
