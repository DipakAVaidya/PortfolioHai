let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// Typing Animationconst typingText = document.querySelector('.typing-text span');

const typingText = document.querySelector('.typing-text span');
const words = ['Software Developer', 'Full Stack Developer', 'Prompt Engineer', 'GenAI Enthusiast', 'Runner'];
let wordIndex = 0;

function typeAnimation() {
    const word = words[wordIndex];
    typingText.textContent = word;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeAnimation, 4000);
}

typeAnimation();

//  mail sender

(function() {
    emailjs.init('h9k0A5plcU96-0Tbu');
})();

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const serviceId = 'service_m0bn7jg';
    const templateId = 'template_pxoe3uo';
    const params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(serviceId, templateId, params)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Your message has been sent successfully!');
            form.reset(); // Clear the form after successful submission
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('An error occurred while sending your message. Please try again later.');
        });
});
