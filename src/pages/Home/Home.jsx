import { Container } from '@mui/material'
import React from 'react'
import Features from '../../components/Features/Features'
import UserList from '../../components/UserList/UserList'

const Home = () => {
  return (
    <Container>
   
    {/*Filtering features*/}
    <Features/>
      {/*User List  features*/}
      <UserList/>
    </Container>

  )
}

export default Home