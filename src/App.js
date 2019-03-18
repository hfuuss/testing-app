import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import SuccessMessage from './SuccessMessage'

class App extends Component {
  state = { complete: false }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ complete: true })
  }

  
  render() {
    return (
      <div className="App">
      { this.state.complete ? 
          <SuccessMessage/> 
          : 
          <Login submit={this.handleSubmit} />
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
