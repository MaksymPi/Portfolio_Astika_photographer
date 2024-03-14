// ---------------------------------Modal------------------------------------------

document.getElementById("love-open-modal-btn").addEventListener("click", function() {
    document.getElementById("love-modal").classList.add("open");
});


// ---------------------------------Close----------------------------------------------

document.getElementById("close-modal-btn").addEventListener("click", function() {
    document.getElementById("love-modal").classList.remove("open");
});

// ---------------------------------Close Esc----------------------------------------------

window.addEventListener('keydown', (e) => {
    if (e.key ==='Escape') {
        document.getElementById("love-modal").classList.remove("open");
    }
})



// ---------------------------------Open img-----------------------------------------

document.querySelectorAll('.img-container img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src')
    }
});

document.querySelector('.pop-up__close-btn').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}
