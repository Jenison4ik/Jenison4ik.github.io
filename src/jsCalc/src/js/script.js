"use strict";
let cost = {
    type: {
        0: 1000,
        1: 2000,
        2: 3000
    },
    design: {
        0: 1000,
        1: 2000,
        2: 3000,
    },
    adaptive: {
        0: 1000,
        1: 1000,
        2: 3000,
    }
}
alert("Добро Пожаловать в колькулятор цены веб сайта!");

function chooseTypeType() {
    let costT;
    let choiceType = prompt(`Выберите тип сайта \n 0 - Визитка (1000руб) \n 1 - Корпоративный (2000руб) \n 2 - Интернет Магазин (3000руб)`,0)
    if (choiceType == 0) {
        costT = cost.type[0];
    } else if (choiceType == 1) {
        costT = cost.type[1];
    } else if (choiceType == 2) {
        costT = cost.type[2];
    } else {
        costT = 9999999;
    }
    return costT;
}

function chooseTypeDesign() {
    let costT;
    let choiceType = prompt(`Выберите дизайн сайта \n 0 - Шаблоныый (1000руб) \n 1 - Уникальный (2000руб) \n 2 - WOW - дизайн (3000руб)`,0)
    if (choiceType == 0) {
        costT = cost.design[0];
    } else if (choiceType == 1) {
        costT = cost.design[1];
    } else if (choiceType == 2) {
        costT = cost.design[2];
    } else {
        costT = 9999999;
    }
    return costT;
}

function chooseTypeAdaptive() {
    let costT;
    let choiceType = prompt(`Выберите адаптивность сайта \n 0 - ПК (1000руб) \n 1 - Мобилный (1000руб) \n 2 - ПК + Мобильный (3000руб)`,0)
    if (choiceType == 0) {
        costT = cost.adaptive[0];
    } else if (choiceType == 1) {
        costT = cost.adaptive[1];
    } else if (choiceType == 2) {
        costT = cost.adaptive[2];
    } else {
        costT = 9999999;
    }
    return costT;
}

function calc() {
    let all;
    all = chooseTypeType() + chooseTypeDesign() + chooseTypeAdaptive();
    if (all >= 9999999) {
        all = "Ошибка";
    }
    else{
        all = "Цена сайта: " + all;
    }
    return all;
}

/*alert(calc());*/
let Confim1 = confim(all);
    while (Confim1 == false) {
       chooseTypeType();
       chooseTypeDesign();
       chooseTypeAdaptive();
       calc();
    Confim1 = confim(all);
    }

