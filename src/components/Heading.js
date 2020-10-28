import React from 'react'
import {useDispatch} from 'react-redux';

import {logout} from '../Actions/actions'


export const Heading = () => {

  const dispatch = useDispatch();
  return (
    <>
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <button className="btn btn-secondary " type="button" onClick = {()=>dispatch(logout())}>Log Out</button>
      </form>
    </nav>
    <header className = "headContainer">
      <h1 className = "head">Unsplash</h1>
      <p>Just random images from all over the world</p>
    </header>
    </>
  )
} //просто шапка сайта


