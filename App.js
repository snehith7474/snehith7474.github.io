import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      Username: '',
      Password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    let target= e.target;
    let value= target.type==="checkbox" ? target.checked:target.value;
    let name= target.name;

    this.setState({
      [name]:value
    });

  }
  handleSubmit(e){
    //e.preventDefault();

    alert('the Form was submitted ');
    //console.log(this.state);
  }


  render() {
  
  
  
  

    return (
      
      
      <div className="App__Form">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
          <form   className="FormFields" >
          <label className="FormField__Label" htmlfor="name">Username</label>
          <input type="text" name="Username" className="FormField__Input"
          placeholder="enter your Username" value={this.state.Username} onChange={this.handleChange}>
            </input>
          
          
          <label className="FormField__Label" htmlfor="name">Password</label>
          <input type="text" name="Password" className="FormField__Input"
          placeholder="enter your Password " value={this.state.Password} onChange={this.handleChange}>
            </input>
          
          <div className="FormField" >
            <button onClick={this.handleSubmit} className="FormField__Button mr 20" type="button"> Submit</button>
            
            </div>
            </form>
          
        </header></div>
        
      
      
      

      
    );
  }
  
}

export default App;