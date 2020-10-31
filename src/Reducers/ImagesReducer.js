import { TOGGLE_LIKE, FETCH_IMAGES, LOAD_COUNT, LOGIN, LOGOUT } from '../Actions/types';
import { getUniqueListBy } from '../Helpers/arrFilter';

const initialState = {
  fetchedImages: [],
  load_count: 10,
  isAuthorized: false,
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthorized: true };
    case LOGOUT:
      return { ...state, isAuthorized: false };
    case FETCH_IMAGES:
      return {
        ...state, fetchedImages: getUniqueListBy((state.fetchedImages.concat(action.payload)), 'id'),
      };
    case LOAD_COUNT:
      return { ...state, load_count: state.load_count + 10 };
    case TOGGLE_LIKE:
      let newState = state.fetchedImages.map(image => {
        if(image.id === action.id) {
          if (image.liked_by_user === true) {
            image.liked_by_user = false;
            image.likes--;
          } else if (image.liked_by_user === false) {
            image.liked_by_user = true;
            image.likes++;
          } return image;
        } return image;
      });
      return { ...state, fetchedImages: newState };
    default: return state;
  }
};
