import Unsplash from 'unsplash-js';

// Инициализация
export const unsplash = new Unsplash({
  accessKey:"TvkW3-_9qa8mcXsBj40bp_TxfmMvfgZcySvmOgyYI8U",
  secret:"K_QCAQZHMe-hpspkRPy4QUPX1Ddf3R30DYoZI8A1J-k",
  callbackUrl:"http://localhost:3000/Home",
});

export const authenticationUnsplash = (unsplash) => {
  const authenticationUrl=unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
  ]);

  const code = window.location.search.split('code=')[1];

  if (!code) {
    window.location.assign(authenticationUrl); 
  }
}

export const identifyUser = (unsplash) => {

  const code = window.location.search.split('code=')[1];

  if (code) {
    unsplash.auth.userAuthentication(code)
    .then (res =>
      res.json())
    .then (json => {
      console.log(json.access_token);
      console.log(json.refresh_token);
      localStorage.setItem('user_info',JSON.stringify ({
        access_token : json.access_token , refresh_token :json.refresh_token
      }))
      unsplash.auth.setBearerToken(json.access_token)
      })
    };
  };

 //функция лайка, анлайка. передаем в нее unsplash и само изображение с проверкой liked_by_user
export const likePhoto = (unsplash, image) => {
  if (image.liked_by_user===false) {
    return (
      unsplash.photos.likePhoto(image.id)
        .then(res => res.text())
        .then(res => {
          if (res!=="Rate Limit Exceeded" && !JSON.parse(res).errors) {
            JSON.parse(res); console.log((JSON.parse(res)).photo);
          } else {
            console.error("Лимит запросов исчерпан!");
          }
        })
    )
  }

  else if (image.liked_by_user===true) {
    return (
      unsplash.photos.unlikePhoto(image.id)
        .then(res => res.text())
        .then(res => {
          if (res!=="Rate Limit Exceeded" && !JSON.parse(res).errors) {
            return JSON.parse(res);
          } else {
            console.error("Лимит запросов исчерпан!");
          }
        })
    );
  };
};