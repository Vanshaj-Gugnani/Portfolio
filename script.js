window.addEventListener('mousemove',(e)=>{
  document.querySelectorAll('.img').forEach((img) =>{
    let speed = parseInt(img.getAttribute('data-speed'));
    xmove = e.clientX*speed/300;
    ymove = e.clientY*speed/300;
    console.log(xmove)
    img.style.transform = `translateX(${xmove}px) translateY(${ymove}px)`
  })
})

var timeline = gsap.timeline({
  scrollTrigger:{
    trigger: '.page3',
    start: 'top top',
    bottom: 'bottom top',
    pin: true,
    scrub: 0.5
  }
});

timeline
  .to('.subpage1', {
    top: '-50%',
    duration: 2,
    delay:2,
  }, 'a')
  .to('.subpage2',{
    bottom: '-50%',
    duration: 2,
    delay:2,
  }, 'a')
  .to('.img',{
    opacity: 0,
    display:'none',
    duration:1,
    delay:1,
  }, 'a')
  ;