// ...Swiper...
const swiper = new Swiper('.swiper',{
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


// ...navbar...
document.querySelector('.nav-button .Open').addEventListener('click',()=>{
    document.querySelector('nav .nav-container ul').style.left = '0';
    document.querySelector('.nav-button .Close').style.display='block'
    document.querySelector('.nav-button .Open').style.display='none'
});

document.querySelector('.nav-button .Close').addEventListener('click',()=>{
    document.querySelector('.nav-button .Close').style.display='none'
    document.querySelector('nav .nav-container ul').style.left = '-16rem';
    document.querySelector('.nav-button .Open').style.display='block'
});


// ...nav-active...
const active = document.querySelectorAll('.nav-container ul li a');

active.forEach(index => {
    index.addEventListener('click',()=>{
        removeItem();
        index.classList.add('nav-active');
    });  
});

function removeItem(){
    active.forEach(index => {      
        index.classList.remove('nav-active'); 
    });    
}