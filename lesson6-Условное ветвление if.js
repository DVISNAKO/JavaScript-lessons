// Тема: Условное ветвление: if, '?'

let color = prompt('Введите цвет', '');

if(color === 'red'){
    console.log('STOP');
    alert('STOP');
}
color = 'green';
(color === 'red') ? console.log('STOP') : console.log('GO');

color = 'blue'

if(color === 'red'){
    console.log("STOP");
} else if (color === 'yellow'){
    console.log("Wait");
} else if (color === 'green'){
    console.log("GO");
} else {
    console.log('Error, not work');
}