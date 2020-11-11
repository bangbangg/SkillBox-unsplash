import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../Actions/actions';

export const Heading = () => {
  const currentUser = useSelector((state) => state.userInfo)
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              dispatch(logout());
              localStorage.removeItem('state');
              localStorage.removeItem('user_info');
              localStorage.removeItem('myProfile')
            }}
          >Log Out</button>
        </form>
        <span className="navbar-text">
          {currentUser.name}
        </span>
      </nav>
      <header className="headContainer">
        <h1 className="head">Unsplash</h1>
        <p className="head">Just random images from all over the world</p>
      </header>
    </>
  );
};

