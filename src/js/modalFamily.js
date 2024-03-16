// ---------------------------------Modal------------------------------------------

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
