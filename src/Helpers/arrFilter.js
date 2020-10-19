export const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}

//фильтрует массив и убирает повторяющиеся изображения по id, если они есть 

