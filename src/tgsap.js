export default gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("#section").forEach((container, i)=> {
    ScrollTrigger.create({
        trigger:container,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap:1,
    });
    gsap.from(container.children, {
        y:50,
        opacity: 0,
        scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "top top",
            toggleActions: "play none reverse reset"
        },
    });
});

const projects = [
    { id: 1, link: "", name: "section 1" , color : "green-500"},
    { id: 2, link: "", name: "section 2" , color : "gray-500" },
    { id: 3, link: "", name: "section 3" , color : "red-500"},
    { id: 4, link: "", name: "section 4" , color : "green-200" },
    { id: 5, link: "", name: "section 5"  , color : "yellow-500"}
];