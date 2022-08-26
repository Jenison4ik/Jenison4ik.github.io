window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

$(document).ready(function () {
    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        });
    };
    let titleBt = document.querySelector('.logo');
    let title = document.querySelector('.main');
    titleBt.addEventListener('click', () => {
        scrollTo(title);
        console.log('click2');
    });

    let aboutBt = document.querySelector('.aboutBt');
    let aboutBt2 = document.querySelector('.aboutBt2');
    let aboutBt3 = document.querySelector('.aboutBt3');
    let about = document.querySelector('#about');
    aboutBt2.addEventListener('click', () => {
        scrollTo(about);
        console.log('click1');
    });
    aboutBt.addEventListener('click', () => {
        scrollTo(about);
        console.log('click1');
    });
    aboutBt3.addEventListener('click', () => {
        scrollTo(about);
        console.log('click1');
    });

    let skillsBt = document.querySelector('.skillsBt');
    let skillsBt2 = document.querySelector('.skillsBt2');
    let skills = document.querySelector('#skills');

    skillsBt.addEventListener('click', () => {
        scrollTo(skills);
        console.log('click1');
    });

    skillsBt2.addEventListener('click', () => {
        scrollTo(skills);
        console.log('click1');
    });
    let caseBt = document.querySelector('.caseBt');
    let caseBt2 = document.querySelector('.caseBt2');
    let caseBt3 = document.querySelector('.caseBt3');
    let Case = document.querySelector('#case');

    caseBt.addEventListener('click', () => {
        scrollTo(Case);
        console.log('click1');
    });

    caseBt2.addEventListener('click', () => {
        scrollTo(Case);
        console.log('click1');
    });
    caseBt3.addEventListener('click', () => {
        scrollTo(Case);
        console.log('click1');
    });

    let priceBt = document.querySelector('.priceBt');
    let priceBt2 = document.querySelector('.priceBt2');
    let price = document.querySelector('#price');

    priceBt.addEventListener('click', () => {
        scrollTo(price);
        console.log('click1');
    });

    priceBt2.addEventListener('click', () => {
        scrollTo(price);
        console.log('click1');
    });

    let feedBt = document.querySelector('.feedBt');
    let feedBt2 = document.querySelector('.feedBt2');
    let feed = document.querySelector('#feed');

    feedBt.addEventListener('click', () => {
        scrollTo(feed);
        console.log('click1');
    });

    feedBt2.addEventListener('click', () => {
        scrollTo(feed);
        console.log('click1');
    });
    let contBt = document.querySelector('.contBt');
    let contBt2 = document.querySelector('.contBt2');
    let cont = document.querySelector('#cont');

    contBt.addEventListener('click', () => {
        scrollTo(cont);
        console.log('click1');
    });

    contBt2.addEventListener('click', () => {
        scrollTo(feed);
        console.log('click1');
    });

    const time = 1000;
    const step = 1;
    let options = {
        threshold: [1]
    };
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
    })
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.stats');
    elements.each((i, el) => {
        observer.observe(el);
    });

    function onEntry(entry) {
        entry.forEach(change => {
            function clientNum(num, elem) {
                let e = document.querySelector('#clients');
                let n = 0;
                let t = Math.round(time / (num / step));
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == num) {
                        clearInterval(interval);
                    }
                    e.innerHTML = n;
                }, t);
            };

            function hourNum(num, elem) {
                const step2 = 10;
                let e = document.querySelector('#hours');
                let n = 0;
                let t = Math.round(time / (num / step2));
                let interval = setInterval(() => {
                    n = n + step2;
                    if (n == num) {
                        clearInterval(interval);
                    }
                    e.innerHTML = n;
                }, t);
            };

            function projectNum(num, elem) {
                let e = document.querySelector('#projects');
                let n = 0;
                let t = Math.round(time / (num / step));
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == num) {
                        clearInterval(interval);
                    }
                    e.innerHTML = n;
                }, t);
            };

            function revardNum(num, elem) {
                let e = document.querySelector('#revards');
                let n = 0;
                let t = Math.round(time / (num / step));
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == num) {
                        clearInterval(interval);
                    }
                    e.innerHTML = n;
                }, t);
            };
            revardNum(23, '#revards');
            projectNum(340, '#projects');
            hourNum(4600, '#hours');
            clientNum(120, '#clients');
        })
    }

    let sel1 = document.querySelector('.sel1');
    let sel2 = document.querySelector('.sel2');
    let sel3 = document.querySelector('.sel3');
    let Bt = document.querySelector('.Bt');
    function calcCost() {
        let cost = Number(sel1.value) + Number(sel2.value) + Number(sel3.value);

        return cost;
    }
Bt.addEventListener('click', function () {
        document.querySelector('#cost').innerHTML = calcCost();
        document.querySelector('#date').innerHTML = calcDate();
        console.log(DATA);
    })
})
