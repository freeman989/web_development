var x = 20;
var y = 20;
var size = 20;
var way = "start";
var i = 0;
var j = 0;
var r, g, b;
var count = 0;

document.onkeydown = function(event) { //Управление.
    console.log(event);
    if (event.code == 'KeyW' || event.code == 'ArrowUp') {
        way = "up";
    }
    if (event.code == 'KeyS' || event.code == 'ArrowDown') {
        way = "down";
    }
    if (event.code == 'KeyA' || event.code == 'ArrowLeft') {
        way = "left";
    }
    if (event.code == 'KeyD' || event.code == 'ArrowRight') {
        way = "right";
    }
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function clearRandom() {
    if (randomInteger(1, 4) == 1) way = "right";
    if (randomInteger(1, 4) == 2) way = "left";
    if (randomInteger(1, 4) == 3) way = "up";
    if (randomInteger(1, 4) == 4) way = "down";
}

function draw() { //Отрисовка.

    for (; i < 1; i++) { //Залить холст полностью любым цветом.
        var col = canvas.getContext('2d');
        col.fillStyle = /*"rgba(75,0,130,255)"*/ "Indigo";
        col.fillRect(0, 0, 1340, 600);
    }
    count++;
    if (count > 1000) {
        i = 0;
        count = 0; //Закрасить холст снова при достижении count > 1000;
    }

    if (randomInteger(1, 4) == 1) way = "right";
    if (randomInteger(1, 4) == 2) way = "left";
    if (randomInteger(1, 4) == 3) way = "up";
    if (randomInteger(1, 4) == 4) way = "down";

    //x = randomInteger(1, 1340);
    //y = randomInteger(1, 600);
    //size = randomInteger(1, 100);

    //r = randomInteger(0, 255);
    //g = randomInteger(0, 255);
    //b = randomInteger(0, 255);
    for (var steps = 0; steps < 2; steps++) {
        if (way == "right") x += size;
        if (way == "left") x -= size;
        if (way == "up") y -= size;
        if (way == "down") y += size;

        //var canvas = document.getElementById("canvas"); //Получить данные с холста.
        var cub = canvas.getContext("2d");

        if (x > 1340 - size) {
            cub.clearRect(x - (size + 1), y - 1, size + 2, size + 2); //Очистить следы фигуры при выходе из зоны холста.
            x = 0;
        }
        if (x < 0) {
            cub.clearRect(x + (size - 1), y - 1, size + 2, size + 2); //Очистить следы фигуры при выходе из зоны холста.
            x = 1340 - size;
        }
        if (y > 600 - size) {
            cub.clearRect(x - 1, y - (size + 1), size + 2, size + 2); //Очистить следы фигуры при выходе из зоны холста.
            y = 0;
        }
        if (y < 0) {
            cub.clearRect(x - 1, y + (size - 1), size + 2, size + 2); //Очистить следы фигуры при выходе из зоны холста.
            y = 600 - size;
        }

        if (way == "right") cub.clearRect(x - (size + 1), y - 1, size + 2, size + 2); //Стирание предыдущей фигуры.
        if (way == "left") cub.clearRect(x + (size - 1), y - 1, size + 2, size + 2); //Стирание предыдущей фигуры.
        if (way == "up") cub.clearRect(x - 1, y + (size - 1), size + 2, size + 2); //Стирание предыдущей фигуры.
        if (way == "down") cub.clearRect(x - 1, y - (size + 1), size + 2, size + 2); //Стирание предыдущей фигуры.

        cub.strokeStyle = "white" /*"rgb(16,155,252)"*/ ;


        cub.fillStyle = "rgb(255,36,0)"; //"rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
        cub.fillRect(x, y, size, size);
        cub.strokeRect(x, y, size, size);
    }
    /* var pix = cub.getImageData(670, 300, 1, 1); //Функция возвращает цвет пикселей в RGBA в указанной зоне.
     for (; j < 1; j++) {
         var text = canvas.getContext("2d");
         text.font = "22px Verdana"; //Задать свойство будущему тексту.
         text.fillStyle = "Yellow"; //Задать цвет будущему тексту.
         text.fillText(pix.data, 20, 300); //Вывести тест на экран установив координаты. Вывести на экран цвет пикселей с указанной зоны.
     }
     if (x > 670 /* && (y + size) / 2 > 300 && (x + size) / 2 <= 670 + (size * 2) && (y + size) / 2 <= 300 + (size * 2)*/
    /*) {
           j = 0;
       }
       text.fillRect(670, 300, 2, 2);
       text.fillRect(670 + (size * 2), 300 + (size * 2), 2, 2);*/

}

setInterval(draw, 100); //Таймер.

function RGBClrToHex(rgbClr) { //Функция преобразует RGB в шестнадцатиричное число цвета.
    var rgbClr = rgbClr.split(',');
    var r = rgbClr[0];
    var g = rgbClr[1];
    var b = rgbClr[2];
    return (r << 16 | g << 8 | b).toString(16).toUpperCase()
}