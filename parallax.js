const parallaxObj = document.querySelectorAll(".parallax");
parallaxObj.forEach(item => {
    const parallax = function(e) {
        const speed = item.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/80;
        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
    window.addEventListener("mousemove",parallax);
});
