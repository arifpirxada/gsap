// Condition for responsiveness: =>
// show "sm-img-container" for small devices

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 550) {
        document.querySelector(".sm-img-container").style.display = "flex"
        document.querySelector(".img-container").style.display = "none"
    }

    if (gsap) {

        gsap.from("#sm-first-message", {
            opacity: 0,
            y: -200,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".sm-img-container",
                start: "top 40%",
                end: "bottom -100%",
                markers: false,
                once: true
            }
        })
        gsap.from("#sm-background-img", {
            x: "25%",
            y: "-5%",
            scale: 1.3,
            scrollTrigger: {
                trigger: ".sm-img-container",
                start: "top 40%",
                end: "bottom -100%",
                markers: false,
                once: true
            }
        })

        const smTl = gsap.timeline({
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-second-message-trigger",
                start: "top 20%",
                end: "bottom -100%",
                scrub: 3,
                markers: false,
                pin: true,
            }
        })

        
        smTl.from("#sm-second-message", {
            x: 90,
            y: -70,
            delay: 0.2,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            onStart: () => {
                document.getElementById("sm-second-message").style.display = "block"
            },
            onReverseComplete: () => {
                document.getElementById("sm-first-message").style.opacity = 1;
                document.getElementById("sm-first-message").style.display = "block"
            },
        })
        .to("#sm-first-message", {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                document.getElementById("sm-first-message").style.display = "none"
            }
        }, "<")
        .to(".sm-shadow", {
            x: "15%",
            y: "12%",
            borderRadius: "50%",
            rotate: 80,
        }, "<")

        const smTl2 = gsap.timeline({
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-third-message-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 3,
                markers: false,
                pin: true,
            }
        })

        smTl2.to(".sm-shadow", {
            x: "27%",
            y: "14%",
            duration: 0.5,
            rotate: 80,
            onStart: () => {
                document.getElementById("sm-second-message").style.display = "none"
                document.getElementById("sm-third-message").style.display = "block"
            },
            onReverseComplete: () => {
                document.getElementById("sm-second-message").style.display = "block"
                document.getElementById("sm-third-message").style.display = "none"
            },
        })
        .to("#sm-background-img", {
            scale: 1.6,
            y: "19%",
            duration: 0.3,
            onReverseStart: () => {
                if (document.getElementById("sm-fourth-message")) {
                    document.getElementById("sm-fourth-message").style.display = "none"
                }
            }
        }, "<")
        .from("#sm-third-message", {
            delay: 0.1,
            duration: 0.3,
            x: -80,
            y: 70,
            opacity: 0,
            onReverseStart: () => {
                if (document.getElementById("sm-fourth-message")) {
                    document.getElementById("sm-fourth-message").style.display = "none"
                }
            }
        }, "<");

        const smTl3 = gsap.timeline({
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-fourth-message-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 3,
                markers: false,
                pin: true,
            }
        })

        smTl3.to(".sm-shadow", {
            x: "95%",
            y: "20%",
            rotate: 50
        })
        .to("#sm-background-img", {
            x: "-18%",
            y: "0%",
            scale: 1.2,
            duration: 0.3
        })
        .to("#sm-third-message", {
            opacity: 0,
            y: "400%",
            x: "100%",
            duration: 0.5,
        }, "<")
        .from("#sm-fourth-message", {
            delay: 0.1,
            x: -80,
            y: 90,
            duration: 0.2,
            opacity: 0,
            onStart: () => {
                document.getElementById("sm-fourth-message").style.display = "block"
            },
            onReverseComplete: () => {
                document.getElementById("sm-fourth-message").style.display = "none"
            },
            yoyo: true
        }, "<")

        const smTl4 = gsap.timeline({
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-end-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 3,
                markers: false,
                pin: true,
            }
        })

        smTl4.to(".sm-shadow", {
            x: "120%",
            y: "-65%",
            duration: 1,
            opacity: 0
        })
        .to("#sm-fourth-message", {
            x: 300,
            opacity: 0,
            onComplete: () => {
                document.getElementById("sm-fourth-message").style.display = "none"
            },
            onReverseStart: () => {
                document.getElementById("sm-fourth-message").style.display = "block"
            }
        }, "<")
        .to("#sm-background-img", {
            scale: 1,
            x: "-18%",
            top: 0,
            onComplete: () => {
                document.querySelector(".sm-shadow").style.display = "none"
            },
            // onReverseComplete: () => {
            //     document.querySelector(".sm-shadow").style.display = "block"
            // }
        }, "<")

        const smTl5 = gsap.timeline({
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-scroll-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 3,
                markers: false,
                pin: true,
            }
        })

        smTl5.to(".sm-shadow", {
            x: 800,
            y: 20,
        })
        .to("#sm-background-img", {
            x: "18%",
            duration: 0.5,
            onReverseComplete: () => {
                document.getElementById("sm-fourth-message").style.display = "block"
            }
        })

        const smTl6 = gsap.timeline({
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-complete-end-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 3,
                markers: false,
                pin: true,
            }
        })

        smTl6.to(".sm-shadow", {
            x: 800,
            y: 20
        })
        .to(".sm-img-container", {
            scale: 0.9,
            borderRadius: "20px"
        })

    } else {
        console.error("Could not load Gsap!")
    }

});