burger = document.querySelector('.burger')
bar = document.querySelector('.bar')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')
list= document.querySelector('.nav-list li')

burger.addEventListener('click',()=>{
   
   
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    bar.classList.toggle('h-nav-resp');
})
