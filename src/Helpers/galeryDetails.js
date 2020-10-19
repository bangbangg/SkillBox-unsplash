import React,{useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';


const Img  = styled.img`
  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color:white;
  width:100%;
  height:100%;
  object-fit:cover;
`;
 
export const UnsplashImages = ({url,little_photo,userName,likes,user_link,img_date,id}) => {

  const history = useHistory();
  
  const [hidden, setHidden] = useState("hide_info")

  function MouseIn() {
    setHidden("")
  } //при наведении на фото в галерее показывает информацию по лайкам, дате и.т.д

  function MouseOver() {
    setHidden("hide_info")
  } //когда убираем мышку с фото в галерее, скрывает информацию по лайкам, дате и.т.д
  
  function handleClick() {
    history.push(`/singlePhoto${id}`);
  } 

  
  return (
  <span className = "img_container" onMouseEnter = {MouseIn} onMouseLeave  = {MouseOver}>
    <div  className = {hidden}>
    <span className = "likes_count"> <span className = "red">♥  </span>{likes}</span>
    <span className = "little_date">{img_date.slice(0,10)}</span>
    <img className = "little_ph" src = {little_photo} alt= "user_photo" />
    <a className = "no_line " href={user_link}> 
      <span className = "list_user_name">{userName}</span>
    </a>
    </div>
      <Img className = "hover"  onClick = {handleClick} src={url}  alt = ''/>
  </span>
  )
}



