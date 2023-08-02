var cursor = document.querySelector("#cursor")
var cursorblr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){

  cursor.style.left = dets.x + 10+ "px"
  cursor.style.top = dets.y + "px"
  cursorblr.style.left = dets.x -  200+ "px"
  cursorblr.style.top = dets.y -200 + "px"

 })

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(h4){
  h4.addEventListener("mouseenter",function(){
    cursor.style.scale = 2
    cursor.style.border = "0.5px solid #fff"
    cursor.style.backgroundColor= "transparent"

  })
  h4.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.style.border = "0px solid #A3D320"
    cursor.style.backgroundColor= "#A3D320"

  
  
})
}

)
gsap.to("#nav", {
      backgroundColor: "#000",
      height:"110px",
      duration: 0.5,
      scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
      }
});
    
gsap.registerPlugin(ScrollTrigger);

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "top -70%",
    scrub: 2,
  },
});


gsap.from("#about img , #about-us",{
  y:90,
  opacity:1,
  duration:1,

  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 58%",
    scrub:3,
  }
})


gsap.from(".cards",{
  scale:0.8,
  opacity:0,
  duration:1,

  scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 58%",
    scrub:3,
  }
})



gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:1,
  }
})


gsap.from("#colon2",{
  y:50,
  x:50,
  scrollTrigger:{
    trigger:"#colon2",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:1,
  }
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:1,
  }
  }
  )