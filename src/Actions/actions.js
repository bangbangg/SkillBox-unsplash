import {
  TOGGLE_LIKE, FETCH_IMAGES, LOAD_COUNT, LOGIN, LOGOUT,
} from './types';

export function login() {
  return {
    type: LOGIN,
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
    const response = await fetch (`${apiRoot}/photos/random?client_id=TvkW3-_9qa8mcXsBj40bp_TxfmMvfgZcySvmOgyYI8U&count=10`);
    const json = await response.json();
    dispatch({ type: FETCH_IMAGES, payload:json });
    dispatch (imageLoad());
  };
}

// добавляет фотографии в галерею.