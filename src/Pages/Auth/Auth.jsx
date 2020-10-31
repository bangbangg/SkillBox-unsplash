import React from 'react';
import { useDispatch } from 'react-redux';

import { unsplash, identifyUser } from '../../apI/unsplash';
import { Loader } from '../../components/Loader/Loader';
import { login } from '../../Actions/actions';

export const AuthPG = () => { /*страница , на которую перекидывает после перехода на Ансплеш для авторизации.
  если пользователь прошел авторизацию - ему покажет лоадер и переведет на галерею (авторизация определяется 
  по наличию токена в localstorage) */
  identifyUser(unsplash);

  const dispatch = useDispatch();
  dispatch(login());

  return (
    <div className="reg_pg">
      <Loader />
    </div>
  );
};