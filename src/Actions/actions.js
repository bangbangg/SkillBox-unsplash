import {
  TOGGLE_LIKE, FETCH_IMAGES, LOAD_COUNT, LOGIN, LOGOUT, USERINFO
} from './types';

export function login() {
  return {
    type: LOGIN,
  };
}

export function currentUser(info) {
  return {
    type: USERINFO,
    info: info,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function likeImageAction(unsplash, image, id) {
  return {
    type: TOGGLE_LIKE,
    id: id,
    unsplash: unsplash,
    image: image,
  };
} /* передает в редьюсер данные, на основании которых ищется необходимое изображение,
и меняется  liked_by_user и кол-во
лайков , после чего изображение возвращается в массив изображений с внесенными изменениями */

export function imageLoad() {
  return {
    type: LOAD_COUNT,
    payload:10,
  };
}
// вспомогательный экшон для react-inifinity-scroll

export function fetchImages() {
  return async dispatch => {
    const apiRoot = 'https://api.unsplash.com';
    const response = await fetch (`${apiRoot}/photos/random?client_id=(_____!ACCESS_KEY_HERE!____)&count=10`);
    const json = await response.json();
    dispatch({ type: FETCH_IMAGES, payload:json });
    dispatch (imageLoad());
  };
}

export function getUserInfo(unsplash) {
  return async dispatch => {
    return await unsplash.currentUser.profile()
    .then(res => res.json())
    .then(json => {
    dispatch ({type: USERINFO, payload: json})
    },
    )
  };
}
