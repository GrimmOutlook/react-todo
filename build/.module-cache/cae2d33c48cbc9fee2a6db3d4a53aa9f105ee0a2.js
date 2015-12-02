var Todo = React.createClass({displayName: "Todo",

  edit: function(){
    alert('edit todo');
  },

  remove: function(){
    alert('List item removed.');
  },

  render: function(){

    return(

        React.createElement("span", {onClick: this.edit}, 
          React.createElement("li", {className: "todo"}, this.props.children)
        )
      );

  }

});

React.render(React.createElement("div", null, 

              React.createElement("h1", null, "To Do List:"), 
                React.createElement("div", {className: "form-inline"}, 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {className: "form-control", placeholder: "Add Task"}), 
                    React.createElement("button", {className: "btn btn-default btn sm"}, "+")
                  )
                ), 
            React.createElement("ul", null, 
              React.createElement(Todo, null, "Letter to Enterprise"), 
              React.createElement(Todo, null, "$ to Aaron Tuesday"), 
              React.createElement(Todo, null, "Contact Cynthia - re: Turkey"), 
              React.createElement(Todo, null, "Much Coding")
            )
            ), document.getElementById('todo'));
