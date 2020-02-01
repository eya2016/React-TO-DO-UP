import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
      
    }
  
    handleClick(event) {
      //alert("Le nom a été soumis : " + event);
      console.log(this.state.value)
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron jumbotron-fluid col-md-12"></div>
                    <div className="container-fluid">
                        <h1 className="display-4">To-Do App!</h1><br/><br/><br/>
                        <p className="lead"> Add new To-Do</p>
                        <div>   
                            <input className="form-control form-control-lg" type="text" placeholder="Enter New Task" value={this.state.value}  onChange={this.handleChange} />
                            <button className="btn btn-primary btn-lg"  type="submit" onSubmit={this.handleClick} >Add</button><br/><br/>
                            <div id="msg"></div>
                        </div>
                    </div> 
                </div>
                <div className="container-fluid liste-task">
                    <div  className="row" id='row-task'>
                    
                    <br/><br/>
                    </div>
                </div>  
        </div>
        );
    }
}


export default Header;