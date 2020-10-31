import React, {useCallback} from 'react';
import { authenticationUnsplash, unsplash } from '../../apI/unsplash';

export const UnregisterPage = () => {

    const onClick = useCallback(ev=>authenticationUnsplash(unsplash),[]);
    return (
    <div className = "auth_container">
    <div>
      <button className="bot8" onClick={onClick}>Авторизация</button>
    </div>
    <p className = "auth_p">Авторизируйтесь, чтоб получить доступ к галерее фотографий</p>
    <div className = "auth_image">
    </div>
    </div>
    )
}

