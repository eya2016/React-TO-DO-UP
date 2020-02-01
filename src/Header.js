import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todoList:[] };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    this.setState({
      todoList: this.state.todoList.concat({name : this.state.value , isToggleOn: true })
    });
    event.preventDefault();
    console.log(event.name);
  };

  handleDeleteItem = (index) => {

    this.setState({
      todoList: this.state.todoList.filter( (el,i)=>i!==index )
    })
  }

  handleToggleItem = (e,key) => {

    var stateCopy = Object.assign({}, this.state);
    if(stateCopy.todoList[key].isToggleOn) stateCopy.todoList[key].isToggleOn = false; else stateCopy.todoList[key].isToggleOn = true;
    this.setState(stateCopy); 

  }

  handleAffichToggleItem = (e,index) =>{
    if(this.state.todoList[index].isToggleOn)  return 'Complete'; else return 'Undo';
  }
 
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="jumbotron jumbotron-fluid col-md-12"></div>
            <div className="container-fluid">
              <h1 className="display-4">To-Do App!</h1>
              <br />
              <br />
              <br />
              <p className="lead"> Add new To-Do</p>
              <div>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Enter New Task"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  onClick={this.handleClick}>
                  Add
                </button>
                <br />
                <br />
                <div id="msg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid liste-task">
          <div className="row" id="row-task">
            {this.state.todoList.map((e, index) => (
              <div className="row" key={index}>
                  <span className= "item btn btn-outline-secondary"
                    onClick={()=>this.handleToggleItem(e,index)}>
                    { (e.isToggleOn) ? 'Complete' : 'Undo' }
                  </span>
                  <span
                    className="item btn btn-outline-secondary delete"
                    onClick={()=>this.handleDeleteItem(index)}>
                    Delete
                  </span>
                  <span className={ (e.isToggleOn) ? 'item' : 'item text-bare'}>
                  {e.name}
                  </span>
              </div>
            ))}
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
