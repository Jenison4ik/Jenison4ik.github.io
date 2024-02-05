window.addEventListener('DOMContentLoaded',function(){
    const rejection = [
        "Не интересует",
        "Нет, спасибо",
        "Может быть позже",
        "Я занята",
        "Пропущу",
        "Не сейчас",
        "Я подумаю",
        "Извините, сегодня не получится",
        "Мне не по душе",
        "У меня другие планы",
        "Спасибо, но нет",
        "Это не мое",
        "Я должна отказаться",
        "На этот раз я пропущу",
        "Я не доступна",
        "Я не в настроении",
        "Не для меня",
        "Я не заинтересована, спасибо",
        "Мне придется сказать нет",
        "Я не настроена",
        "Я плохо себя чувствую",
        "Я пропущу",
        "Я не настроена на это",
        "Нет, не интересует",
        "Мне не до этого сейчас"
      ];
    const secondImage = new Image();
    secondImage.src = 'kiss1.gif';
      let [counter, width, height,fs] = [0,120,40,16]
    const yes = this.document.querySelector('#yes');
    const no = this.document.querySelector('#no');
    const h1 = document.querySelector('h1');
    const block = document.querySelector('.bt-block')
    yes.addEventListener('click',function(){
        document.querySelector('#img').src = secondImage.src;
        h1.innerHTML = 'Я даже не сомневался 😘'
        block.remove();
        
    })
    no.addEventListener('click',function(){
        yes.style.height = height+'px';
        yes.style.width = width+'px';
        yes.style.fontSize = fs + 'px'
        width+=15;
        height+=15;
        fs+=5;


        no.innerHTML = rejection[counter];
        if(counter <= 24){
            counter++
        }
        else{
            counter = 0;
        }
        if(counter==1){
            h1.innerHTML+= '<br> Ты серьезно?'
        }
        if(counter==3){
            h1.innerHTML+= '<br> Ульяна, это не смешно'
        }
        if(counter==5){
            h1.innerHTML+= '<br> Я обижусь 😢'
        }
        if(counter==7){
            h1.innerHTML+= '<br> Уля это капец'
            document.documentElement.style.setProperty('--Pad','50px')
        }
        if(counter==9){
            h1.innerHTML+= '<br> Я тебе нравлюсь вообще?'
        }
        if(counter==11){
            h1.innerHTML+= '<br> У меня нет слов 💔'
        }
    })
})
