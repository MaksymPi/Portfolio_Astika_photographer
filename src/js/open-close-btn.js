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
