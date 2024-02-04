window.addEventListener('DOMContentLoaded',function(){
    const rejection = [
        "Not interested",
        "No, thank you",
        "Maybe later",
        "I'm busy",
        "I'll pass",
        "Not right now",
        "I'll think about it",
        "Sorry, not today",
        "I'm not in the mood",
        "I have other plans",
        "Thanks, but no thanks",
        "Not my thing",
        "I'll have to decline",
        "I'll pass this time",
        "I'm not available",
        "I'm not feeling up to it",
        "Not for me",
        "I'm not interested, thanks",
        "I'll have to say no",
        "I'm not feeling it",
        "I'm not feeling well",
        "I'll have to pass",
        "I'm not up for it",
        "Nope, not interested",
        "I'm not in the mood for that"
      ];
      let [counter, width, height,fs] = [0,120,40,16]
    const yes = this.document.querySelector('#yes');
    const no = this.document.querySelector('#no');
    const h1 = document.querySelector('h1');
    const block = document.querySelector('.bt-block')
    yes.addEventListener('click',function(){
        document.querySelector('#img').src = 'kiss1.gif';
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
        if(counter==2){
            h1.innerHTML+= '<br> Ты серьезно?'
        }
        if(counter==5){
            h1.innerHTML+= '<br> Ульяна, это не смешно'
        }
    })
})