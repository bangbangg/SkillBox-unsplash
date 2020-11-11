import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { likePhoto, unsplash } from '../../apI/unsplash';
import { likeImageAction } from '../../Actions/actions';

export const SinglePhoto = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  function goBackHandle() {
    history.goBack();
  }

  const { id } = useParams();
  const images = useSelector((state) => state.fetchedImages);
  const singlePhoto = images.find((image) => image.id === { id }.id);

  let Classes = "like-toggle";
  if (singlePhoto.liked_by_user) {
    Classes = "like-toggle like-active";
  }

  return (
    <>
      <div>
        <div className="flex">
          <div className="likes">
            <button className={Classes}
              onClick={() => {
                likePhoto(unsplash, singlePhoto);
                dispatch(likeImageAction(unsplash, singlePhoto, singlePhoto.id));
              }}
            >♥</button>

            <span className="like_count" >
              { `${singlePhoto.likes}` } Likes
            </span>
          </div>

          <div>
            <a className="link" href={`${singlePhoto.user.links.html}`}>
              <img className="ava" src={singlePhoto.user.profile_image.small} alt="user_photo" /> {singlePhoto.user.name} <br/>
            </a>
          </div>

          <LazyLoadImage
            className="image"
            src={singlePhoto.urls.full}
            effect="blur"
            alt=''
          />
          <div className="post_date"> { `${singlePhoto.updated_at}`.slice(0, 10) }
          </div>
        </div>

        <button className="bot8 main_b" onClick={goBackHandle}> Back </button>
      </div>
    </>
  );
};
