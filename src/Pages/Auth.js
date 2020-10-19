import React, {useContext}   from 'react';
import Unsplash from 'unsplash-js';

import { AuthContext } from '../Context/AuthContext';
import {Loader} from '../Helpers/Loader';

export const AuthPG = () => { //страница , на которую перекидывает после перехода на Ансплеш для авторизации.
//если пользователь прошел авторизацию - ему покажет лоадер и переведет на галерею (авторизация определяется по наличию токена в localstorage)
const auth = useContext(AuthContext);


const unsplash= new Unsplash({
    accessKey: "ACCESS",
    secret: "SECRET",
    callbackUrl: "http://localhost:3000/Home",
  });
  
  const code = window.location.search.split('code=')[1];
  console.log(code)

  if (code) {
    unsplash.auth.userAuthentication(code)
    
    .then (res=>
      res.json())
    .then (json=>{
      console.log(json.access_token);
      console.log(json.refresh_token);
      auth.login(json.access_token, json.refresh_token);
    })
  }

  return (
      <div className = "reg_pg">
      <Loader/>
      </div>
  )
}