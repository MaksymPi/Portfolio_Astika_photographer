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


let isScrollLocked = false;
let originalOverflow;

function toggleBodyScrolling() {
    const body = document.body;
    if (!isScrollLocked) {
        originalOverflow = window.getComputedStyle(body).overflow;
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = originalOverflow;
    }
    isScrollLocked = !isScrollLocked;
}



// ---------------------------burger--------------------------

document.querySelector('.burger').addEventListener("click", function() {
    this.classList.toggle('active');
        document.querySelector('.menu__items-header .menu__items').classList.toggle('open-burger');
    }
);

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.menu__items-header .menu__items').classList.remove('open-burger');
    });
});

// ---------------------------------Modal-Family------------------------------------------

document.getElementById("family-open-modal-btn").addEventListener("click", function() {
    document.getElementById("family-modal").classList.add("open");
    toggleBodyScrolling()
});


// ---------------------------------Close----------------------------------------------

document.getElementById("family-close-modal-btn").addEventListener("click", function() {
    document.getElementById("family-modal").classList.remove("open");
    originalOverflow = window.getComputedStyle(body).overflow;
        body.style.overflow = 'auto';
});

// -------------------------Close Esc----------------------------------------------

let popUpClosed = false;


window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        if (!popUpClosed) {
            document.querySelector(".pop-up").style.display = "none";
            popUpClosed = true;
        } else {
            document.getElementById("love-modal").classList.remove("open");
            document.getElementById("family-modal").classList.remove("open");
            document.getElementById("individual-modal").classList.remove("open");
            popUpClosed = false; 
            toggleBodyScrolling()
        }
    }
});

// ---------------------------------Modal-Individual------------------------------------------

document.getElementById("individual-open-modal-btn").addEventListener("click", function() {
    document.getElementById("individual-modal").classList.add("open");
    toggleBodyScrolling()
});


// ---------------------------------Close----------------------------------------------

document.getElementById("individual-close-modal-btn").addEventListener("click", function() {
    document.getElementById("individual-modal").classList.remove("open");
    toggleBodyScrolling()
});

// ---------------------------------Modal-love------------------------------------------

document.getElementById("love-open-modal-btn").addEventListener("click", function() {
    document.getElementById("love-modal").classList.add("open");
    toggleBodyScrolling()
});


// ---------------------------------Close----------------------------------------------

document.getElementById("love-close-modal-btn").addEventListener("click", function() {
    document.getElementById("love-modal").classList.remove("open");
    toggleBodyScrolling()
});

// -------------------Open img----------------------------

document.querySelectorAll('.img-container img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src')
    }
});

document.querySelector('.pop-up__close-btn').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}


