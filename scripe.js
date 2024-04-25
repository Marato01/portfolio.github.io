/*-------typing effect----------*/

var typingEffect = new Typed(".typeText", {
    strings: ["Front-End","Android","Flutter"],
    loop: true,
    typeSpeed:100,
    backSpeed:80,
    backDelay: 2000,
})


/*-----------------------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".feature-name", {delay:100});
sr.reveal(".text-info", {delay:100});
sr.reveal(".text-btn", {delay:100});
sr.reveal(".socail_icons", {delay:100});
sr.reveal(".feature-image", {delay:100});


sr.reveal(".project-box", {interval:200});
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset: true,
})

srLeft.reveal(".skill", {delay: 100});
srLeft.reveal(".skill-box", {delay: 100});


/*---------action Link----------*/

const section = document.querySelectorAll(".section[id]");

function scrollAction(){
    const scrollY = window.scrollY;
    section.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link")
        }else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll", scrollAction);

