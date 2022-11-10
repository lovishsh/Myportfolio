window.addEventListener('scroll',function(){
    var nav=document.querySelector('nav');
   if(window.scrollY>0){
        nav.classList.add('sticky','menu');
        
        
   }else{
    nav.classList.remove('sticky');
   }
});