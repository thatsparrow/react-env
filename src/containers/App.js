import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import Main from '../modules/main'
import Nav from '../modules/navbar'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div className="app-container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route
              render={function() {
                return <p>Not Found</p>
              }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App