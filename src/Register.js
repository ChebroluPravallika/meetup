import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Context from './context'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    error: '',
  }

  render() {
    const {error} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {
            changeRegistrationStatus,
            changeOption,
            changeName,
            name,
          } = value

          const OnChangeOption = event => {
            changeOption(event.target.value)
            console.log(event.target.value)
          }

          const onChangeName = event => {
            changeName(event.target.value)
          }

          const changeStatus = () => {
            if (name === '') {
              this.setState({error: 'Please enter your name'})
            } else {
              const {history} = this.props
              history.replace('/')
              changeRegistrationStatus(true)
            }
          }

          return (
            <Link to="/register" style={{textDecoration: 'none'}}>
              <div
                style={{margin: '10px', display: 'flex', flexDirection: 'row'}}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  style={{height: '50px'}}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                  }}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                    style={{height: '290px'}}
                  />

                  <form
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      color: 'black',
                    }}
                  >
                    <h1> Let us Join</h1>
                    <label htmlFor="name">NAME</label>
                    <input
                      type="text"
                      id="name"
                      onChange={onChangeName}
                      style={{padding: '7px', width: '300px'}}
                    />
                    <br />
                    <label htmlFor="topics">TOPICS</label>
                    <select
                      onChange={OnChangeOption}
                      id="topics"
                      style={{padding: '7px'}}
                    >
                      <br />
                      {topicsList.map(each => (
                        <option id={each.id} value={each.id}>
                          {each.displayText}
                        </option>
                      ))}
                    </select>{' '}
                    <br />
                    <Link to="/">
                      <button
                        type="submit"
                        onClick={changeStatus}
                        style={{
                          backgroundColor: ' #3b82f6',
                          padding: '7px',
                          color: 'white',
                          border: 'none',
                          borderRadius: '7px',
                        }}
                      >
                        Register Now
                      </button>
                    </Link>
                    <p>{error}</p>
                  </form>
                </div>
              </div>
            </Link>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Register)
