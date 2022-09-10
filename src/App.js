import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Context from './context'
import NotFound from './NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    option: 'Arts and Culture',
    name: '',
  }

  changeRegistrationStatus = status => {
    this.setState({isRegistered: status})
  }

  changeName = name => {
    this.setState({name})
  }

  changeOption = value => {
    this.setState({option: value})
  }

  render() {
    const {isRegistered, option, name} = this.state
    return (
      <Context.Provider
        value={{
          isRegistered,
          changeRegistrationStatus: this.changeRegistrationStatus,
          option,
          name,
          changeOption: this.changeOption,
          changeName: this.changeName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
