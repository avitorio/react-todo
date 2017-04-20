var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'

				}, {
					id: 2,
					text: 'Clean the yeard'

				},{
					id: 3,
					text: 'Surfing'

				}, {
					id: 4,
					text: 'Coding'

				},


			]
		}
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;