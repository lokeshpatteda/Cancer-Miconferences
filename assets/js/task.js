// *************   Contact form **************

const contactForm = document.getElementById('contact-form'),

contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === ''){
        // show message
        contactName.classList.add('error-input');
        contactEmail.classList.add('error-input');
        contactSubject.classList.add('error-input');
        contactMessage.classList.add('error-input');
        errorMessage.classList.add('faild-mess');
        errorMessage.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>  Please fill all the input fields'
    }
    else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_uxkq5l2','template_4mdxwuf','#contact-form','e1133SZ42WQENu6MQ').then(() => {
            // show message and add color, window + dot to open emoji

            errorMessage.classList.add('color-first');
            errorMessage.innerHTML ='<i class="fa-solid fa-circle-check"></i> Message sent, Thank you for choosing me ';
            // remove message after 5 seconds

            setTimeout(() => {
                errorMessage.textContent='';
            }, 5000);
        }, (error) => {
            alert('OOPs! Somting went wrong ...', error)
        }
    );

    // clear input field
    contactName.value='';
    contactEmail.value='';
    contactSubject.value='';
    contactMessage.value='';
  }
};

contactForm.addEventListener('submit', sendEmail);
 
// *************   Contact form end ************** animated

gsap.registerPlugin(ScrollTrigger);

gsap.to("", {
  x: 400,  // Move the box 400px to the right
  opacity: 1,  // Fade in the box
  duration: 1,  // Duration of the animation (optional)
  scrollTrigger: {
    trigger: ".scroll-container",  // Trigger container
    start: "top bottom",  // Start when the top of the container reaches the bottom of the viewport
    end: "bottom top",  // End when the bottom of the container hits the top
    scrub: true,  // Smooth animation as you scroll
    markers: true,  // Optional: display start and end points
  }
});