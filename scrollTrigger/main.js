gsap.registerPlugin(ScrollTrigger)

gsap.from("#box1", {
    scrollTrigger: {
        trigger: "#box1",
        markers: true,
        start: "top center",
        end: "top 10%",
        scrub: true
    },
    x: -800,
    rotate: -360
})

gsap.from("#box2", {
    scrollTrigger: {
        trigger: "#box2",
        markers: true,
        start: "top center",
        end: "top 10%",
        scrub: true
    },
    x: -800,
    rotate: -360
})

gsap.from("#box3", {
    scrollTrigger: {
        trigger: "#box3",
        markers: true,
        start: "top center",
        end: "top 10%",
        scrub: true
    },
    x: -800,
    rotate: -360
})