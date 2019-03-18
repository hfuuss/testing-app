import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import SuccessMessage from './SuccessMessage'

class App extends Component {
  state = { 
    complete: false,
    firstName: ''
   }

  handleSubmit = e => {
    e.preventDefault()
    if (document.cookie.includes('JWT')){
      this.setState({ complete: true })
    }
    document.cookie = `firstName=${this.state.firstName}`
  }
  

  handleInput = e => {
    this.setState({firstName: e.currentTarget.value})
  }
  

  
  render() {
    return (
      <div className="App">
      { this.state.complete ? 
          <SuccessMessage/> 
          : 
          <Login submit={this.handleSubmit} input={this.handleInput} />
        } 
        <header className="App-header">
          <nav className='navbar' role='navigation'>
            <h1 className="App-title">Welcome to React</h1>
            <ul>
              <li className="nav-li"><a href="#">Batman</a></li>
              <li className="nav-li"><a href="#">Supermman</a></li>
              <li className="nav-li"><a href="#">Aquaman</a></li>
              <li className="nav-li"><a href="#">Wonder Woman</a></li>
            </ul>
          </nav>
        </header>
        
      </div>
    );
  }
}

export default App;
