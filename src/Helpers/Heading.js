import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'


export const Heading = () => {

  const auth = useContext(AuthContext)
  return (
    <>
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-success" type="button" onClick = {()=>auth.logout()}>Log Out</button>
      </form>
    </nav>
    <header className = "headContainer">
      <h1 className = "head">Unsplash</h1>
      <p>Just random images from all over the world</p>
    </header>
    </>
  )
} //просто шапка сайта


