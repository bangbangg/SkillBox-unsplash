import {TOGGLE_LIKE,FETCH_IMAGES,LOAD_COUNT} from '../Actions/types'
import {getUniqueListBy} from "../Helpers/arrFilter"

const initialState = {
  fetchedImages: [],
  load_count: 10,
}



export const imagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_IMAGES: 
      return {...state, fetchedImages: getUniqueListBy((state.fetchedImages.concat( action.payload)),'id')}
    case LOAD_COUNT: 
      return {...state, load_count: state.load_count + 10}
    case TOGGLE_LIKE:
      let new_state = state.fetchedImages.map(image => {
        if(image.id === action.id) {
          if (image.liked_by_user === true) {
            image.liked_by_user = false;
            image.likes--;
          }else if (image.liked_by_user === false) {
            image.liked_by_user = true;
            image.likes++;
          } return image;
        } return image;
      });
      return {...state,fetchedImages: new_state }
    default: return state
  }
}
