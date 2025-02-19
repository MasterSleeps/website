function calculateFee() {
    const petType = document.getElementById('petType').value;
    const petAgeInput = document.getElementById('petAge').value.trim();
    let fee = 0;

    // Checks to see if there is a value
    if (petAgeInput === '') {
        alert('Please enter the pet\'s age.');
        return; 
    }

    // Float converter
    const petAge = parseFloat(petAgeInput);

    // Check if petAge is a valid number
    if (isNaN(petAge) || petAge < 0) {
        alert('Please enter a valid positive number for the pet\'s age.');
        return;
    }

    // Calculate the base fee based on pet type
    switch(petType) {
        case 'dog':
            fee = 100;
            break;
        case 'cat':
            fee = 80;
            break;
        case 'rabbit':
            fee = 50;
            break;
        case 'bird':
            fee = 15;
            break;
        case 'turtle':
            fee = 45;
            break;
        case 'chicken':
            fee = 20;
            break;
        default:
            alert('Please select a valid pet type.');
            return;
    }

    // If pet is older than 5, add an extra fee
    if (petAge > 5) {
        fee += 10;
    }

    // Display the fee
    document.getElementById('result').textContent = 'The adoption fee is $' + fee + '.';
}

$(document).ready(function() {
    // Hide all sections except the home section (which is the default)
    $('#pets, #adoption-process, #about-us, #news-events, #volunteering, #contact-us').hide();

    $('nav ul li a').click(function(event) {
        event.preventDefault();

        // Hide all sections
        $('#home, #pets, #adoption-process, #about-us, #news-events, #volunteering, #contact-us').hide();

        // Show the clicked section
        var targetSection = $(this).attr('href');
        $(targetSection).show();

        // Remove active class from all navigation links
        $('nav ul li a').removeClass('active');

        // Add active class to the clicked navigation link
        $(this).addClass('active');

        // If the section that is clicked is #contact-us, reset the form and remove thank-you messages
        if (targetSection === '#contact-us') {
            $('#contactForm')[0].reset();
            $('#contactForm').show();
            $('.thank-you-message').remove();
        }
    });

    $('nav ul li a[href="#home"]').addClass('active');

    $('#contactForm').off('submit').submit(function(event) {
        event.preventDefault();

        // Gather form data
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Display the submitted message
        $('#contactForm').hide();
        $('#contact-us').append('<p class="thank-you-message">Thank you, ' + name + '! Your message has been submitted.</p>');

        // Reset form fields
        $('#contactForm')[0].reset();
    });
});
