const images = ['./img/mockup1.png', './img/mockup2.png', './img/mockup3.png', './img/mockup4.png']; 
let currentIndex = 0;

function changeMockup() {
    const mockupImage = document.getElementById('mockup-image');
    mockupImage.classList.add('hidden'); 
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        mockupImage.src = images[currentIndex];  
        mockupImage.classList.remove('hidden');  
    }, 500); 
}

setInterval(changeMockup, 3000);
