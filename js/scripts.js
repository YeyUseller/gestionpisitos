// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ accordion functionality
document.querySelectorAll('.faq button').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;

        document.querySelectorAll('.faq div').forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
                item.querySelector('div').style.maxHeight = '0';
                item.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });

        faqItem.classList.toggle('active');
        const icon = button.querySelector('i');

        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            answer.style.maxHeight = '0';
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
});
