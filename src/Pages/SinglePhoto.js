import React, {useContext} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Unsplash from 'unsplash-js';

import {likePhoto} from "../apI/unsplash"
import {likeImageAction} from '../Actions/actions'
import { AuthContext } from '../Context/AuthContext';



export const  SinglePhoto  = () => {
  const dispatch = useDispatch();
  const context = useContext(AuthContext)
  const unsplash= new Unsplash({
    accessKey: "TvkW3-_9qa8mcXsBj40bp_TxfmMvfgZcySvmOgyYI8U",
    secret: "K_QCAQZHMe-hpspkRPy4QUPX1Ddf3R30DYoZI8A1J-k",
  });
  unsplash.auth.setBearerToken(context.access_token)
  
  
  const history = useHistory();
  function goBackHandle() {
    history.goBack();
  }

  let {id} = useParams()
  const images = useSelector(state=> state.fetchedImages )
  const singlePhoto  = images.find(image=>
    image.id === {id}.id) 

  let Classes = "like-toggle basic"; 
  if  (singlePhoto.liked_by_user) {Classes = "like-toggle basic like-active"};

    

  return (
    <>
    <div>
      <div>
      <div className = "flex">
      <div className='like likes'>
        <button className={Classes}
          onClick = {ev=> {
            dispatch(likeImageAction(unsplash,singlePhoto,singlePhoto.id))
            likePhoto(unsplash,singlePhoto)
            console.log(images)
          }}
        >♥</button>

          <span className="like_count" >
            {`${singlePhoto.likes}`} Likes
          </span>
      </div>
      
      <div >
        <a className = "link" href={`${singlePhoto.user.links.html}`}> 
          <img className = "ava" src = {singlePhoto.user.profile_image.small} alt= "user_photo" /> {singlePhoto.user.name} <br/>
        </a>
      </div> 
      <img className = "image" src={singlePhoto.urls.full}  alt = '' />
      <div className = "post_date" >{`${singlePhoto.updated_at}`.slice(0,10)} </div>
      </div>
      <button className="bot8 main_b " onClick = {goBackHandle}> ⇐ </button>
      </div>
      
    </div>
    </>
  )
}

