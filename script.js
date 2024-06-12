// var page1  = document.querySelector("#page1")

// var stick = document.querySelector("#stick")



// page1.addEventListener("mousemove",function(debt){
//     // console.log(debt.x)
//     stick.style.left = debt.x-"px"
//     stick.style.top = debt.y-"px"

// })


gsap.to("#page1 #arrow", {
    duration: .5,
    y: 20,
    repeat: Infinity,
    yoyo: true,
    ease: "power1.inOut",
    // transition: easeIn
  });


var circle = document.querySelector("#circle")
var learn = document.querySelectorAll("#learn h2")


circle.addEventListener("mouseenter",function(){
    circle.style.scale = 1.1,
    learn.forEach(function(e){
        e.style.transform="translateY(-100%)"
    })
})

circle.addEventListener("mouseleave",function(){
    circle.style.scale = 1,
    learn.forEach(function(e){
        e.style.transform="translateY(0)"
    })
})



var link = document.querySelector("#top a")
var up = document.querySelector("#up")
var h3 =  document.querySelector("#top a h3")

link.addEventListener("mouseenter",function(){
    up.style.backgroundColor = "white",
    up.style.color = "black",
    h3.style.textDecoration = "underline"

})
link.addEventListener("mouseleave",function(){
    up.style.backgroundColor = "black",
    up.style.color = "white",
    h3.style.textDecoration = "none"
})