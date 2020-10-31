import { unsplash } from '../apI/unsplash';

export const loadState = () => {
  try {
    const data = JSON.parse(localStorage.getItem('user_info'));
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    unsplash.auth.setBearerToken(data.access_token);
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
  }
};
