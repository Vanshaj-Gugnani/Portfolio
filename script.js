window.addEventListener('mousemove',(e)=>{
  document.querySelectorAll('.img').forEach((img) =>{
    let speed = parseInt(img.getAttribute('data-speed'));
    xmove = e.clientX*speed/300;
    ymove = e.clientY*speed/300;
    console.log(xmove)
    img.style.transform = `translateX(${xmove}px) translateY(${ymove}px)`
  })
})