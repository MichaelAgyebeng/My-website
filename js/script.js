// Loading spinner
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Dropdowns
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
});

// Contact form validation
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value && email.value && message.value) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}
