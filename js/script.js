const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

const navToggle = function () {
    nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggle)

navCloseBtn.addEventListener('click', navToggle);


const themeBtn = document.querySelectorAll('.theme-btn');

// themeBtn.addEventListener('click',function(){
//     document.body.classList.toggle('light-theme');
//     document.body.classList.toggle('dark-theme');
// })

for (let i = 0; i < themeBtn.length; i++) {

    themeBtn[i].addEventListener('click', function () {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        for(let j = 0;j < themeBtn.length; j++){
            themeBtn[j].classList.toggle('light');
            themeBtn[j].classList.toggle('dark');
        }
    })

    
}