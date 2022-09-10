import {Link} from 'react-router-dom'
import Context from './context'
import './App.css'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {isRegistered, name, option} = value

      return (
        <div style={{margin: '10px'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            style={{height: '50px'}}
          />
          {!isRegistered && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '10px',
                  textAlign: 'center',
                }}
              >
                <h1>Welcome to Meetup</h1>
                <p>Please Register for the topic</p>
                <Link to="/register">
                  <button
                    type="button"
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '7px',
                    }}
                  >
                    Register
                  </button>
                </Link>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="image"
              />
            </div>
          )}

          {isRegistered && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
              }}
            >
              <h1 style={{color: '#3b82f6'}}>Hello {name}</h1>
              <p style={{fontWeight: 'bold'}}>Welcome to {option}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="image"
              />
            </div>
          )}
        </div>
      )
    }}
  </Context.Consumer>
)

export default Home
