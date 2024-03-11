import '../scss/style.scss'


const links = document.querySelectorAll('.menu__link');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        let current = document.querySelector(".menu__link.active");
        if (current) {
            current.classList.remove("active");
        }
        this.classList.add("active");
        
        // Smooth scrolling to the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    })
}
