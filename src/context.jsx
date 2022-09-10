import React from 'react'

const Context = React.createContext({
  isRegistered: false,
  changeRegistrationStatus: () => {},
  option: 'Arts and Culture',
  name: '',
  changeOption: () => {},
  changeName: () => {},
})

export default Context
