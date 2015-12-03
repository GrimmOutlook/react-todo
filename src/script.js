var Todo = React.createClass({

  edit: function(){
    alert('edit todo');
  },

  remove: function(){
    alert('List item removed.');
  },

  render: function(){

    return(

      <li className="todo">
        <span onClick={this.edit}>
          {this.props.children}
        </span>

        <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash" />
      </li>

      );

  }

});


React.render(<div>

              <h1>To Do List:</h1>
                <div className="form-inline">
                  <div className="form-group">
                    <input className="form-control" placeholder="Add Task" />
                    <button className='btn btn-default btn-sm'>+</button>
                  </div>
                </div>
            <ul>
              <Todo>Letter to Enterprise</Todo>
              <Todo>$ to Aaron Tuesday</Todo>
              <Todo>Contact Cynthia - re: Turkey</Todo>
              <Todo>Much Coding</Todo>
            </ul>
            </div>, document.getElementById('todo'));


