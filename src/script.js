var Todo = React.createClass({

  render: function(){

    return(
      <div>

        <h1>To Do List:</h1>
        <div className="form-inline">
            <div className="form-group">
              <input className="form-control" placeholder="Add Task" />
              <button className='btn btn-default btn sm'>+</button>
            </div>
          </div>

        <ul>
          <li className='todo'>Laundry</li>
          <li className='todo'>Vacuum</li>


        </ul>




      </div>
      );

  }

});

React.render(<Todo />, document.getElementById('todo'));
