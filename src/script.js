var Todo = React.createClass({

  render: function(){

    return(

        <ul>
          <li className='todo'>{this.props.todo}</li>
        </ul>

      );

  }

});

React.render(<div>

              <h1>To Do List:</h1>
                <div className="form-inline">
                  <div className="form-group">
                    <input className="form-control" placeholder="Add Task" />
                    <button className='btn btn-default btn sm'>+</button>
                  </div>
                </div>

              <Todo todo="Letter to Enterprise" />
              <Todo todo="$ to Aaron Tuesday" />
              <Todo todo="Contact Cynthia - re: Turkey" />
              <Todo todo="Much Coding" />
            </div>, document.getElementById('todo'));
