// ---------------------------------Modal------------------------------------------

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

