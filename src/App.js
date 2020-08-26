import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Button, Header, Form, Segment } from 'semantic-ui-react';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Register/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    /**<Segment compact>
      <Header textalign='center'>Selamat Datang</Header>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Masukkan Email'></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Masukkan Password' type='password'></input>
        </Form.Field>
      </Form>
      <br></br>
  
      <Button color='purple'>Submit</Button>
    </Segment>**/
    
    /**<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>**/
  );
}

export default App;
