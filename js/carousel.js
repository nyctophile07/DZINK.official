let currentIndex = 0;
document.querySelector('.carousel-images').addEventListener('click',()=>{
    window.location.href='https://www.google.com'
})

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Update the current index
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Calculate the offset and apply it to the carousel
    const offset = -currentIndex * 100; // 100% for each slide
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
setInterval(() => {
    moveSlide(1)
}, 4000);