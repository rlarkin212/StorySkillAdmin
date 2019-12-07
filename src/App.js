import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//components
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Stories from './components/stories/Stories';
import Users from './components/users/Users'

function App() {
  return (

    <Router>
      <Navigation></Navigation>
      <Switch>
        <Container className='app'>
          <Route path='/' exact component={Home}></Route>
          <Route path='/stories' component={Stories}></Route>
          <Route path='/users' component={Users}></Route>
        </Container>
      </Switch>

    </Router>

  )
}

export default App;
