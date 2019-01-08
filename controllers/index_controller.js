/* jslint node: true */
'use strict';

const faker = require('faker');
const fs = require('fs');

module.exports.homePage = (req, res) => {
  console.log('homePage route');
  res.render('index', {
    userid: false,
  });
};

module.exports.makeFaker = (req, res) => {
  console.log('homePage route');
  let str = '';
  for (var i = 0; i < req.params.records; i++)
    str +=
      faker.name.firstName() +
      '\t' +
      faker.name.lastName() +
      '\t' +
      faker.internet.email() +
      '\t' +
      faker.name.jobTitle() +
      '\r\n';
  fs.writeFile('d:/test.txt', str, function(err) {
    if (err) return console.log(err);
    else console.log('file saved');
  });
  res.render('index', {
    userid: false,
  });
};
