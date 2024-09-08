let images = ['./img/img2.jpg', './img/img3.jpg', './img/img4.jpg'];
let currentIndex = 0;
const activeImage = document.getElementById('activeImage');
const thumbnails = document.querySelectorAll('.main-img');

// Set the initial image dynamically
activeImage.src = images[currentIndex];
thumbnails[currentIndex].classList.add('active-thumbnail'); // Highlight the active thumbnail

// Function to change the active image with fade effect and highlight the active thumbnail
function changeImage(imageUrl, index) {
    activeImage.classList.add('fade-out'); // Add fade-out effect

    // Remove 'active-thumbnail' class from all thumbnails
    thumbnails.forEach(img => img.classList.remove('active-thumbnail'));

    setTimeout(() => {
        activeImage.src = imageUrl; // Change the image after fade-out
        activeImage.classList.remove('fade-out'); // Remove fade-out for the next fade-in

        // Add 'active-thumbnail' class to the new active thumbnail
        thumbnails[index].classList.add('active-thumbnail');
    }, 500); // Duration should match CSS transition time
}

// Back button functionality
document.getElementById('backBtn').addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    changeImage(images[currentIndex], currentIndex);
});

// Next button functionality
document.getElementById('nextBtn').addEventListener('click', function () {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    changeImage(images[currentIndex], currentIndex);
});

// Add click event listeners for thumbnails
thumbnails.forEach((img, index) => {
    img.addEventListener('click', () => {
        changeImage(images[index], index);
        currentIndex = index; // Update the current index
    });
});
