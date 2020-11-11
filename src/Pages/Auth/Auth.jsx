import React from 'react';
import { useDispatch } from 'react-redux';

import { unsplash, identifyUser } from '../../apI/unsplash';
import { Loader } from '../../components/Loader/Loader';
import { login } from '../../Actions/actions';

export const AuthPG = () => {
  identifyUser(unsplash);

  const dispatch = useDispatch();
  setTimeout(() => dispatch(login()), 3500 );

  return (
    <div className="reg_pg">
      <Loader />
    </div>
  );
};
