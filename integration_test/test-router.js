var express = require('express'),
    request = require('supertest'),
    assert = require("assert");

var app = express();

var app = require('../app.js');

describe('GET /', function() {
    it('respond with text', function(done) {
        request(app)
            .get('/abc')
            .expect(200, done);
    })
})

