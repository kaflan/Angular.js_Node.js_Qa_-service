/**
 * Created by kaflan on 01.05.16.
 */
var faker = require('faker');
var express = require('express');
var app = express();
var path = require('path');
var qa = [];
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

var Question = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  date: faker.date.past(),
  header: faker.lorem.words(),
  description: faker.lorem.paragraph(),
  done: faker.random.boolean(),
  email: faker.internet.email(),
  comments: []
};
var Comments = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  date: faker.date.past(),
  description: faker.lorem.paragraph(),
  email: faker.internet.email(),
}

for (var i = 0; i < 5; i++) {
  Question.comments.push(Comments);
}
for (var i = 0; i < 20; i++) {
  qa.push(Question);
}
app.use(express.static(__dirname + ('/dist')));

app.get('/tasks', function(req, resp) {
  resp.json(qa);
});
app.post('/new', function(req, resp) {
  qa.push(req.body);
});
app.post('/answer/:id', fumction(req, resp) {
  var index = req.params.id;
  qa[index].comments.push(req.body);
  resp.send('OK');

});
app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});
