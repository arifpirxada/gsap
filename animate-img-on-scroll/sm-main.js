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
            // once: true
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
        y: "25%",
        rotate: 55,
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
                delay: 0.5,
                x: 80,
                y: -60,
                opacity: 0
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
        x: "45%",
        y: "25%",
        rotate: 55,
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
                opacity: 0,
                onComplete: () => {
                    document.getElementById("sm-second-message").style.display = "none"
                }
            })
            // Display third text =>
            document.getElementById("sm-third-message").style.display = "block"
            gsap.from("#sm-third-message", {
                delay: 0.5,
                x: -70,
                y: -60,
                opacity: 0
            })

            // Change bg image position =>

            gsap.to("#sm-background-img", {
                width: "220%",
                marginLeft: "15%"
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
                onComplete: () => {
                    document.getElementById("sm-third-message").style.display = "none"
                }
            })
            // Display third text =>
            document.getElementById("sm-fourth-message").style.display = "block"
            gsap.from("#sm-fourth-message", {
                delay: 0.5,
                x: -80,
                y: -90,
                opacity: 0
            })

            // Change bg image position =>

            gsap.to("#sm-background-img", {
                width: "180%",
                marginLeft: "-26%",
                x: 0,
                top: "-4rem"
            })
        }
    })

    // End Trigger
    gsap.to(".sm-shadow", {
        x: "120%",
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
            gsap.to(".sm-img-container", {
                width: "100vw",
                marginLeft: "0%",
                top: 0
            })
        },
        onComplete: () => {
            document.querySelector(".sm-shadow").style.display = "none"
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
                width: "88vw"
            })
        }
    })

} else {
    console.error("Could not load Gsap!")
}