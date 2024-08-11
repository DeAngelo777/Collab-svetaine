let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function prevTestimonial() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    showTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
}

// Initialize with the first testimonial active
showTestimonial(currentIndex);


// Sticky Navbar

const navbar = document.getElementById('navbar');

window.onscroll = function () {
    if(window.pageYOffset > 100) {
        navbar.classList.remove('headerContainer');
    } else {
        navbar.classList.add('headerContainer');
    }
}