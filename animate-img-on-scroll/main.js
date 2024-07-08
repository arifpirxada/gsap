if (gsap) {

    gsap.to("#first-message", {
        opacity: 0,
        delay: 3,
        scrollTrigger: {
            trigger: ".img-container",
            start: "top 20%",
            end: "bottom -100%",
            markers: false,
        },
        onComplete: () => {
            // hide h1
            document.getElementById("first-message").style.display = "none"
        }
    })

    // Second message
    gsap.to(".shadow", {
        x: "15%",
        y: "25%",
        rotate: 55,
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#second-message-trigger",
            start: "top -10%",
            end: "bottom bottom",
            scrub: 1,
            markers: false,
            pin: true
        },
        onStart: () => {
            // Display second text =>
            document.getElementById("second-message").style.display = "block"
            gsap.from("#second-message", {
                delay: 0.5,
                x: 80,
                y: -60,
                opacity: 0
            })

            // Check if heading is already present =>

            if (document.getElementById("first-message").style.display != "none") {
                gsap.to("#first-message", {
                    opacity: 0,
                    onComplete: () => {
                        // hide h1
                        document.getElementById("first-message").style.display = "none"
                    }
                })
            }
        },
    })

    // Third message =>
    gsap.to(".shadow", {
        x: "45%",
        y: "25%",
        rotate: 55,
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#third-message-trigger",
            start: "top -10%",
            end: "bottom center",
            scrub: 1,
            markers: false,
            pin: true
        },
        onStart: () => {

            // Hide second message =>
            gsap.to("#second-message", {
                opacity: 0,
                onComplete: () => {
                    document.getElementById("second-message").style.display = "none"
                }
            })
            // Display third text =>
            document.getElementById("third-message").style.display = "block"
            gsap.from("#third-message", {
                delay: 0.5,
                x: -70,
                y: -60,
                opacity: 0
            })

            // Change bg image position =>

            gsap.to("#background-img", {
                width: "220%",
                marginLeft: "15%"
            })
        }
    })

    // Fourth message =>
    gsap.to(".shadow", {
        x: "95%",
        y: "20%",
        // rotate: 300,
        rotate: 50,
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#fourth-message-trigger",
            start: "top -10%",
            end: "bottom center",
            scrub: 1,
            markers: false,
            pin: true
        },
        onStart: () => {
            // Hide third message =>
            gsap.to("#third-message", {
                opacity: 0,
                onComplete: () => {
                    document.getElementById("third-message").style.display = "none"
                }
            })
            // Display third text =>
            document.getElementById("fourth-message").style.display = "block"
            gsap.from("#fourth-message", {
                delay: 0.5,
                x: -80,
                y: -90,
                opacity: 0
            })

            // Change bg image position =>

            gsap.to("#background-img", {
                width: "180%",
                marginLeft: "-26%",
                x: 0,
                top: "-4rem"
            })
        }
    })

    // End Trigger
    gsap.to(".shadow", {
        x: "120%",
        opacity: 0,
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#end-trigger",
            start: "top -10%",
            end: "bottom center",
            scrub: 1,
            markers: false,
            pin: true
        },
        onStart: () => {
            // Slide message =>
            // document.querySelector(".shadow").style.left = 'auto'

            gsap.to("#fourth-message", {
                x: 300,
                opacity: 0,
                onComplete: () => {
                    document.getElementById("fourth-message").style.display = "none"
                }
            })

            // Change bg image position =>
            gsap.to("#background-img", {
                width: "100%",
                marginLeft: "0%",
                top: 0
            })
        },
        onComplete: () => {
            document.querySelector(".shadow").style.display = "none"
        }
    })

    // Complete End Trigger
    gsap.to(".shadow", {
        x: 800,
        y: 20,
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#complete-end-trigger",
            start: "top -10%",
            end: "bottom center",
            scrub: 1,
            markers: false,
            pin: true
        },
        onStart: () => {
            gsap.to("#background-img", {
                width: "90%"
            })
        }
    })

} else {
    console.error("Could not load Gsap!")
}