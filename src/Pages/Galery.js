import React   from 'react';
import {Loader} from '../Helpers/Loader';
import {UnsplashImages} from '../Helpers/galeryDetails';
import {fetchImages} from '../Actions/actions'


import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch,useSelector} from 'react-redux';







const WrapperImage = styled.section`
  max-width:70rem;
  margin: 2rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
`;

export const ImagesList = () => {

  
  

  const dispatch = useDispatch();
  const images = useSelector(state=> state.fetchedImages )
  const counter = useSelector(state=>state.load_count)
 

 if (images.length === 0 ){
 dispatch(fetchImages())};
 




  return (
   <div>
      <InfiniteScroll
       dataLength = {counter}
       next = {()=>dispatch(fetchImages())}
       hasMore = {true}
       loader = { <Loader/>}
      >
      <div className = "point">
      <WrapperImage>
        {images.map(image=> ( 
          <UnsplashImages  
            url = {image.urls.regular} 
            key = {image.id + Math.random()} 
            id = {image.id} 
            little_photo = {image.user.profile_image.small}
            userName = {image.user.name}
            likes = {image.likes}
            user_link = {image.user.links.html}
            img_date = {image.updated_at}
          />
        ))}
      </WrapperImage>
      </div>
      </InfiniteScroll>
      <button className="bot8" onClick={()=>dispatch(fetchImages())}>next photos</button>
    </div>
  )
}


