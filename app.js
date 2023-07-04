const images = document.querySelectorAll('img');

console.log(images);


images.forEach(img => {
    img.onclick = function () {
        this.classList.toggle('spin');
    }
});

