// Тема: Рекурсия и стек

/*Рекурсия – это вызов функцией самой себя. 
Когда функция вызывает саму себя, это называется шагом рекурсии.
*/

let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  // Функция для подсчёта суммы зарплат

  function sumSalaries(department) {
    // Проверяем, является ли отдел массивом (случай 1)
    if (Array.isArray(department)) {
      // Если это массив, используем метод reduce для суммирования свойства 'salary' каждого объекта
      return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
      // Если отдел не является массивом (случай 2)
      let sum = 0;
      // Перебираем каждый подотдел, используя Object.values
      for (let subdep of Object.values(department)) {
        // Рекурсивно вызываем sumSalaries для каждого подотдела и добавляем результат к сумме
        sum += sumSalaries(subdep);
      }
      // Возвращаем общую сумму
      return sum;
    }
  }

  console.log(sumSalaries(company)); // 6700)