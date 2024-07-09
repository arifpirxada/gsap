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

        gsap.to("#sm-first-message", {
            opacity: 0,
            delay: 2,
            scrollTrigger: {
                trigger: ".sm-img-container",
                start: "top 20%",
                end: "bottom -100%",
                markers: false,
            },
            onComplete: () => {
                // hide h1
                document.getElementById("sm-first-message").style.display = "none"
            }
        })

        // Second message
        gsap.to(".sm-shadow", {
            x: "15%",
            y: "12%",
            rotate: 80,
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-second-message-trigger",
                start: "top -10%",
                end: "bottom bottom",
                scrub: 1,
                markers: false,
                pin: true
            },
            onStart: () => {
                // Display second text =>
                document.getElementById("sm-second-message").style.display = "block"
                gsap.from("#sm-second-message", {
                    x: 90,
                    y: -70,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })

                // Check if heading is already present =>

                if (document.getElementById("sm-first-message").style.display != "none") {
                    gsap.to("#sm-first-message", {
                        opacity: 0,
                        onComplete: () => {
                            // hide h1
                            document.getElementById("sm-first-message").style.display = "none"
                        }
                    })
                }
            },
        })

        // Third message =>
        gsap.to(".sm-shadow", {
            x: "27%",
            y: "14%",
            duration: 0.5,
            rotate: 80,
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-third-message-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 1,
                markers: false,
                pin: true
            },
            onStart: () => {

                // Hide second message =>
                gsap.to("#sm-second-message", {
                    x: "100%",
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        document.getElementById("sm-second-message").style.display = "none"
                    }
                })
                // Display third text =>
                document.getElementById("sm-third-message").style.display = "block"
                gsap.from("#sm-third-message", {
                    delay: 0.1,
                    duration: 0.3,
                    x: -80,
                    y: 70,
                    opacity: 0
                })

                // Change bg image position =>

                gsap.to("#sm-background-img", {
                    scale: 1.6,
                    y: "19%",
                    duration: 0.3
                })
            }
        })

        // Fourth message =>
        gsap.to(".sm-shadow", {
            x: "95%",
            y: "20%",
            // rotate: 300,
            rotate: 50,
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-fourth-message-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 1,
                markers: false,
                pin: true
            },
            onStart: () => {
                // Hide third message =>
                gsap.to("#sm-third-message", {
                    opacity: 0,
                    y: "400%",
                    x: "100%",
                    duration: 0.5,
                    onComplete: () => {
                        document.getElementById("sm-third-message").style.display = "none"
                    }
                })
                // Display third text =>
                document.getElementById("sm-fourth-message").style.display = "block"
                gsap.from("#sm-fourth-message", {
                    delay: 0.1,
                    x: -80,
                    y: 90,
                    duration: 0.2,
                    opacity: 0
                })

                // Change bg image position =>

                gsap.to("#sm-background-img", {
                    x: "-18%",
                    y: "0%",
                    scale: 1.2,
                    duration: 0.3
                })
            }
        })

        // End Trigger
        gsap.to(".sm-shadow", {
            x: "120%",
            y: "-65%",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-end-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 1,
                markers: false,
                pin: true
            },
            onStart: () => {
                // Slide message =>
                // document.querySelector(".shadow").style.left = 'auto'

                gsap.to("#sm-fourth-message", {
                    x: 300,
                    opacity: 0,
                    onComplete: () => {
                        document.getElementById("sm-fourth-message").style.display = "none"
                    }
                })

                // Change bg image position =>
                gsap.to("#sm-background-img", {
                    scale: 1,
                    x: "-18%",
                    top: 0
                })

            },
            onComplete: () => {
                document.querySelector(".sm-shadow").style.display = "none"
            }
        })

        // BG image scroll Trigger
        gsap.to(".sm-shadow", {
            x: 800,
            y: 20,
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-scroll-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 1,
                markers: false,
                pin: true
            },
            onStart: () => {
                gsap.to("#sm-background-img", {
                    x: "18%",
                    duration: 0.5,
                })
            }
        })

        // Complete End Trigger
        gsap.to(".sm-shadow", {
            x: 800,
            y: 20,
            scrollTrigger: {
                scroller: ".sm-img-container-trigger",
                trigger: "#sm-complete-end-trigger",
                start: "top -10%",
                end: "bottom center",
                scrub: 1,
                markers: false,
                pin: true
            },
            onStart: () => {
                gsap.to(".sm-img-container", {
                    scale: 0.9,
                })
            }
        })

    } else {
        console.error("Could not load Gsap!")
    }

});