let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const statusBar = document.getElementById('statusBar');
const statusText = document.getElementById('statusText');

const minValueInput = document.getElementById('minValue');
const maxValueInput = document.getElementById('maxValue');



function rndText () {
    const phraseRandom = Math.round( Math.random() * 3);
    let my_text = '';
    switch (phraseRandom) {
        case 0:
            my_text = 'Да это легко! Ты загадал '; 
            break;
        case 1:
            my_text = 'Наверное, это число ';
            break;
        case 2:
            my_text = 'Вы загадали число ';
            break;
        default:
            my_text = 'Дай угадаю, это ';
    }
    return my_text;
}

function get_text (num) {
    let tmp = num;
    num = Math.abs(num);
    let res_sot = '';
    if (tmp < 0){
        res_sot += 'Минус ';
    }
    let s = Math.floor(num / 100);
    num = num - s * 100;
    let d = Math.floor(num / 10);
    num = num - d * 10;
    
    switch (s) {
        case 1:
            res_sot += 'Сто ';
            break;
        case 2:
            res_sot += 'Двести ';
            break;
        case 3:
            res_sot += 'Триста ';
            break;
        case 4:
            res_sot += 'Четыреста ';
            break;
        case 5:
            res_sot += 'Пятьсот ';
            break;
        case 6:
            res_sot += 'Шестьсот ';
            break;
        case 7:
            res_sot += 'Семьсот ';
            break;
        case 8:
            res_sot += 'Восемьсот ';
            break;
        case 9:
            res_sot += 'Девятьсот ';
            break;
    }

    if (d === 1){
        switch (num) {
            case 1:
                res_sot += 'Одинадцать';
                break;
            case 2:
                res_sot += 'Двенадцать';
                break;
            case 3:
                res_sot += 'Тринадцать';
                break;
            case 4:
                res_sot += 'Четырнадцать';
                break;
            case 5:
                res_sot += 'Пятнадцать';
                break;
            case 6:
                res_sot += 'Шестнадцать';
                break;
            case 7:
                res_sot += 'Семнадцать';
                break;
            case 8:
                res_sot += 'Восемнадцать';
                break;
            case 9:
                res_sot += 'Девятнадцать';
                break;  
        }       

    }
    else{
        switch (d) {
            case 2:
                res_sot += 'Двадцать ';
                break;
            case 3:
                res_sot += 'Тридцать ';
                break;
            case 4:
                res_sot += 'Сорок ';
                break;
            case 5:
                res_sot += 'Пятьдесят ';
                break;
            case 6:
                res_sot += 'Шестьдесят ';
                break;
            case 7:
                res_sot += 'Семьдесят ';
                break;
            case 8:
                res_sot += 'Восемьдесят ';
                break;
            case 9:
                res_sot += 'Девяносто ';
                break;  
            }
        
            
            switch (num) {
                case 1:
                    res_sot += 'Один';
                    break;
                case 2:
                    res_sot += 'Два';
                    break;
                case 3:
                    res_sot += 'Три';
                    break;
                case 4:
                    res_sot += 'Четыре';
                    break;
                case 5:
                    res_sot += 'Пять';
                    break;
                case 6:
                    res_sot += 'Шесть';
                    break;
                case 7:
                    res_sot += 'Семь';
                    break;
                case 8:
                    res_sot += 'Восемь';
                    break;
                case 9:
                    res_sot += 'Девять';
                    break;  
            }
    }
    res_sot = res_sot.trim();

    if (res_sot.length < 20) {
        return res_sot;
    }
    else{
        return tmp;
    }
    

}

function init(){
    $('#enterDiv').collapse('show');


}



document.getElementById('btnNumber').addEventListener('click', function () {
    $('#enterDiv').collapse('hide');

    minValue = parseInt(minValueInput.value);
    maxValue = parseInt(maxValueInput.value);

    if (minValue > maxValue) {
        let num = minValue;
        minValue = maxValue;
        maxValue = num;
    }

    minValue = (minValue < -999) ?  -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    
    statusText.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    $('#statusBar').collapse('show');
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = rndText() + `${answerNumber }?`;
 })


document.getElementById('btnCloseStatus').addEventListener('click', function () {

   // if (input type = minValue & input type = maxValue)
    $('#statusBar').collapse('hide');
})

document.getElementById('btnRetry').addEventListener('click', function () {

    init();
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = rndText() +  `${get_text(answerNumber)}?`;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = rndText() + `${get_text(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        const phraseRandom = Math.round( Math.random() * 2);
    let messSuccess = '';
    switch (phraseRandom) {
        case 0:
            messSuccess = 'Победа!\n\u{1F929}'; 
            break;
        case 1:
            messSuccess = 'Я выйграл \n\u{1F60F}';
            break;
        default:
            messSuccess = `Я всегда угадываю\n\u{1F60E}`;
    }

        answerField.innerText = messSuccess;
        gameRun = false;
    }
})