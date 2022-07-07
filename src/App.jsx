import { useState } from 'react'
import UsersList from './components/UsersList'
import './App.css'
import UserProvider from './store/provider/UserProvider'
function App() {


  return (
    <>
      <UserProvider>
        <UsersList></UsersList>
      </UserProvider>
    </>
  )
}

export default App
