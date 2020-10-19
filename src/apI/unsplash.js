import Unsplash from 'unsplash-js';


// Инициализация
export const unsplash = new Unsplash({
    accessKey: "ACCESS",
    secret: "SECRET",
    callbackUrl: "http://localhost:3000/Home",
  });


export const authenticationUnsplash = (unsplash) => {
   
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);

    const code = window.location.search.split('code=')[1];

    if (!code) {
    window.location.assign(authenticationUrl); 
    }
  }
 //функция лайка, анлайка. передаем в нее unsplash и само изображение с проверкой liked_by_user
export const likePhoto = (unsplash, image) => {
    if (image.liked_by_user === false) {
        return (
            unsplash.photos.likePhoto(image.id)
              .then(res => res.text())
              .then(res => {
                  if (res !== "Rate Limit Exceeded" && !JSON.parse(res).errors) { JSON.parse(res); console.log((JSON.parse(res)).photo) }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
          )
    }
    else if (image.liked_by_user === true) {
        return (
            unsplash.photos.unlikePhoto(image.id)
              .then(res => res.text())
              .then(res => {
                  if (res !== "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
          )
    }

}