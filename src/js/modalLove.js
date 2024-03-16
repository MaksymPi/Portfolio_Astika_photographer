// ---------------------------------Modal------------------------------------------

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



