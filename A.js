function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()
var menuicon = document.querySelector("#menu");
var cut = document.querySelector("#cut");
var navlinks = document.querySelector(".nav-links");


menuicon.addEventListener("click",function(){
   navlinks.style.top= 0;
})
cut.addEventListener("click",function(){
    navlinks.style.top = "-100%";
})
var loader = gsap.timeline()

loader.to(".loader1 img",{
  stagger:.2,
  opacity:1


})

.to("#loader", {
  top: "-100vh",
  duration: .5,
})
gsap.to("#page1 video", {
    width: "100%",
    scrollTrigger: {
      trigger: "#page1 video",
      scroller: "#main",
      // markers:true,
      end:"top 10%",
      scrub: true
    }
  })
var L6 = document.querySelector("#L6")
var cir = document.querySelector("#cir")

L6.addEventListener("mouseenter",function(){
   L6.style.border="transparent"
   y = 0
   cir.style.opacity = 1

})
L6.addEventListener("mouseleave",function(){
  L6.style.border="1px solid"
  y = "-100%"
  cir.style.opacity = 0 


})



  gsap.to("#page4 h1", {
    x:"-80vw",
    duration:6,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      // markers:true,
      start: "top 20%",
      end: "top 0%",
      scrub: true,
      pin: true
    }
  })
  gsap.from("#page5 h1", {
    y: 100,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 70%",
      scrub: 3
    }
  })

  gsap.to(".p2",{
    rotate: 360,
    duration: 5,
    repeat:60,
    
    
    
  })
  const text = document.querySelector('.p2 p');
  text.innerHTML = text.innerText.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
  ).join("")

var page3 = document.querySelector("#page3")
var cur = document.querySelector("#cursur")
var img = document.querySelector(".img")

main.addEventListener("mousemove",function(dets){
    cur.style.left = `${dets.x + 20}px`
    cur.style.top = `${dets.y + 20}px`
})
 

var all = document.querySelectorAll(".img")
all.forEach(function(e){

  e.addEventListener("mouseenter",function(){
    cur.innerHTML = "→"
    cur.style.scale = 4
    cur.style.backgroundColor = "rgba(10, 6, 6, 0.448)"
    cur.style.borderColor = "rgba(10, 6, 6, 0.448)"
  })
  e.addEventListener("mouseleave",function(){
    cur.innerHTML = ""
    cur.style.scale = 1
    cur.style.backgroundColor = "white"
    cur.style.borderColor = "#e1e1e1"
  })
  
})


