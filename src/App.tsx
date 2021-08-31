import React from 'react'
import Countries from './components/Countries'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Countries} />
      </Switch>
    </Router>
  )
}

export default App
