import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Home = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <div>
      Home page 
    </div>
  )
}

export default Home
