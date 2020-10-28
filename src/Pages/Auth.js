import React from 'react';
import {unsplash,identifyUser} from "../apI/unsplash"


import {Loader} from '../components/Loader';
import {login} from '../Actions/actions';
import {useDispatch} from 'react-redux';

export const AuthPG = () => { //страница , на которую перекидывает после перехода на Ансплеш для авторизации.
//если пользователь прошел авторизацию - ему покажет лоадер и переведет на галерею (авторизация определяется по наличию токена в localstorage)

  const dispatch = useDispatch();
  identifyUser(unsplash);

  dispatch(login());

  return (
      <div className = "reg_pg">
      <Loader/>
      </div>
  )
}