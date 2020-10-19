import React, {useState,useContext} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Unsplash from 'unsplash-js';

import {likePhoto} from "../apI/unsplash"
import {likeImageAction} from '../Actions/actions'
import { AuthContext } from '../Context/AuthContext';



export const  SinglePhoto  = () => {

  const context = useContext(AuthContext)
  const unsplash= new Unsplash({
    accessKey: "ACCESS",
    secret: "SECRET",
  });
  unsplash.auth.setBearerToken(context.access_token)


  const [count, setCount] = useState(1)
  let Classes = "like-toggle basic"; 
  if  (count%2 ===0) {Classes = "like-toggle basic like-active"};
  
 
  const history = useHistory();
  function goBackHandle() {
    history.goBack();
  }

  let {id} = useParams()
  const images = useSelector(state=> state.fetchedImages )
  const singlePhoto  = images.find(image=>
    image.id === {id}.id) 

    

  return (
    <>
    <div>
      <div>
      <div className = "flex">
      <div className='like likes'>
        <button className={Classes}
          onClick = {ev=> {
            likeImageAction(unsplash,singlePhoto,singlePhoto.id)
            likePhoto(unsplash,singlePhoto)
            setCount(count+1);
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

