function homeAnimation (){
    gsap.set(".slidesm",{scale:5});

var tl = gsap.timeline(
    {
        scrollTrigger:{
            trigger: ".home",
            start:"top top",
            end: "bottom bottom",
            scrub:2
        }   
    }
)


tl.to(".vdodiv",{
    '--clip':'0%',
    ease:Power2,
},'a')
.to(".slidesm",{
    scale:1,
    ease:Power2
},'a')
.to(".lft",{
    xPercent:-10,
    stagger:0.3,
    ease:Power4
},'b')
.to(".rgt",{
    xPercent:10,
    stagger:0.3,
    ease:Power4
},'b')
}

function realAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start: "top top",
            end: "bottom bottom",
            scrub:4
        },
        xPercent: -310,
        ease: Power4
    })
}

function ourTeamAnimation(){
    document.querySelectorAll(".listelem").forEach(function(el){
        el.addEventListener("mousemove",function(det){
            gsap.to(this.querySelector(".picture"),{
                opacity : 1,
                x : gsap.utils.mapRange(0, window.innerWidth, -150,150, det.clientX),
                ease :Power4,
                duraion : 1
            });
            gsap.to(this.querySelector(".bluelayer"),{opacity:1 , ease:Power4,duraion:2,transition: "ease-in 0.1s"});
            gsap.to(this.querySelectorAll('h1'),{color:"#fff",ease: Power4})
        })
    
        el.addEventListener("mouseleave",function(det){
            gsap.to(this.querySelector(".picture"),{opacity:0, ease: Power4, duraion:1});
            gsap.to(this.querySelector(".bluelayer"),{opacity:0, ease:Power4,duraion:2,transition: "ease-out 0.1s"});
            gsap.to(this.querySelectorAll('h1'),{color:"#000",ease: Power4})
        })
    })
}


function locomotiveScroll(){
    
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to(".caps:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start: "top 80%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease: Power4
    })
}

function bodyColorChange(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start:"top 50%",
            end:"bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}

function cardsAnimation(){
    document.querySelectorAll(".box").forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 70%",
            end: "bottom 90%",
            onEnter: function(){
                gsap.to(e,{backgroundColor: "#000",scale:1.1,color: "#AEDEE0",ease:Power4,duration:0.5})
            },
            onEnterBack:function(){
                gsap.to(e,{backgroundColor: "#AEDEE0",scale:1,color: "#000",ease:Power4,duration:0.5})
            }
        })
    })
}


bodyColorChange();
locomotiveScroll();
homeAnimation();
cardsAnimation();
realAnimation();
ourTeamAnimation();
capsulesAnimation();