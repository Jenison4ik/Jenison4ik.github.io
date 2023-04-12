const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    scrollLock: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: '2',
          slidesToScroll: '2',
        }
      }
    ]
  });
  const storButton = document.querySelector('#stor-bt');
  const stor = document.querySelector('#stor');
  function storfunc() {
    window.scroll({
        left:0,
        top:stor.offsetTop - 70,
        behavior:'smooth',
      });
}
  storButton.addEventListener('click', storfunc);

  const startButton = document.querySelector('#start');
startButton.addEventListener('click', storfunc);


const gallButton = document.querySelector('#gall-bt');
const gall = document.querySelector('#gall');
gallButton.addEventListener('click', () => {
  window.scroll({
    left:0,
    top:gall.offsetTop - 70,
    behavior:'smooth',
  })
});
const featButton = document.querySelector('#feat-bt');
const feat = document.querySelector('#feat');
featButton.addEventListener('click', () => {
  window.scroll({
    left:0,
    top:feat.offsetTop - 70,
    behavior:'smooth',
  })
});
const formButton = document.querySelector('#form-bt');
const form = document.querySelector('.form');
formButton.addEventListener('click', () => {
  window.scroll({
    left:0,
    top:form.offsetTop - 70,
    behavior:'smooth',
  })
});
const inputElement = document.querySelector('#phone')
const maskOptions = {
  mask: '+0(000)000-00-00'
}
IMask(inputElement, maskOptions)

const burgBt = document.getElementById('burg');
const NavMob = document.getElementById('nav');

function navToggle () {
  burgBt.classList.toggle("active");
  NavMob.classList.toggle("mb-active");
}
burgBt.addEventListener('click', () => {
    navToggle();
  })


document.addEventListener(('click'), function(event){
    if((event.target != NavMob) && !(event.target.classList.contains('bar')) && !(event.target.id == 'burg') &&!(event.target.id == 'nav-ul') &&(NavMob.classList.contains('mb-active'))){
      navToggle();
    }
})