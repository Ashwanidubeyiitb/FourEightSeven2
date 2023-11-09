const imageUrls = [
    "your-image.jpg",
    "your-image1.jpg",
    "your-image2.jpg",
    "your-image3.jpg",
    "your-image4.jpg"
];

let currentIndex = 0;
const productImage = document.getElementById("productImage");
const imageCarousel = document.getElementById("imageCarousel");
const images = imageCarousel.getElementsByTagName("img");

function changeImage(index) {
    currentIndex = index;
    productImage.src = imageUrls[index];
    console.log(productImage.src);
    highlightCurrentImage();
}

function highlightCurrentImage() {
    for (let i = 0; i < images.length; i++) {
        if (i === currentIndex) {
            images[i].classList.add("bg-green-500");
        } else {
            images[i].classList.remove("bg-green-500");
        }
    }
}

// function startCarousel() {
//     interval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % imageUrls.length;
//         changeImage(currentIndex);
//     }, 3000); // Change image every 3 seconds
// }

function stopCarousel() {
    clearInterval(interval);
}

window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        startCarousel();
        imageCarousel.style.display = "block"; // Show the dot navigation
        document.getElementById("circularImages").style.display = "none"; // Hide circular div
    } else {
        stopCarousel();
        imageCarousel.style.display = "none"; // Hide the dot navigation
        document.getElementById("circularImages").style.display = "block"; // Show circular div
    }
    
});

// function showDetails(section) {
//     const sections = ["description", "harvest", "users"];
//     for (const sec of sections) {
//         const element = document.getElementById(sec);
//         if (section === sec) {
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }
//     }
// }
// Automatic image carousel


// function startCarousel() {
//     interval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % imageUrls.length;
//         changeImage(currentIndex);
//     }, 3000);
// }

// startCarousel();


// document.getElementById("addToCart").addEventListener("click", function () {
//     const quantity = parseInt(document.getElementById("quantity").value);
//     const cartCount = document.getElementById("cartCount");
//     const currentCount = parseInt(cartCount.innerText);
//     cartCount.innerText = currentCount + quantity;
// });

function showDetails(section) {
    const sections = ["description", "harvest", "users"];
    for (const sec of sections) {
        const element = document.getElementById(sec);
        if (section === sec) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

// Implement automatic image carousel
let interval;

// function startCarousel() {
//     interval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % imageUrls.length;
//         changeImage(currentIndex);
//     }, 3000);
// }

// startCarousel();

// Add a window resize listener to handle the layout
window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        clearInterval(interval);
    } else {
        startCarousel();
    }
});

function showDetails(section) {
    const sections = ["description", "harvest", "usecases"];
    for (const sec of sections) {
        const element = document.getElementById(sec);
        const option = document.querySelector(`.option[data-section="${sec}"]`);
        if (section === sec) {
            element.style.display = "block";
            option.classList.add("bg-gray-200");
        } else {
            element.style.display = "none";
            option.classList.remove("bg-gray-200");
        }
    }
}