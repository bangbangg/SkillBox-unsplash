import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Gallery = ({ url, littlePhoto, userName, likes, userLink, imgDate, id }) => {

  const history = useHistory();

  const [hidden, setHidden] = useState('hide_info');

  function MouseIn() {
    setHidden('');
  }

  function MouseOver() {
    setHidden('hide_info');
  }

  function handleClick() {
    history.push(`/singlePhoto${id}`);
  }

  return (
    <span className="img_container" onMouseEnter={MouseIn} onMouseLeave={MouseOver}>
      <div className={hidden}>
        <span className="likes_count"> <span className="red">♥ </span>{likes}</span>
        <span className="little_date">{imgDate.slice(0, 10)}</span>
        <img className="little_ph" src={littlePhoto} alt="user_photo" />
        <a href={userLink}>
          <span className="list_user_name">{userName}</span>
        </a>
      </div>
      <LazyLoadImage
        className="hover img_styles"
        onClick={handleClick}
        src={url}
        alt="image"
      />
    </span>
  );
};
