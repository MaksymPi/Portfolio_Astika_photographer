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

// ---------------------------------Modal-Family------------------------------------------

document.getElementById("family-open-modal-btn").addEventListener("click", function() {
    document.getElementById("family-modal").classList.add("open");
});


// ---------------------------------Close----------------------------------------------

document.getElementById("family-close-modal-btn").addEventListener("click", function() {
    document.getElementById("family-modal").classList.remove("open");
});

// -------------------------Close Esc----------------------------------------------

window.addEventListener('keydown', (e) => {
    if (e.key ==='Escape') {
        document.getElementById("family-modal").classList.remove("open");
    }
})


// ---------------------------------Modal-Individual------------------------------------------

document.getElementById("individual-open-modal-btn").addEventListener("click", function() {
    document.getElementById("individual-modal").classList.add("open");
});


// ---------------------------------Close----------------------------------------------

document.getElementById("individual-close-modal-btn").addEventListener("click", function() {
    document.getElementById("individual-modal").classList.remove("open");
});

// ---------------------------------Close Esc----------------------------------------------

window.addEventListener('keydown', (e) => {
    if (e.key ==='Escape') {
        document.getElementById("individual-modal").classList.remove("open");
    }
})

// ---------------------------------Modal-love------------------------------------------

document.getElementById("love-open-modal-btn").addEventListener("click", function() {
    document.getElementById("love-modal").classList.add("open");
});


// ---------------------------------Close----------------------------------------------

document.getElementById("love-close-modal-btn").addEventListener("click", function() {
    document.getElementById("love-modal").classList.remove("open");
});

// ------------------Close Esc------------------------------------

window.addEventListener('keydown', (e) => {
    if (e.key ==='Escape') {
        document.getElementById("love-modal").classList.remove("open");
    }
})

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


