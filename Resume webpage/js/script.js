window.onload=function(){
    const btnOpen=document.querySelector(".btnOpen");
    const btnClose=document.querySelectorAll(".btnClose");
    const container=document.querySelector(".modal-container");
  
    btnOpen.addEventListener('click',function(){
      container.classList.add('show');
    });
  /*
    for(let i=0;i<btnClose.length;i++){
      btnClose[i].addEventListener('click',function(){
        container.classList.remove('show');
      });
    }
  */
  
  btnClose.forEach(btn=>{
    btn.addEventListener('click',function(){
      container.classList.remove('show');
    });
  });
  
   
  }
  
  const moveTop=document.querySelector('.top');

window.addEventListener('scroll',()=>{
    var y=window.scrollY;
    if(y>=800){
        moveTop.classList.add('active');
    }else{
        moveTop.classList.remove('active');
    }
});

//project
