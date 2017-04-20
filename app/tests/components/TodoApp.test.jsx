var React = ('react');
var ReactDOM = ('react-dom');
var TestUtils = ('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');


describe('TodoApp', () => {
	it('Should exist', () => {
		expect(TodoApp).toExist();
	});
});