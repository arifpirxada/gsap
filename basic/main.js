// // Animation for navbar =>

// var navTl = gsap.timeline({delay: 1})

// // gsap.from("#logo", {
// //     y:-100,
// //     delay:1
// // })

// navTl.from("#logo", {
//     y:-100
// })

// navTl.from(".link", {
//     y: -100
// })

// Check if GSAP is loaded
document.addEventListener('DOMContentLoaded', function () {

    if (gsap) {

        var navTl = gsap.timeline({ delay: 1 });

        navTl.from("#logo", {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out"
        });

        // x, y does not work on a tags
        navTl.from(".links p", {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.2
        });

        navTl.from(".intro h1", {
            opacity: 0,
            duration: 1,
            y: -50
        })

        navTl.from(".intro p", {
            opacity: 0,
            duration: 0.5,
            x: 20
        })

    } else {
        console.log("GSAP is not loaded");
    }
})