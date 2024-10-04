gsap.from("#home", {
    x: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger:{
        trigger : "#home",
        scroller: "body", //optional
        start: "top 40%",
        end: "top 40%",
        scrub: 3,
        pin: true
    }
})