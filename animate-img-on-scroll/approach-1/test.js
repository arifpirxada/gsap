if (gsap) {
    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#second-message-trigger",
            start: "top -10%",
            end: "bottom bottom",
            scrub: 3,
            markers: false,
            pin: true,
        }
    });

    tl.to(".shadow", {
        x: "15%",
        y: "25%",
        rotate: 55,
        duration: 2
    })
    .from("#second-message", {
        yoyo: true,
        delay: 0.5,
        x: 80,
        y: -60,
        opacity: 0,
        duration: 2,
        onStart: () => {
            document.getElementById("second-message").style.display = "block";
        }
    }, "<")
    .to("#first-message", {
        opacity: 0,
        duration: 2,
        onComplete: () => {
            document.getElementById("first-message").style.display = "none";
        },
        onReverseComplete: () => {
            document.getElementById("first-message").style.display = "block";
        }
    }, "<")
    const tl2 = gsap.timeline({
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#third-message-trigger",
            start: "top -10%",
            end: "bottom bottom",
            scrub: 3,
            markers: false,
            pin: true,
        }
    });
    tl2.to(".shadow", {
        x: "45%",
        y: "25%",
        rotate: 55,
        duration: 2
    }, "<")
    .from("#third-message", {
        yoyo: true,
        delay: 0.5,
        x: -70,
        y: -60,
        opacity: 0,
        duration: 2,
        onStart: () => {
            document.getElementById("third-message").style.display = "block";
        }
    }, "<")
    .to("#background-img", {
        width: "220%",
        marginLeft: "15%",
        duration: tl2.duration()
    }, "<")
    .to("#second-message", {
        opacity: 0,
        duration: 2,
        onComplete: () => {
            document.getElementById("second-message").style.display = "none";
        },
        onReverseComplete: () => {
            document.getElementById("second-message").style.display = "block";
        }
    }, "<");

    const tl3 = gsap.timeline({
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#fourth-message-trigger",
            start: "top -10%",
            end: "bottom bottom",
            scrub: 3,
            markers: false,
            pin: true,
        }
    });

    tl3.to(".shadow", {
        x: "95%",
        y: "20%",
        rotate: 50,
        duration: 2
    }, "<")
    .from("#fourth-message", {
        yoyo: true,
        delay: 0.5,
        x: -70,
        y: -60,
        opacity: 0,
        duration: 2,
        onStart: () => {
            document.getElementById("fourth-message").style.display = "block";
        }
    }, "<")
    .to("#background-img", {
        width: "180%",
        marginLeft: "-26%",
        x: 0,
        top: "-4rem",
        duration: tl2.duration()
    }, "<")
    .to("#third-message", {
        opacity: 0,
        duration: 2,
        onComplete: () => {
            document.getElementById("third-message").style.display = "none";
        },
        onReverseComplete: () => {
            document.getElementById("third-message").style.display = "block";
        }
    }, "<");

    const tl4 = gsap.timeline({
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#end-trigger",
            start: "top -10%",
            end: "bottom bottom",
            scrub: 3,
            markers: false,
            pin: true,
        }
    });

    tl4.to(".shadow", {
        x: "120%",
        rotate: 55,
        duration: 2
    }, "<")
    // .from("#fourth-message", {
    //     yoyo: true,
    //     delay: 0.5,
    //     x: 300,
    //     opacity: 0,
    //     duration: 2,
    //     onStart: () => {
    //         document.getElementById("fourth-message").style.display = "block";
    //     }
    // }, "<")
    .to("#background-img", {
        width: "100%",
        marginLeft: "0%",
        top: 0,
        duration: tl2.duration()
    }, "<")
    .to("#fourth-message", {
        yoyo: true,
        delay: 0.5,
        x: 900,
        duration: 2,
        // onComplete: () => {
        //     document.getElementById("fourth-message").style.display = "none";
        // },
        // onReverseComplete: () => {
        //     document.getElementById("fourth-message").style.display = "block";
        // }
    }, "<");

    const tl5 = gsap.timeline({
        scrollTrigger: {
            scroller: ".img-container-trigger",
            trigger: "#complete-end-trigger",
            start: "top -10%",
            end: "bottom bottom",
            scrub: 3,
            markers: false,
            pin: true,
        }
    });

    tl5.to(".shadow", {
        x: "150%",
        duration: 1
    }, "<")
    .to("#background-img", {
        width: "90%",
        duration: 1
    }, "<");

} else {
    console.error("Could not load Gsap!")
}