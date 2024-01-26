//Тема: Цепочка промисов

// Пример с колбэками (не рекомендуется):
fetchDataFromAPI((data1) => {
    processFirstData(data1, (data2) => {
      processSecondData(data2, (result) => {
        displayResult(result);
      });
    });
  });
  
  // Тот же пример с использованием промисов и цепочек:
  fetchDataFromAPI()
    .then(processFirstData)
    .then(processSecondData)
    .then(displayResult)
    .catch(handleError);

    //Цепочки промисов помогают сделать асинхронный 
    //код в JavaScript более легким для восприятия и обслуживания.


    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000); // (*)
      
      }).then(function(result) { // (**)
      
        console.log(result); // 1
        return result * 2;
        
      }).then(function(result) { // (***)
      
        console.log(result); // 2
        return result * 2;
      
      }).then(function(result) {
      
        console.log(result); // 4
        return result * 2;
      
      });
    
    //===