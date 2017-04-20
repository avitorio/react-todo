var React = ('react');
var ReactDOM = ('react-dom');
var TestUtils = ('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');


describe('Todo', () => {
	it('Should exist', () => {
		expect(Todo).toExist();
	});
});