// Тема: Промисы: обработка ошибок

let data = { key: 'value' };

const getData = (inputData) => {
  return Promise.resolve(inputData);
}

getData(data)
  .then((result) => {
    console.log(result);
    // return getMoreData(result);
    return result;
  })
  .then((moreData) => {
    // console.log(moreData);
    return getMoreData(moreData);
  })
  .catch((error) => {
    console.error("Что-то не так:", error);
  })
  .finally(() => {
    console.log("Закончить действие.");
  });

  